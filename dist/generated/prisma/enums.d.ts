export declare const UserStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly INVITED: "INVITED";
    readonly DISABLED: "DISABLED";
};
export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus];
export declare const ApplicationStatus: {
    readonly DRAFT: "DRAFT";
    readonly SUBMITTED: "SUBMITTED";
    readonly IN_REVIEW: "IN_REVIEW";
    readonly SHORTLISTED: "SHORTLISTED";
    readonly REJECTED: "REJECTED";
    readonly APPROVED: "APPROVED";
};
export type ApplicationStatus = (typeof ApplicationStatus)[keyof typeof ApplicationStatus];
export declare const ApplicationStage: {
    readonly IDEA_PRE_MVP: "IDEA_PRE_MVP";
    readonly MVP: "MVP";
    readonly LIVE_PRODUCT: "LIVE_PRODUCT";
    readonly REVENUE_GENERATING: "REVENUE_GENERATING";
    readonly SCALING: "SCALING";
};
export type ApplicationStage = (typeof ApplicationStage)[keyof typeof ApplicationStage];
export declare const EmailDeliveryStatus: {
    readonly QUEUED: "QUEUED";
    readonly SENT: "SENT";
    readonly FAILED: "FAILED";
};
export type EmailDeliveryStatus = (typeof EmailDeliveryStatus)[keyof typeof EmailDeliveryStatus];
