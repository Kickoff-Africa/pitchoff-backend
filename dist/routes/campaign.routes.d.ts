import { Router } from "express";
declare const router: Router;
export default router;
/**
 * @openapi
 * /api/admin/applications/{id}/emails:
 *   get:
 *     tags: [Campaigns]
 *     summary: Email send history for an application
 *     security:
 *       - bearerAuth: []
 */
export declare const applicationEmailHistoryRouter: Router;
