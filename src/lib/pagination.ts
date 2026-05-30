import type { Request } from "express"
import { AppError } from "./app-error.js"

export type PaginationInput = {
  page: number
  limit: number
  skip: number
  sortBy: string
  sortOrder: "asc" | "desc"
}

export type PaginationMeta = {
  page: number
  limit: number
  total: number
  totalPages: number
  hasNextPage: boolean
  hasPrevPage: boolean
}

const DEFAULT_PAGE = 1
const DEFAULT_LIMIT = 20
const MAX_LIMIT = 100

function parsePositiveInt(value: unknown, fallback: number) {
  const parsed = Number(value)
  if (!Number.isFinite(parsed) || parsed < 1) return fallback
  return Math.floor(parsed)
}

export function parsePagination(
  req: Request,
  options?: {
    defaultLimit?: number
    maxLimit?: number
    defaultSortBy?: string
    allowedSortFields?: string[]
  }
): PaginationInput {
  const defaultLimit = options?.defaultLimit ?? DEFAULT_LIMIT
  const maxLimit = options?.maxLimit ?? MAX_LIMIT
  const defaultSortBy = options?.defaultSortBy ?? "createdAt"
  const allowedSortFields = options?.allowedSortFields ?? [defaultSortBy]

  const page = parsePositiveInt(req.query.page, DEFAULT_PAGE)
  const limit = Math.min(parsePositiveInt(req.query.limit, defaultLimit), maxLimit)

  const sortBy =
    typeof req.query.sortBy === "string" && allowedSortFields.includes(req.query.sortBy)
      ? req.query.sortBy
      : defaultSortBy

  const sortOrder =
    req.query.sortOrder === "asc" || req.query.sortOrder === "desc"
      ? req.query.sortOrder
      : "desc"

  return {
    page,
    limit,
    skip: (page - 1) * limit,
    sortBy,
    sortOrder,
  }
}

export function buildPaginationMeta(
    total: number,
    page: number,
    limit: number
  ): PaginationMeta {
    const safeTotal = Number(total) || 0
    const safePage = Number(page) > 0 ? Number(page) : 1
    const safeLimit = Number(limit) > 0 ? Number(limit) : DEFAULT_LIMIT
  
    const totalPages =
      safeTotal === 0 ? 0 : Math.ceil(safeTotal / safeLimit)
  
    return {
      page: safePage,
      limit: safeLimit,
      total: safeTotal,
      totalPages,
      hasNextPage: safePage < totalPages,
      hasPrevPage: safePage > 1 && totalPages > 0,
    }
  }