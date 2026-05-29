import { Router } from "express"
import { asyncHandler } from "../lib/async-handler.js"
import { createApplicationController } from "../controllers/application.controller.js"

const router: Router = Router()

/**
 * @openapi
 * /api/applications:
 *   post:
 *     tags: [Applications]
 *     summary: Submit a new application
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateApplication'
 *     Example:
 *       request:
 *         body:
 *           startupName: "Test Startup"
 *           startupDescription: "Test Description"
 *           startupEmail: "test@example.com"
 *           industry: "Technology"
 *           market: "Technology"
 *           stage: "IDEA_PRE_MVP"
 *           traction: "Test Traction"
 *           problem: "Test Problem"
 *           pitchDeckUrl: "https://example.com/pitch-deck"
 *           referral: "Test Referral"
 *           consentGiven: true
 *           teamMembers:
 *             - fullName: "Test Team Member"
 *               role: "Test Role"
 *               linkedInUrl: "https://example.com/linkedin"
 *               background: "Test Background"
 *     responses:
 *       201:
 *         description: Application created
 *       400:
 *         description: Validation error
 *       409:
 *         description: Email already has an application
 */
router.post("/", asyncHandler(createApplicationController))

export default router