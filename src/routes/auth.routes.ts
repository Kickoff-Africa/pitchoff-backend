import { Router } from "express"
import { loginController } from "../controllers/auth.controller.js"
import { asyncHandler } from "../lib/async-handler.js"

const router: Router = Router()



/**
 * @openapi
 * /api/auth/login:
 *   post:
 *     tags: [Auth]
 *     summary: Admin login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email, password]
 *             properties:
 *               email: { type: string, format: email }
 *               password: { type: string, format: password }
 *     responses:
 *       200:
 *         description: JWT + user info
 *       401:
 *         description: Invalid credentials
 */
router.post("/login", asyncHandler(loginController))

export default router