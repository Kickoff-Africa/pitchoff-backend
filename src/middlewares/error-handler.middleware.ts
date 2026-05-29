import type { NextFunction, Request, Response } from "express"
import { AppError } from "../lib/app-error.js"

export function errorHandler(
  err: unknown,
  req: Request,
  res: Response,
  _next: NextFunction
) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message,
      details: err.details ?? null,
    })
  }

  console.error(err, req.method, req.url)
  return res.status(500).json({ message: "Internal server error" })
}