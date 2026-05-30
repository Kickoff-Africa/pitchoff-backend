import { Router } from "express"
import { authMiddleware } from "../middlewares/auth.middleware.js"
import { requirePermission } from "../middlewares/permission.middleware.js"
import { asyncHandler } from "../lib/async-handler.js"
import {
  createCampaignController,
  getApplicationEmailHistoryController,
  getCampaignController,
  listCampaignsController,
} from "../controllers/campaign.controller.js"

const router: Router = Router()

/**
 * @openapi
 * /api/admin/campaigns:
 *   post:
 *     tags: [Campaigns]
 *     summary: Queue a follow-up email campaign to selected applicants
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [applicationIds, subject, htmlBody]
 *             properties:
 *               applicationIds:
 *                 type: array
 *                 items: { type: string }
 *               subject: { type: string }
 *               htmlBody: { type: string }
 *               name: { type: string }
 *               templateKey: { type: string }
 *     responses:
 *       202:
 *         description: Campaign queued
 *   get:
 *     tags: [Campaigns]
 *     summary: List email campaigns
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of campaigns
 */
router.post(
  "/",
  authMiddleware,
  requirePermission("campaign.send"),
  asyncHandler(createCampaignController)
)

router.get(
  "/",
  authMiddleware,
  requirePermission("campaign.read"),
  asyncHandler(listCampaignsController)
)

/**
 * @openapi
 * /api/admin/campaigns/{id}:
 *   get:
 *     tags: [Campaigns]
 *     summary: Get campaign details and delivery status
 *     security:
 *       - bearerAuth: []
 */
router.get(
  "/:id",
  authMiddleware,
  requirePermission("campaign.read"),
  asyncHandler(getCampaignController)
)

export default router

/**
 * @openapi
 * /api/admin/applications/{id}/emails:
 *   get:
 *     tags: [Campaigns]
 *     summary: Email send history for an application
 *     security:
 *       - bearerAuth: []
 */
export const applicationEmailHistoryRouter: Router = Router()

applicationEmailHistoryRouter.get(
  "/:id/emails",
  authMiddleware,
  requirePermission("campaign.read"),
  asyncHandler(getApplicationEmailHistoryController)
)
