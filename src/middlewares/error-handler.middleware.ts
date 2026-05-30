import type { NextFunction, Request, Response } from "express"
import multer from "multer"
import { AppError } from "../lib/app-error.js"

export function errorHandler(
  err: unknown,
  req: Request,
  res: Response,
  _next: NextFunction
) {
  if (err instanceof Error && err.message === "Only PDF pitch decks are allowed") {
    return res.status(400).json({
      message: err.message,
      details: null,
    })
  }

  if (err instanceof multer.MulterError) {
    if (err.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({
        message: "File must be smaller than 5MB",
        details: null,
      })
    }
    return res.status(400).json({
      message: err.message,
      details: null,
    })
  }

  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message,
      details: err.details ?? null,
    })
  }

  console.error(err, req.method, req.url)
  return res.status(500).json({ message: "Internal server error" })
}