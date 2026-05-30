import { EmailDeliveryStatus } from "../generated/prisma/client.js";
export type CreateCampaignInput = {
    applicationIds: string[];
    subject: string;
    htmlBody: string;
    name?: string;
    templateKey?: string;
    createdById: string;
};
export declare function createCampaignService(input: CreateCampaignInput): Promise<{
    campaignId: string;
    name: string | null;
    subject: string;
    queued: number;
    createdAt: Date;
}>;
export declare function getCampaignService(campaignId: string): Promise<{
    stats: {
        total: number;
        queued: number;
        sent: number;
        failed: number;
    };
    createdBy: {
        id: string;
        email: string;
        fullName: string | null;
    };
    deliveries: ({
        application: {
            id: string;
            status: import("../generated/prisma/enums.js").ApplicationStatus;
            publicRef: string;
            startupName: string;
        };
    } & {
        id: string;
        status: EmailDeliveryStatus;
        createdAt: Date;
        updatedAt: Date;
        attempts: number;
        jobId: string | null;
        recipientEmail: string;
        sentAt: Date | null;
        failedAt: Date | null;
        errorMessage: string | null;
        applicationId: string;
        campaignId: string;
    })[];
    id: string;
    createdAt: Date;
    updatedAt: Date;
    name: string | null;
    subject: string;
    templateKey: string | null;
    htmlBody: string;
    createdById: string;
}>;
export declare function listCampaignsService(): Promise<{
    stats: {
        queued: number;
        sent: number;
        failed: number;
    };
    _count: {
        deliveries: number;
    };
    createdBy: {
        id: string;
        email: string;
        fullName: string | null;
    };
    id: string;
    createdAt: Date;
    updatedAt: Date;
    name: string | null;
    subject: string;
    templateKey: string | null;
    htmlBody: string;
    createdById: string;
}[]>;
export declare function getApplicationEmailHistoryService(applicationId: string): Promise<{
    application: {
        id: string;
        publicRef: string;
        startupEmail: string;
        startupName: string;
    };
    deliveries: ({
        campaign: {
            id: string;
            createdAt: Date;
            name: string | null;
            subject: string;
            createdBy: {
                id: string;
                email: string;
                fullName: string | null;
            };
        };
    } & {
        id: string;
        status: EmailDeliveryStatus;
        createdAt: Date;
        updatedAt: Date;
        attempts: number;
        jobId: string | null;
        recipientEmail: string;
        sentAt: Date | null;
        failedAt: Date | null;
        errorMessage: string | null;
        applicationId: string;
        campaignId: string;
    })[];
}>;
export declare function markDeliverySent(deliveryId: string, attempts: number): Promise<void>;
export declare function markDeliveryFailed(deliveryId: string, errorMessage: string, attempts: number): Promise<void>;
