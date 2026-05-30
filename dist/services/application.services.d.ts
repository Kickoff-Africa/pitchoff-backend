import { ApplicationStatus } from "../generated/prisma/client.js";
import { type PaginationInput } from "../lib/pagination.js";
import { type ApplicationListFilters } from "../lib/application-filters.js";
export declare function createApplicationService(input: {
    startupName: string;
    startupDescription: string;
    startupEmail: string;
    industry: string;
    market: string;
    stage: any;
    traction: string;
    problem: string;
    pitchDeckUrl?: string;
    referral?: string;
    consentGiven: boolean;
    teamMembers: Array<{
        fullName: string;
        role: string;
        linkedInUrl: string;
        background: string;
    }>;
}): Promise<{
    teamMembers: {
        id: string;
        fullName: string;
        createdAt: Date;
        updatedAt: Date;
        role: string;
        sortOrder: number;
        linkedInUrl: string;
        background: string;
        isPrimary: boolean;
        applicationId: string;
    }[];
} & {
    id: string;
    status: ApplicationStatus;
    createdAt: Date;
    updatedAt: Date;
    industry: string;
    market: string;
    submittedAt: Date | null;
    publicRef: string;
    startupEmail: string;
    startupName: string;
    startupDescription: string;
    stage: string;
    traction: string;
    problem: string;
    pitchDeckUrl: string | null;
    referral: string | null;
    consentGiven: boolean;
    consentGivenAt: Date | null;
    reviewedAt: Date | null;
    applicantId: string | null;
    submittedById: string | null;
    reviewedById: string | null;
}>;
export declare function listApplicationsService(input: {
    pagination: PaginationInput;
    filters: ApplicationListFilters;
}): Promise<{
    data: ({
        teamMembers: {
            id: string;
            fullName: string;
            createdAt: Date;
            updatedAt: Date;
            role: string;
            sortOrder: number;
            linkedInUrl: string;
            background: string;
            isPrimary: boolean;
            applicationId: string;
        }[];
    } & {
        id: string;
        status: ApplicationStatus;
        createdAt: Date;
        updatedAt: Date;
        industry: string;
        market: string;
        submittedAt: Date | null;
        publicRef: string;
        startupEmail: string;
        startupName: string;
        startupDescription: string;
        stage: string;
        traction: string;
        problem: string;
        pitchDeckUrl: string | null;
        referral: string | null;
        consentGiven: boolean;
        consentGivenAt: Date | null;
        reviewedAt: Date | null;
        applicantId: string | null;
        submittedById: string | null;
        reviewedById: string | null;
    })[];
    meta: import("../lib/pagination.js").PaginationMeta;
}>;
export declare function updateApplicationStatusService(input: {
    id: string;
    status: ApplicationStatus;
    reviewerId: string;
}): Promise<{
    id: string;
    status: ApplicationStatus;
    createdAt: Date;
    updatedAt: Date;
    industry: string;
    market: string;
    submittedAt: Date | null;
    publicRef: string;
    startupEmail: string;
    startupName: string;
    startupDescription: string;
    stage: string;
    traction: string;
    problem: string;
    pitchDeckUrl: string | null;
    referral: string | null;
    consentGiven: boolean;
    consentGivenAt: Date | null;
    reviewedAt: Date | null;
    applicantId: string | null;
    submittedById: string | null;
    reviewedById: string | null;
}>;
export declare function deleteApplicationService(input: {
    id: string;
}): Promise<{
    teamMembers: {
        id: string;
        fullName: string;
        createdAt: Date;
        updatedAt: Date;
        role: string;
        sortOrder: number;
        linkedInUrl: string;
        background: string;
        isPrimary: boolean;
        applicationId: string;
    }[];
} & {
    id: string;
    status: ApplicationStatus;
    createdAt: Date;
    updatedAt: Date;
    industry: string;
    market: string;
    submittedAt: Date | null;
    publicRef: string;
    startupEmail: string;
    startupName: string;
    startupDescription: string;
    stage: string;
    traction: string;
    problem: string;
    pitchDeckUrl: string | null;
    referral: string | null;
    consentGiven: boolean;
    consentGivenAt: Date | null;
    reviewedAt: Date | null;
    applicantId: string | null;
    submittedById: string | null;
    reviewedById: string | null;
}>;
