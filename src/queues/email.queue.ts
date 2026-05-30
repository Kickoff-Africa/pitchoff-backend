import { Queue } from "bullmq"
import { redisConnection } from "../lib/redis.js"

export type EmailJobName =
  | "application.received"
  | "application.status_changed"
  | "campaign.send"

export type ApplicationReceivedJobData = {
  to: string
  startupName: string
  publicRef: string
}

export type CampaignSendJobData = {
  deliveryId: string
  campaignId: string
  to: string
  startupName: string
  publicRef: string
  subject: string
  htmlBody: string
}

export type EmailJobData = ApplicationReceivedJobData | CampaignSendJobData

export const emailQueue = new Queue<EmailJobData>("email", {
  connection: redisConnection,
  defaultJobOptions: {
    attempts: 5,
    backoff: { type: "exponential", delay: 5000 },
    removeOnComplete: 100,
    removeOnFail: 500,
  },
})
