import { Worker } from "bullmq";
import { redisConnection } from "../lib/redis.js";
import { sendApplicationReceivedEmail, sendCampaignEmail, } from "../services/email.service.js";
import { markDeliveryFailed, markDeliverySent, } from "../services/campaign.service.js";
import logger from "../configs/logger.js";
function isCampaignJob(data) {
    return "deliveryId" in data && "campaignId" in data;
}
export const emailWorker = new Worker("email", async (job) => {
    if (job.name === "application.received") {
        await sendApplicationReceivedEmail(job.data);
        return;
    }
    if (job.name === "campaign.send" && isCampaignJob(job.data)) {
        await sendCampaignEmail(job.data);
        await markDeliverySent(job.data.deliveryId, job.attemptsMade);
        return;
    }
    throw new Error(`Unknown email job: ${job.name}`);
}, { connection: redisConnection, concurrency: 5 });
emailWorker.on("completed", (job) => {
    logger.info(`Email job completed: ${job.id}`);
});
emailWorker.on("failed", async (job, err) => {
    logger.error(`Email job failed: ${job?.id}`, { error: err.message });
    if (job?.name !== "campaign.send" || !isCampaignJob(job.data))
        return;
    const maxAttempts = job.opts.attempts ?? 1;
    if (job.attemptsMade < maxAttempts)
        return;
    await markDeliveryFailed(job.data.deliveryId, err.message, job.attemptsMade);
});
//# sourceMappingURL=email.worker.js.map