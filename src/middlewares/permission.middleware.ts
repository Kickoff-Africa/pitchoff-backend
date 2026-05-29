import type { NextFunction, Response } from "express"
import type { AuthenticatedRequest } from "../middlewares/auth.middleware.js"
import { userHasPermission } from "../services/rbac.service.js"

export function requirePermission(permissionKey: string) {
  return async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    if (!req.user) return res.status(401).json({ message: "Unauthorized" })

    const allowed = await userHasPermission(req.user.id, permissionKey)
    if (!allowed) return res.status(403).json({ message: "Forbidden" })

    return next()
  }
}