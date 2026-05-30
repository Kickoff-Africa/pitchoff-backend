import type { PaginationMeta } from "./pagination.js";
export type PaginatedResult<T> = {
    data: T[];
    meta: PaginationMeta;
};
export declare function toPaginatedResponse<T>(data: T[], meta: PaginationMeta): {
    data: T[];
    meta: PaginationMeta;
};
