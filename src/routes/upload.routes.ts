import { Router } from "express"
import { asyncHandler } from "../lib/async-handler.js"
import { pitchDeckUpload } from "../lib/upload.js"
import { uploadPitchDeckController } from "../controllers/upload.controller.js"

const router: Router = Router()

/**
 * @openapi
 * /api/uploads/pitch-deck:
 *   post:
 *     tags: [Uploads]
 *     summary: Upload a pitch deck PDF to Cloudinary
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required: [file]
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: File uploaded
 *       400:
 *         description: Invalid file
 *       503:
 *         description: Upload not configured
 */
router.post(
  "/pitch-deck",
  pitchDeckUpload.single("file"),
  asyncHandler(uploadPitchDeckController)
)

export default router
