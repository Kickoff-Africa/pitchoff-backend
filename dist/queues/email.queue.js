import { Queue } from "bullmq";
import { redisConnection } from "../lib/redis.js";
export const emailQueue = new Queue("email", {
    connection: redisConnection,
    defaultJobOptions: {
        attempts: 5,
        backoff: { type: "exponential", delay: 5000 },
        removeOnComplete: 100,
        removeOnFail: 500,
    },
});
//# sourceMappingURL=email.queue.js.map