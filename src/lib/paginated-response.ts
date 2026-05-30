import type { PaginationMeta } from "./pagination.js"

export type PaginatedResult<T> = {
  data: T[]
  meta: PaginationMeta
}

export function toPaginatedResponse<T>(data: T[], meta: PaginationMeta) {
  return { data, meta }
}