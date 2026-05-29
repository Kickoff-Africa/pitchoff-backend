import type { NextFunction, Request, Response } from "express"
import { verifyAccessToken } from "../lib/jwt.js"

export type AuthenticatedRequest = Request & {
  user?: { id: string; email: string }
}

export function authMiddleware(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) {
  const header = req.headers.authorization
  if (!header || !header.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized: No token provided" })
  }

  try {
    const token = header.slice(7)
    const payload = verifyAccessToken(token)
    req.user = { id: payload.sub, email: payload.email }
    return next()
  } catch {
    return res.status(401).json({ message: "Unauthorized: Invalid token" })
  }
}