import { ApplicationStatus, type ApplicationStage } from "../generated/prisma/client.js"
import { prisma } from "../lib/prisma.js"
import { AppError } from "../lib/app-error.js"
import { UserStatus } from "../generated/prisma/client.js"

type CreateApplicationInput = {
  startupName: string
  startupDescription: string
  startupEmail: string
  industry: string
  market: string
  stage: ApplicationStage
  traction: string
  problem: string
  pitchDeckUrl?: string
  referral?: string
  consentGiven: boolean
  teamMembers: Array<{
    fullName: string
    role: string
    linkedInUrl: string
    background: string
    isPrimary?: boolean
    sortOrder?: number
  }>
}



async function getOrCreateApplicantByEmail(email: string, fullName?: string) {
  const normalizedEmail = email.trim().toLowerCase()

  const existing = await prisma.user.findUnique({
    where: { email: normalizedEmail },
    select: { id: true, email: true },
  })

  if (existing) return existing

  return prisma.user.create({
    data: {
      email: normalizedEmail,
      fullName: fullName?.trim() || null,
      status: UserStatus.ACTIVE,
    },
    select: { id: true, email: true },
  })
}

export async function createApplicationService(input: {
  startupName: string
  startupDescription: string
  startupEmail: string
  industry: string
  market: string
  stage: any
  traction: string
  problem: string
  pitchDeckUrl?: string
  referral?: string
  consentGiven: boolean
  teamMembers: Array<{
    fullName: string
    role: string
    linkedInUrl: string
    background: string
  }>
}) {
  const applicant = await getOrCreateApplicantByEmail(
    input.startupEmail,
    input.teamMembers?.[0]?.fullName
  )

  // block duplicate applications per applicant
  const existingApplication = await prisma.application.findFirst({
    where: { applicantId: applicant.id },
    select: { id: true, publicRef: true, createdAt: true },
  })

  if (existingApplication) {
    throw new AppError("An application already exists for this email.", 409, {
      applicationRef: existingApplication.publicRef,
    })
  }

  return prisma.application.create({
    data: {
      startupName: input.startupName,
      startupDescription: input.startupDescription,
      startupEmail: applicant.email, // normalized
      industry: input.industry,
      market: input.market,
      stage: input.stage,
      traction: input.traction,
      problem: input.problem,
      pitchDeckUrl: input.pitchDeckUrl,
      referral: input.referral,
      consentGiven: input.consentGiven,
      consentGivenAt: input.consentGiven ? new Date() : null,
      submittedAt: new Date(),
      applicantId: applicant.id, // <- important link
      teamMembers: {
        create: input.teamMembers.map((m, i) => ({
          fullName: m.fullName,
          role: m.role,
          linkedInUrl: m.linkedInUrl,
          background: m.background,
          isPrimary: i === 0,
          sortOrder: i,
        })),
      },
    },
    include: { teamMembers: true },
  })
}

export async function listApplicationsService(params: {
  status?: ApplicationStatus
  q?: string
}) {
  const { status, q } = params

  return prisma.application.findMany({
    where: {
      status: status ?? undefined,
      OR: q
        ? [
            { startupName: { contains: q, mode: "insensitive" } },
            { startupEmail: { contains: q, mode: "insensitive" } },
            { publicRef: { contains: q, mode: "insensitive" } },
          ]
        : undefined,
    },
    include: { teamMembers: true },
    orderBy: { createdAt: "desc" },
  })
}

export async function updateApplicationStatusService(input: {
  id: string
  status: ApplicationStatus
  reviewerId: string
}) {
  return prisma.application.update({
    where: { id: input.id },
    data: {
      status: input.status,
      reviewedAt: new Date(),
      reviewedById: input.reviewerId,
    },
  })
}