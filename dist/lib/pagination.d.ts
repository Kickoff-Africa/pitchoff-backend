import type { Request } from "express";
export type PaginationInput = {
    page: number;
    limit: number;
    skip: number;
    sortBy: string;
    sortOrder: "asc" | "desc";
};
export type PaginationMeta = {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
};
export declare function parsePagination(req: Request, options?: {
    defaultLimit?: number;
    maxLimit?: number;
    defaultSortBy?: string;
    allowedSortFields?: string[];
}): PaginationInput;
export declare function buildPaginationMeta(total: number, page: number, limit: number): PaginationMeta;
