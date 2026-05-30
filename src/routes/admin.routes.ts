import { Router } from "express"
import { authMiddleware } from "../middlewares/auth.middleware.js"
import { requirePermission } from "../middlewares/permission.middleware.js"
import { asyncHandler } from "../lib/async-handler.js"
import { deleteApplicationController, listApplicationsController, updateApplicationStatusController } from "../controllers/application.controller.js"

const router: Router = Router()


/**
 * @openapi
 * /api/admin/applications:
 *   get:
 *     tags: [Admin]
 *     summary: List applications
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: status
 *         schema: { type: string, enum: [DRAFT, SUBMITTED, IN_REVIEW, SHORTLISTED, REJECTED, APPROVED] }
 *       - in: query
 *         name: q
 *         schema: { type: string }
 *     responses:
 *       200:
 *         description: List of applications
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 */
router.get(
    "/applications",
    authMiddleware,
    requirePermission("application.read"),
    asyncHandler(listApplicationsController)
  )

/**
 * @openapi
 * /api/admin/applications/{id}/status:
 *   patch:
 *     tags: [Admin]
 *     summary: Update application status
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: { type: string }
 *     responses:
 *       200:
 *         description: Application status updated
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 */
  router.patch(
    "/applications/:id/status",
    authMiddleware,
    requirePermission("application.update_status"),
    asyncHandler(updateApplicationStatusController)
  )

  /**
 * @openapi
 * /api/admin/applications/{id}:
 *   delete:
 *     tags: [Admin]
 *     summary: Delete application
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: { type: string }
 *     responses:
 *       200:
 *         description: Application deleted
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 */
router.delete(
  "/applications/:id",
  authMiddleware,
  requirePermission("application.delete"),
  asyncHandler(deleteApplicationController)
)

export default router