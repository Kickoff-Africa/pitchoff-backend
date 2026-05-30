import { Resend } from "resend"
import { renderEmailTemplate } from "../lib/email-template.js"

const resend = new Resend(process.env.RESEND_API_KEY)
const from = process.env.EMAIL_FROM ?? "PitchOff <onboarding@resend.dev>"

export async function sendApplicationReceivedEmail(input: {
  to: string
  startupName: string
  publicRef: string
}) {
  const { data, error } = await resend.emails.send({
    from,
    to: [input.to],
    subject: "Application received — Pitch Off",
    html: `
      <p>Hi,</p>
      <p>We received your application for <strong>${input.startupName}</strong>.</p>
      <p>Reference: <strong>${input.publicRef}</strong></p>
    `,
  })

  if (error) throw new Error(error.message)
  return data
}

export async function sendCampaignEmail(input: {
  to: string
  startupName: string
  publicRef: string
  subject: string
  htmlBody: string
}) {
  const html = renderEmailTemplate(input.htmlBody, {
    startupName: input.startupName,
    publicRef: input.publicRef,
    startupEmail: input.to,
  })

  const { data, error } = await resend.emails.send({
    from,
    to: [input.to],
    subject: input.subject,
    html,
  })

  if (error) throw new Error(error.message)
  return data
}
