import { ApplicationStatus, Prisma } from "../generated/prisma/client.js";
import { prisma } from "../lib/prisma.js";
import { AppError } from "../lib/app-error.js";
import { UserStatus } from "../generated/prisma/client.js";
import logger from "../configs/logger.js";
import { buildPaginationMeta } from "../lib/pagination.js";
import { buildApplicationWhere } from "../lib/application-filters.js";
import { notifyApplicationReceived } from "./notification.service.js";
async function getOrCreateApplicantByEmail(email, fullName) {
    const normalizedEmail = email.trim().toLowerCase();
    const existing = await prisma.user.findUnique({
        where: { email: normalizedEmail },
        select: { id: true, email: true },
    });
    if (existing)
        return existing;
    return prisma.user.create({
        data: {
            email: normalizedEmail,
            fullName: fullName?.trim() || null,
            status: UserStatus.ACTIVE,
        },
        select: { id: true, email: true },
    });
}
export async function createApplicationService(input) {
    const applicant = await getOrCreateApplicantByEmail(input.startupEmail, input.teamMembers?.[0]?.fullName);
    // block duplicate applications per applicant
    const existingApplication = await prisma.application.findFirst({
        where: { applicantId: applicant.id },
        select: { id: true, publicRef: true, createdAt: true },
    });
    if (existingApplication) {
        logger.error("An application already exists for this email.", { startupEmail: input.startupEmail });
        throw new AppError("An application already exists for this email.", 409, {
            applicationRef: existingApplication.publicRef,
        });
    }
    const application = await prisma.application.create({
        data: {
            startupName: input.startupName,
            startupDescription: input.startupDescription,
            startupEmail: applicant.email, // normalized
            industry: input.industry,
            market: input.market,
            stage: input.stage,
            traction: input.traction,
            problem: input.problem,
            pitchDeckUrl: input.pitchDeckUrl,
            referral: input.referral,
            consentGiven: input.consentGiven,
            consentGivenAt: input.consentGiven ? new Date() : null,
            submittedAt: new Date(),
            applicantId: applicant.id, // <- important link
            teamMembers: {
                create: input.teamMembers.map((m, i) => ({
                    fullName: m.fullName,
                    role: m.role,
                    linkedInUrl: m.linkedInUrl,
                    background: m.background,
                    isPrimary: i === 0,
                    sortOrder: i,
                })),
            },
        },
        include: { teamMembers: true },
    });
    await notifyApplicationReceived({
        to: applicant.email,
        startupName: input.startupName,
        publicRef: application.publicRef,
    });
    return application;
}
export async function listApplicationsService(input) {
    const { pagination, filters } = input;
    const where = buildApplicationWhere(filters);
    const [total, data] = await prisma.$transaction([
        prisma.application.count({ where }),
        prisma.application.findMany({
            where,
            include: { teamMembers: true },
            orderBy: { [pagination.sortBy]: pagination.sortOrder },
            skip: pagination.skip,
            take: pagination.limit,
        }),
    ]);
    return {
        data,
        meta: buildPaginationMeta(total, pagination.page, pagination.limit),
    };
}
export async function updateApplicationStatusService(input) {
    return prisma.application.update({
        where: { id: input.id },
        data: {
            status: input.status,
            reviewedAt: new Date(),
            reviewedById: input.reviewerId,
        },
    });
}
export async function deleteApplicationService(input) {
    try {
        return await prisma.application.delete({
            where: { id: input.id },
            include: { teamMembers: true },
        });
    }
    catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError &&
            error.code === "P2025") {
            throw new AppError("Application not found", 404);
        }
        throw error;
    }
}
//# sourceMappingURL=application.services.js.map