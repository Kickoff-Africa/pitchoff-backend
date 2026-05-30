import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client/runtime/client").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client/runtime/client").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client/runtime/client").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly Role: "Role";
    readonly Permission: "Permission";
    readonly UserRole: "UserRole";
    readonly RolePermission: "RolePermission";
    readonly Application: "Application";
    readonly EmailCampaign: "EmailCampaign";
    readonly EmailDelivery: "EmailDelivery";
    readonly ApplicationTeamMember: "ApplicationTeamMember";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly fullName: "fullName";
    readonly passwordHash: "passwordHash";
    readonly status: "status";
    readonly lastLoginAt: "lastLoginAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const RoleScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
    readonly isSystem: "isSystem";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum];
export declare const PermissionScalarFieldEnum: {
    readonly id: "id";
    readonly key: "key";
    readonly description: "description";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PermissionScalarFieldEnum = (typeof PermissionScalarFieldEnum)[keyof typeof PermissionScalarFieldEnum];
export declare const UserRoleScalarFieldEnum: {
    readonly userId: "userId";
    readonly roleId: "roleId";
    readonly assignedAt: "assignedAt";
    readonly assignedById: "assignedById";
};
export type UserRoleScalarFieldEnum = (typeof UserRoleScalarFieldEnum)[keyof typeof UserRoleScalarFieldEnum];
export declare const RolePermissionScalarFieldEnum: {
    readonly roleId: "roleId";
    readonly permissionId: "permissionId";
    readonly grantedAt: "grantedAt";
};
export type RolePermissionScalarFieldEnum = (typeof RolePermissionScalarFieldEnum)[keyof typeof RolePermissionScalarFieldEnum];
export declare const ApplicationScalarFieldEnum: {
    readonly id: "id";
    readonly publicRef: "publicRef";
    readonly startupName: "startupName";
    readonly startupDescription: "startupDescription";
    readonly startupEmail: "startupEmail";
    readonly industry: "industry";
    readonly market: "market";
    readonly stage: "stage";
    readonly traction: "traction";
    readonly problem: "problem";
    readonly pitchDeckUrl: "pitchDeckUrl";
    readonly referral: "referral";
    readonly consentGiven: "consentGiven";
    readonly consentGivenAt: "consentGivenAt";
    readonly status: "status";
    readonly submittedAt: "submittedAt";
    readonly reviewedAt: "reviewedAt";
    readonly applicantId: "applicantId";
    readonly submittedById: "submittedById";
    readonly reviewedById: "reviewedById";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ApplicationScalarFieldEnum = (typeof ApplicationScalarFieldEnum)[keyof typeof ApplicationScalarFieldEnum];
export declare const EmailCampaignScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly subject: "subject";
    readonly templateKey: "templateKey";
    readonly htmlBody: "htmlBody";
    readonly createdById: "createdById";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type EmailCampaignScalarFieldEnum = (typeof EmailCampaignScalarFieldEnum)[keyof typeof EmailCampaignScalarFieldEnum];
export declare const EmailDeliveryScalarFieldEnum: {
    readonly id: "id";
    readonly campaignId: "campaignId";
    readonly applicationId: "applicationId";
    readonly recipientEmail: "recipientEmail";
    readonly status: "status";
    readonly jobId: "jobId";
    readonly sentAt: "sentAt";
    readonly failedAt: "failedAt";
    readonly errorMessage: "errorMessage";
    readonly attempts: "attempts";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type EmailDeliveryScalarFieldEnum = (typeof EmailDeliveryScalarFieldEnum)[keyof typeof EmailDeliveryScalarFieldEnum];
export declare const ApplicationTeamMemberScalarFieldEnum: {
    readonly id: "id";
    readonly applicationId: "applicationId";
    readonly fullName: "fullName";
    readonly role: "role";
    readonly linkedInUrl: "linkedInUrl";
    readonly background: "background";
    readonly isPrimary: "isPrimary";
    readonly sortOrder: "sortOrder";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ApplicationTeamMemberScalarFieldEnum = (typeof ApplicationTeamMemberScalarFieldEnum)[keyof typeof ApplicationTeamMemberScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
