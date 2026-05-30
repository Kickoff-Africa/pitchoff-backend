import { EmailDeliveryStatus } from "../generated/prisma/client.js"
import { prisma } from "../lib/prisma.js"
import { AppError } from "../lib/app-error.js"
import { emailQueue } from "../queues/email.queue.js"
import type { CampaignSendJobData } from "../queues/email.queue.js"

export type CreateCampaignInput = {
  applicationIds: string[]
  subject: string
  htmlBody: string
  name?: string
  templateKey?: string
  createdById: string
}

export async function createCampaignService(input: CreateCampaignInput) {
  const uniqueIds = [...new Set(input.applicationIds.map((id) => id.trim()).filter(Boolean))]

  if (uniqueIds.length === 0) {
    throw new AppError("At least one application must be selected", 400)
  }

  if (!input.subject.trim()) {
    throw new AppError("Subject is required", 400)
  }

  if (!input.htmlBody.trim()) {
    throw new AppError("Email body is required", 400)
  }

  const applications = await prisma.application.findMany({
    where: { id: { in: uniqueIds } },
    select: {
      id: true,
      startupName: true,
      startupEmail: true,
      publicRef: true,
    },
  })

  if (applications.length !== uniqueIds.length) {
    const found = new Set(applications.map((app) => app.id))
    const missing = uniqueIds.filter((id) => !found.has(id))
    throw new AppError("Some applications were not found", 404, { missing })
  }

  const campaign = await prisma.emailCampaign.create({
    data: {
      name: input.name?.trim() || null,
      subject: input.subject.trim(),
      htmlBody: input.htmlBody,
      templateKey: input.templateKey?.trim() || null,
      createdById: input.createdById,
      deliveries: {
        create: applications.map((app) => ({
          applicationId: app.id,
          recipientEmail: app.startupEmail,
          status: EmailDeliveryStatus.QUEUED,
        })),
      },
    },
    include: {
      deliveries: {
        select: {
          id: true,
          applicationId: true,
          recipientEmail: true,
        },
      },
    },
  })

  const applicationById = new Map(applications.map((app) => [app.id, app]))

  const jobs = campaign.deliveries.map((delivery) => {
    const app = applicationById.get(delivery.applicationId)!
    const jobId = `delivery-${delivery.id}`
    const data: CampaignSendJobData = {
      deliveryId: delivery.id,
      campaignId: campaign.id,
      to: delivery.recipientEmail,
      startupName: app.startupName,
      publicRef: app.publicRef,
      subject: campaign.subject,
      htmlBody: campaign.htmlBody,
    }

    return {
      name: "campaign.send" as const,
      data,
      opts: { jobId },
    }
  })

  await emailQueue.addBulk(jobs)

  await Promise.all(
    campaign.deliveries.map((delivery) =>
      prisma.emailDelivery.update({
        where: { id: delivery.id },
        data: { jobId: `delivery-${delivery.id}` },
      })
    )
  )

  return {
    campaignId: campaign.id,
    name: campaign.name,
    subject: campaign.subject,
    queued: campaign.deliveries.length,
    createdAt: campaign.createdAt,
  }
}

export async function getCampaignService(campaignId: string) {
  const campaign = await prisma.emailCampaign.findUnique({
    where: { id: campaignId },
    include: {
      createdBy: { select: { id: true, email: true, fullName: true } },
      deliveries: {
        orderBy: { createdAt: "asc" },
        include: {
          application: {
            select: {
              id: true,
              startupName: true,
              publicRef: true,
              status: true,
            },
          },
        },
      },
    },
  })

  if (!campaign) {
    throw new AppError("Campaign not found", 404)
  }

  const stats = campaign.deliveries.reduce(
    (acc, delivery) => {
      acc.total += 1
      if (delivery.status === EmailDeliveryStatus.QUEUED) acc.queued += 1
      if (delivery.status === EmailDeliveryStatus.SENT) acc.sent += 1
      if (delivery.status === EmailDeliveryStatus.FAILED) acc.failed += 1
      return acc
    },
    { total: 0, queued: 0, sent: 0, failed: 0 }
  )

  return { ...campaign, stats }
}

export async function listCampaignsService() {
  const campaigns = await prisma.emailCampaign.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      createdBy: { select: { id: true, email: true, fullName: true } },
      _count: { select: { deliveries: true } },
      deliveries: { select: { status: true } },
    },
  })

  return campaigns.map((campaign) => {
    const stats = campaign.deliveries.reduce(
      (acc, delivery) => {
        if (delivery.status === EmailDeliveryStatus.QUEUED) acc.queued += 1
        if (delivery.status === EmailDeliveryStatus.SENT) acc.sent += 1
        if (delivery.status === EmailDeliveryStatus.FAILED) acc.failed += 1
        return acc
      },
      { queued: 0, sent: 0, failed: 0 }
    )

    const { deliveries: _deliveries, ...rest } = campaign
    return { ...rest, stats }
  })
}

export async function getApplicationEmailHistoryService(applicationId: string) {
  const application = await prisma.application.findUnique({
    where: { id: applicationId },
    select: { id: true, startupName: true, startupEmail: true, publicRef: true },
  })

  if (!application) {
    throw new AppError("Application not found", 404)
  }

  const deliveries = await prisma.emailDelivery.findMany({
    where: { applicationId },
    orderBy: { createdAt: "desc" },
    include: {
      campaign: {
        select: {
          id: true,
          name: true,
          subject: true,
          createdAt: true,
          createdBy: { select: { id: true, email: true, fullName: true } },
        },
      },
    },
  })

  return { application, deliveries }
}

export async function markDeliverySent(deliveryId: string, attempts: number) {
  await prisma.emailDelivery.update({
    where: { id: deliveryId },
    data: {
      status: EmailDeliveryStatus.SENT,
      sentAt: new Date(),
      failedAt: null,
      errorMessage: null,
      attempts,
    },
  })
}

export async function markDeliveryFailed(
  deliveryId: string,
  errorMessage: string,
  attempts: number
) {
  await prisma.emailDelivery.update({
    where: { id: deliveryId },
    data: {
      status: EmailDeliveryStatus.FAILED,
      failedAt: new Date(),
      errorMessage,
      attempts,
    },
  })
}
