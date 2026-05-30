import { AppError } from "./app-error.js";
import { ApplicationStatus } from "../generated/prisma/client.js";
function parseOptionalString(value) {
    if (typeof value !== "string")
        return undefined;
    const trimmed = value.trim();
    return trimmed.length > 0 ? trimmed : undefined;
}
function parseEnumValue(value, enumObj, fieldName) {
    if (value === undefined || value === null || value === "")
        return undefined;
    if (typeof value !== "string" || !Object.values(enumObj).includes(value)) {
        throw new AppError(`Invalid ${fieldName}`, 400);
    }
    return value;
}
function parseDate(value, fieldName) {
    const raw = parseOptionalString(value);
    if (!raw)
        return undefined;
    const date = new Date(raw);
    if (Number.isNaN(date.getTime())) {
        throw new AppError(`Invalid ${fieldName}`, 400);
    }
    return date;
}
export function parseApplicationFilters(req) {
    const status = parseEnumValue(req.query.status, ApplicationStatus, "status");
    const fromDate = parseDate(req.query.fromDate, "fromDate");
    const toDate = parseDate(req.query.toDate, "toDate");
    if (fromDate && toDate && fromDate > toDate) {
        throw new AppError("fromDate cannot be after toDate", 400);
    }
    return {
        q: parseOptionalString(req.query.q),
        status,
        industry: parseOptionalString(req.query.industry) || undefined,
        market: parseOptionalString(req.query.market) || undefined,
        fromDate,
        toDate: toDate
            ? new Date(toDate.setHours(23, 59, 59, 999))
            : undefined,
    };
}
export function buildApplicationWhere(filters) {
    const and = [];
    if (filters?.status)
        and.push({ status: filters.status });
    if (filters?.industry)
        and.push({ industry: filters.industry });
    if (filters?.market)
        and.push({ market: filters.market });
    if (filters?.fromDate || filters?.toDate) {
        and.push({
            submittedAt: {
                ...(filters.fromDate ? { gte: filters.fromDate } : {}),
                ...(filters.toDate ? { lte: filters.toDate } : {}),
            },
        });
    }
    if (filters?.q) {
        and.push({
            OR: [
                { startupName: { contains: filters.q, mode: "insensitive" } },
                { startupEmail: { contains: filters.q, mode: "insensitive" } },
                { publicRef: { contains: filters.q, mode: "insensitive" } },
                { industry: { contains: filters.q, mode: "insensitive" } },
                { market: { contains: filters.q, mode: "insensitive" } },
            ],
        });
    }
    return and.length > 0 ? { AND: and } : {};
}
//# sourceMappingURL=application-filters.js.map