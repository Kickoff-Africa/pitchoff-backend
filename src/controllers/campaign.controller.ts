import type { Response } from "express"
import { AppError } from "../lib/app-error.js"
import type { AuthenticatedRequest } from "../middlewares/auth.middleware.js"
import {
  createCampaignService,
  getApplicationEmailHistoryService,
  getCampaignService,
  listCampaignsService,
} from "../services/campaign.service.js"

export async function createCampaignController(
  req: AuthenticatedRequest,
  res: Response
) {
  if (!req.user) throw new AppError("Unauthorized", 401)

  const { applicationIds, subject, htmlBody, name, templateKey } = req.body as {
    applicationIds?: string[]
    subject?: string
    htmlBody?: string
    name?: string
    templateKey?: string
  }

  if (!Array.isArray(applicationIds)) {
    throw new AppError("applicationIds must be an array", 400)
  }

  const result = await createCampaignService({
    applicationIds,
    subject: subject ?? "",
    htmlBody: htmlBody ?? "",
    name,
    templateKey,
    createdById: req.user.id,
  })

  return res.status(202).json({
    message: "Campaign queued successfully",
    ...result,
  })
}

export async function listCampaignsController(_req: AuthenticatedRequest, res: Response) {
  const campaigns = await listCampaignsService()
  return res.json(campaigns)
}

export async function getCampaignController(req: AuthenticatedRequest, res: Response) {
  const campaign = await getCampaignService(req.params.id as string)
  return res.json(campaign)
}

export async function getApplicationEmailHistoryController(
  req: AuthenticatedRequest,
  res: Response
) {
  const history = await getApplicationEmailHistoryService(req.params.id as string)
  return res.json(history)
}
