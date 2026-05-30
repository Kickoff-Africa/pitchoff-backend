import { Worker } from "bullmq";
import type { EmailJobData } from "../queues/email.queue.js";
export declare const emailWorker: Worker<EmailJobData, any, string>;
