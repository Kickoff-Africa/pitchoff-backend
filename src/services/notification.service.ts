import { emailQueue } from "../queues/email.queue.js"

export async function notifyApplicationReceived(input: {
  to: string
  startupName: string
  publicRef: string
}) {
  await emailQueue.add("application.received", input, {
    jobId: `app-received-${input.publicRef}`, // prevents duplicate enqueue
  })
}