import { Queue } from "bullmq";
export type EmailJobName = "application.received" | "application.status_changed" | "campaign.send";
export type ApplicationReceivedJobData = {
    to: string;
    startupName: string;
    publicRef: string;
};
export type CampaignSendJobData = {
    deliveryId: string;
    campaignId: string;
    to: string;
    startupName: string;
    publicRef: string;
    subject: string;
    htmlBody: string;
};
export type EmailJobData = ApplicationReceivedJobData | CampaignSendJobData;
export declare const emailQueue: Queue<EmailJobData, any, string, EmailJobData, any, string>;
