import type { Request } from "express";
import { ApplicationStatus } from "../generated/prisma/client.js";
export type ApplicationListFilters = {
    q?: string;
    status?: ApplicationStatus;
    industry?: string;
    market?: string;
    fromDate?: Date;
    toDate?: Date;
};
export declare function parseApplicationFilters(req: Request): ApplicationListFilters;
export declare function buildApplicationWhere(filters: ApplicationListFilters): {
    AND: Record<string, unknown>[];
} | {
    AND?: undefined;
};
