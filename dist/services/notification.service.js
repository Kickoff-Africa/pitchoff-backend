import { emailQueue } from "../queues/email.queue.js";
export async function notifyApplicationReceived(input) {
    await emailQueue.add("application.received", input, {
        jobId: `app-received-${input.publicRef}`, // prevents duplicate enqueue
    });
}
//# sourceMappingURL=notification.service.js.map