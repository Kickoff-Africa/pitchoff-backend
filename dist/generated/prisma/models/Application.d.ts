import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Application
 *
 */
export type ApplicationModel = runtime.Types.Result.DefaultSelection<Prisma.$ApplicationPayload>;
export type AggregateApplication = {
    _count: ApplicationCountAggregateOutputType | null;
    _min: ApplicationMinAggregateOutputType | null;
    _max: ApplicationMaxAggregateOutputType | null;
};
export type ApplicationMinAggregateOutputType = {
    id: string | null;
    publicRef: string | null;
    startupName: string | null;
    startupDescription: string | null;
    startupEmail: string | null;
    industry: string | null;
    market: string | null;
    stage: string | null;
    traction: string | null;
    problem: string | null;
    pitchDeckUrl: string | null;
    referral: string | null;
    consentGiven: boolean | null;
    consentGivenAt: Date | null;
    status: $Enums.ApplicationStatus | null;
    submittedAt: Date | null;
    reviewedAt: Date | null;
    applicantId: string | null;
    submittedById: string | null;
    reviewedById: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ApplicationMaxAggregateOutputType = {
    id: string | null;
    publicRef: string | null;
    startupName: string | null;
    startupDescription: string | null;
    startupEmail: string | null;
    industry: string | null;
    market: string | null;
    stage: string | null;
    traction: string | null;
    problem: string | null;
    pitchDeckUrl: string | null;
    referral: string | null;
    consentGiven: boolean | null;
    consentGivenAt: Date | null;
    status: $Enums.ApplicationStatus | null;
    submittedAt: Date | null;
    reviewedAt: Date | null;
    applicantId: string | null;
    submittedById: string | null;
    reviewedById: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ApplicationCountAggregateOutputType = {
    id: number;
    publicRef: number;
    startupName: number;
    startupDescription: number;
    startupEmail: number;
    industry: number;
    market: number;
    stage: number;
    traction: number;
    problem: number;
    pitchDeckUrl: number;
    referral: number;
    consentGiven: number;
    consentGivenAt: number;
    status: number;
    submittedAt: number;
    reviewedAt: number;
    applicantId: number;
    submittedById: number;
    reviewedById: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ApplicationMinAggregateInputType = {
    id?: true;
    publicRef?: true;
    startupName?: true;
    startupDescription?: true;
    startupEmail?: true;
    industry?: true;
    market?: true;
    stage?: true;
    traction?: true;
    problem?: true;
    pitchDeckUrl?: true;
    referral?: true;
    consentGiven?: true;
    consentGivenAt?: true;
    status?: true;
    submittedAt?: true;
    reviewedAt?: true;
    applicantId?: true;
    submittedById?: true;
    reviewedById?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ApplicationMaxAggregateInputType = {
    id?: true;
    publicRef?: true;
    startupName?: true;
    startupDescription?: true;
    startupEmail?: true;
    industry?: true;
    market?: true;
    stage?: true;
    traction?: true;
    problem?: true;
    pitchDeckUrl?: true;
    referral?: true;
    consentGiven?: true;
    consentGivenAt?: true;
    status?: true;
    submittedAt?: true;
    reviewedAt?: true;
    applicantId?: true;
    submittedById?: true;
    reviewedById?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ApplicationCountAggregateInputType = {
    id?: true;
    publicRef?: true;
    startupName?: true;
    startupDescription?: true;
    startupEmail?: true;
    industry?: true;
    market?: true;
    stage?: true;
    traction?: true;
    problem?: true;
    pitchDeckUrl?: true;
    referral?: true;
    consentGiven?: true;
    consentGivenAt?: true;
    status?: true;
    submittedAt?: true;
    reviewedAt?: true;
    applicantId?: true;
    submittedById?: true;
    reviewedById?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ApplicationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Application to aggregate.
     */
    where?: Prisma.ApplicationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Applications to fetch.
     */
    orderBy?: Prisma.ApplicationOrderByWithRelationInput | Prisma.ApplicationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ApplicationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Applications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Applications
    **/
    _count?: true | ApplicationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationMaxAggregateInputType;
};
export type GetApplicationAggregateType<T extends ApplicationAggregateArgs> = {
    [P in keyof T & keyof AggregateApplication]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateApplication[P]> : Prisma.GetScalarType<T[P], AggregateApplication[P]>;
};
export type ApplicationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApplicationWhereInput;
    orderBy?: Prisma.ApplicationOrderByWithAggregationInput | Prisma.ApplicationOrderByWithAggregationInput[];
    by: Prisma.ApplicationScalarFieldEnum[] | Prisma.ApplicationScalarFieldEnum;
    having?: Prisma.ApplicationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ApplicationCountAggregateInputType | true;
    _min?: ApplicationMinAggregateInputType;
    _max?: ApplicationMaxAggregateInputType;
};
export type ApplicationGroupByOutputType = {
    id: string;
    publicRef: string;
    startupName: string;
    startupDescription: string;
    startupEmail: string;
    industry: string;
    market: string;
    stage: string;
    traction: string;
    problem: string;
    pitchDeckUrl: string | null;
    referral: string | null;
    consentGiven: boolean;
    consentGivenAt: Date | null;
    status: $Enums.ApplicationStatus;
    submittedAt: Date | null;
    reviewedAt: Date | null;
    applicantId: string | null;
    submittedById: string | null;
    reviewedById: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: ApplicationCountAggregateOutputType | null;
    _min: ApplicationMinAggregateOutputType | null;
    _max: ApplicationMaxAggregateOutputType | null;
};
export type GetApplicationGroupByPayload<T extends ApplicationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ApplicationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ApplicationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ApplicationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ApplicationGroupByOutputType[P]>;
}>>;
export type ApplicationWhereInput = {
    AND?: Prisma.ApplicationWhereInput | Prisma.ApplicationWhereInput[];
    OR?: Prisma.ApplicationWhereInput[];
    NOT?: Prisma.ApplicationWhereInput | Prisma.ApplicationWhereInput[];
    id?: Prisma.StringFilter<"Application"> | string;
    publicRef?: Prisma.StringFilter<"Application"> | string;
    startupName?: Prisma.StringFilter<"Application"> | string;
    startupDescription?: Prisma.StringFilter<"Application"> | string;
    startupEmail?: Prisma.StringFilter<"Application"> | string;
    industry?: Prisma.StringFilter<"Application"> | string;
    market?: Prisma.StringFilter<"Application"> | string;
    stage?: Prisma.StringFilter<"Application"> | string;
    traction?: Prisma.StringFilter<"Application"> | string;
    problem?: Prisma.StringFilter<"Application"> | string;
    pitchDeckUrl?: Prisma.StringNullableFilter<"Application"> | string | null;
    referral?: Prisma.StringNullableFilter<"Application"> | string | null;
    consentGiven?: Prisma.BoolFilter<"Application"> | boolean;
    consentGivenAt?: Prisma.DateTimeNullableFilter<"Application"> | Date | string | null;
    status?: Prisma.EnumApplicationStatusFilter<"Application"> | $Enums.ApplicationStatus;
    submittedAt?: Prisma.DateTimeNullableFilter<"Application"> | Date | string | null;
    reviewedAt?: Prisma.DateTimeNullableFilter<"Application"> | Date | string | null;
    applicantId?: Prisma.StringNullableFilter<"Application"> | string | null;
    submittedById?: Prisma.StringNullableFilter<"Application"> | string | null;
    reviewedById?: Prisma.StringNullableFilter<"Application"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Application"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Application"> | Date | string;
    applicant?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    reviewedBy?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    teamMembers?: Prisma.ApplicationTeamMemberListRelationFilter;
    emailDeliveries?: Prisma.EmailDeliveryListRelationFilter;
};
export type ApplicationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    publicRef?: Prisma.SortOrder;
    startupName?: Prisma.SortOrder;
    startupDescription?: Prisma.SortOrder;
    startupEmail?: Prisma.SortOrder;
    industry?: Prisma.SortOrder;
    market?: Prisma.SortOrder;
    stage?: Prisma.SortOrder;
    traction?: Prisma.SortOrder;
    problem?: Prisma.SortOrder;
    pitchDeckUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    referral?: Prisma.SortOrderInput | Prisma.SortOrder;
    consentGiven?: Prisma.SortOrder;
    consentGivenAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    submittedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    applicantId?: Prisma.SortOrderInput | Prisma.SortOrder;
    submittedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    reviewedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    applicant?: Prisma.UserOrderByWithRelationInput;
    reviewedBy?: Prisma.UserOrderByWithRelationInput;
    teamMembers?: Prisma.ApplicationTeamMemberOrderByRelationAggregateInput;
    emailDeliveries?: Prisma.EmailDeliveryOrderByRelationAggregateInput;
};
export type ApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    publicRef?: string;
    AND?: Prisma.ApplicationWhereInput | Prisma.ApplicationWhereInput[];
    OR?: Prisma.ApplicationWhereInput[];
    NOT?: Prisma.ApplicationWhereInput | Prisma.ApplicationWhereInput[];
    startupName?: Prisma.StringFilter<"Application"> | string;
    startupDescription?: Prisma.StringFilter<"Application"> | string;
    startupEmail?: Prisma.StringFilter<"Application"> | string;
    industry?: Prisma.StringFilter<"Application"> | string;
    market?: Prisma.StringFilter<"Application"> | string;
    stage?: Prisma.StringFilter<"Application"> | string;
    traction?: Prisma.StringFilter<"Application"> | string;
    problem?: Prisma.StringFilter<"Application"> | string;
    pitchDeckUrl?: Prisma.StringNullableFilter<"Application"> | string | null;
    referral?: Prisma.StringNullableFilter<"Application"> | string | null;
    consentGiven?: Prisma.BoolFilter<"Application"> | boolean;
    consentGivenAt?: Prisma.DateTimeNullableFilter<"Application"> | Date | string | null;
    status?: Prisma.EnumApplicationStatusFilter<"Application"> | $Enums.ApplicationStatus;
    submittedAt?: Prisma.DateTimeNullableFilter<"Application"> | Date | string | null;
    reviewedAt?: Prisma.DateTimeNullableFilter<"Application"> | Date | string | null;
    applicantId?: Prisma.StringNullableFilter<"Application"> | string | null;
    submittedById?: Prisma.StringNullableFilter<"Application"> | string | null;
    reviewedById?: Prisma.StringNullableFilter<"Application"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Application"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Application"> | Date | string;
    applicant?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    reviewedBy?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    teamMembers?: Prisma.ApplicationTeamMemberListRelationFilter;
    emailDeliveries?: Prisma.EmailDeliveryListRelationFilter;
}, "id" | "publicRef">;
export type ApplicationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    publicRef?: Prisma.SortOrder;
    startupName?: Prisma.SortOrder;
    startupDescription?: Prisma.SortOrder;
    startupEmail?: Prisma.SortOrder;
    industry?: Prisma.SortOrder;
    market?: Prisma.SortOrder;
    stage?: Prisma.SortOrder;
    traction?: Prisma.SortOrder;
    problem?: Prisma.SortOrder;
    pitchDeckUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    referral?: Prisma.SortOrderInput | Prisma.SortOrder;
    consentGiven?: Prisma.SortOrder;
    consentGivenAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    submittedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    applicantId?: Prisma.SortOrderInput | Prisma.SortOrder;
    submittedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    reviewedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ApplicationCountOrderByAggregateInput;
    _max?: Prisma.ApplicationMaxOrderByAggregateInput;
    _min?: Prisma.ApplicationMinOrderByAggregateInput;
};
export type ApplicationScalarWhereWithAggregatesInput = {
    AND?: Prisma.ApplicationScalarWhereWithAggregatesInput | Prisma.ApplicationScalarWhereWithAggregatesInput[];
    OR?: Prisma.ApplicationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ApplicationScalarWhereWithAggregatesInput | Prisma.ApplicationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Application"> | string;
    publicRef?: Prisma.StringWithAggregatesFilter<"Application"> | string;
    startupName?: Prisma.StringWithAggregatesFilter<"Application"> | string;
    startupDescription?: Prisma.StringWithAggregatesFilter<"Application"> | string;
    startupEmail?: Prisma.StringWithAggregatesFilter<"Application"> | string;
    industry?: Prisma.StringWithAggregatesFilter<"Application"> | string;
    market?: Prisma.StringWithAggregatesFilter<"Application"> | string;
    stage?: Prisma.StringWithAggregatesFilter<"Application"> | string;
    traction?: Prisma.StringWithAggregatesFilter<"Application"> | string;
    problem?: Prisma.StringWithAggregatesFilter<"Application"> | string;
    pitchDeckUrl?: Prisma.StringNullableWithAggregatesFilter<"Application"> | string | null;
    referral?: Prisma.StringNullableWithAggregatesFilter<"Application"> | string | null;
    consentGiven?: Prisma.BoolWithAggregatesFilter<"Application"> | boolean;
    consentGivenAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Application"> | Date | string | null;
    status?: Prisma.EnumApplicationStatusWithAggregatesFilter<"Application"> | $Enums.ApplicationStatus;
    submittedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Application"> | Date | string | null;
    reviewedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Application"> | Date | string | null;
    applicantId?: Prisma.StringNullableWithAggregatesFilter<"Application"> | string | null;
    submittedById?: Prisma.StringNullableWithAggregatesFilter<"Application"> | string | null;
    reviewedById?: Prisma.StringNullableWithAggregatesFilter<"Application"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Application"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Application"> | Date | string;
};
export type ApplicationCreateInput = {
    id?: string;
    publicRef?: string;
    startupName: string;
    startupDescription: string;
    startupEmail: string;
    industry: string;
    market: string;
    stage: string;
    traction: string;
    problem: string;
    pitchDeckUrl?: string | null;
    referral?: string | null;
    consentGiven?: boolean;
    consentGivenAt?: Date | string | null;
    status?: $Enums.ApplicationStatus;
    submittedAt?: Date | string | null;
    reviewedAt?: Date | string | null;
    submittedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    applicant?: Prisma.UserCreateNestedOneWithoutApplicationsInput;
    reviewedBy?: Prisma.UserCreateNestedOneWithoutReviewedAppsInput;
    teamMembers?: Prisma.ApplicationTeamMemberCreateNestedManyWithoutApplicationInput;
    emailDeliveries?: Prisma.EmailDeliveryCreateNestedManyWithoutApplicationInput;
};
export type ApplicationUncheckedCreateInput = {
    id?: string;
    publicRef?: string;
    startupName: string;
    startupDescription: string;
    startupEmail: string;
    industry: string;
    market: string;
    stage: string;
    traction: string;
    problem: string;
    pitchDeckUrl?: string | null;
    referral?: string | null;
    consentGiven?: boolean;
    consentGivenAt?: Date | string | null;
    status?: $Enums.ApplicationStatus;
    submittedAt?: Date | string | null;
    reviewedAt?: Date | string | null;
    applicantId?: string | null;
    submittedById?: string | null;
    reviewedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    teamMembers?: Prisma.ApplicationTeamMemberUncheckedCreateNestedManyWithoutApplicationInput;
    emailDeliveries?: Prisma.EmailDeliveryUncheckedCreateNestedManyWithoutApplicationInput;
};
export type ApplicationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    publicRef?: Prisma.StringFieldUpdateOperationsInput | string;
    startupName?: Prisma.StringFieldUpdateOperationsInput | string;
    startupDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    startupEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    industry?: Prisma.StringFieldUpdateOperationsInput | string;
    market?: Prisma.StringFieldUpdateOperationsInput | string;
    stage?: Prisma.StringFieldUpdateOperationsInput | string;
    traction?: Prisma.StringFieldUpdateOperationsInput | string;
    problem?: Prisma.StringFieldUpdateOperationsInput | string;
    pitchDeckUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referral?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    consentGiven?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    consentGivenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus;
    submittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    submittedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    applicant?: Prisma.UserUpdateOneWithoutApplicationsNestedInput;
    reviewedBy?: Prisma.UserUpdateOneWithoutReviewedAppsNestedInput;
    teamMembers?: Prisma.ApplicationTeamMemberUpdateManyWithoutApplicationNestedInput;
    emailDeliveries?: Prisma.EmailDeliveryUpdateManyWithoutApplicationNestedInput;
};
export type ApplicationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    publicRef?: Prisma.StringFieldUpdateOperationsInput | string;
    startupName?: Prisma.StringFieldUpdateOperationsInput | string;
    startupDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    startupEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    industry?: Prisma.StringFieldUpdateOperationsInput | string;
    market?: Prisma.StringFieldUpdateOperationsInput | string;
    stage?: Prisma.StringFieldUpdateOperationsInput | string;
    traction?: Prisma.StringFieldUpdateOperationsInput | string;
    problem?: Prisma.StringFieldUpdateOperationsInput | string;
    pitchDeckUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referral?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    consentGiven?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    consentGivenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus;
    submittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    applicantId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    submittedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    teamMembers?: Prisma.ApplicationTeamMemberUncheckedUpdateManyWithoutApplicationNestedInput;
    emailDeliveries?: Prisma.EmailDeliveryUncheckedUpdateManyWithoutApplicationNestedInput;
};
export type ApplicationCreateManyInput = {
    id?: string;
    publicRef?: string;
    startupName: string;
    startupDescription: string;
    startupEmail: string;
    industry: string;
    market: string;
    stage: string;
    traction: string;
    problem: string;
    pitchDeckUrl?: string | null;
    referral?: string | null;
    consentGiven?: boolean;
    consentGivenAt?: Date | string | null;
    status?: $Enums.ApplicationStatus;
    submittedAt?: Date | string | null;
    reviewedAt?: Date | string | null;
    applicantId?: string | null;
    submittedById?: string | null;
    reviewedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ApplicationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    publicRef?: Prisma.StringFieldUpdateOperationsInput | string;
    startupName?: Prisma.StringFieldUpdateOperationsInput | string;
    startupDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    startupEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    industry?: Prisma.StringFieldUpdateOperationsInput | string;
    market?: Prisma.StringFieldUpdateOperationsInput | string;
    stage?: Prisma.StringFieldUpdateOperationsInput | string;
    traction?: Prisma.StringFieldUpdateOperationsInput | string;
    problem?: Prisma.StringFieldUpdateOperationsInput | string;
    pitchDeckUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referral?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    consentGiven?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    consentGivenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus;
    submittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    submittedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApplicationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    publicRef?: Prisma.StringFieldUpdateOperationsInput | string;
    startupName?: Prisma.StringFieldUpdateOperationsInput | string;
    startupDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    startupEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    industry?: Prisma.StringFieldUpdateOperationsInput | string;
    market?: Prisma.StringFieldUpdateOperationsInput | string;
    stage?: Prisma.StringFieldUpdateOperationsInput | string;
    traction?: Prisma.StringFieldUpdateOperationsInput | string;
    problem?: Prisma.StringFieldUpdateOperationsInput | string;
    pitchDeckUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referral?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    consentGiven?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    consentGivenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus;
    submittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    applicantId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    submittedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApplicationListRelationFilter = {
    every?: Prisma.ApplicationWhereInput;
    some?: Prisma.ApplicationWhereInput;
    none?: Prisma.ApplicationWhereInput;
};
export type ApplicationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ApplicationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    publicRef?: Prisma.SortOrder;
    startupName?: Prisma.SortOrder;
    startupDescription?: Prisma.SortOrder;
    startupEmail?: Prisma.SortOrder;
    industry?: Prisma.SortOrder;
    market?: Prisma.SortOrder;
    stage?: Prisma.SortOrder;
    traction?: Prisma.SortOrder;
    problem?: Prisma.SortOrder;
    pitchDeckUrl?: Prisma.SortOrder;
    referral?: Prisma.SortOrder;
    consentGiven?: Prisma.SortOrder;
    consentGivenAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    submittedAt?: Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrder;
    applicantId?: Prisma.SortOrder;
    submittedById?: Prisma.SortOrder;
    reviewedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ApplicationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    publicRef?: Prisma.SortOrder;
    startupName?: Prisma.SortOrder;
    startupDescription?: Prisma.SortOrder;
    startupEmail?: Prisma.SortOrder;
    industry?: Prisma.SortOrder;
    market?: Prisma.SortOrder;
    stage?: Prisma.SortOrder;
    traction?: Prisma.SortOrder;
    problem?: Prisma.SortOrder;
    pitchDeckUrl?: Prisma.SortOrder;
    referral?: Prisma.SortOrder;
    consentGiven?: Prisma.SortOrder;
    consentGivenAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    submittedAt?: Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrder;
    applicantId?: Prisma.SortOrder;
    submittedById?: Prisma.SortOrder;
    reviewedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ApplicationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    publicRef?: Prisma.SortOrder;
    startupName?: Prisma.SortOrder;
    startupDescription?: Prisma.SortOrder;
    startupEmail?: Prisma.SortOrder;
    industry?: Prisma.SortOrder;
    market?: Prisma.SortOrder;
    stage?: Prisma.SortOrder;
    traction?: Prisma.SortOrder;
    problem?: Prisma.SortOrder;
    pitchDeckUrl?: Prisma.SortOrder;
    referral?: Prisma.SortOrder;
    consentGiven?: Prisma.SortOrder;
    consentGivenAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    submittedAt?: Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrder;
    applicantId?: Prisma.SortOrder;
    submittedById?: Prisma.SortOrder;
    reviewedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ApplicationScalarRelationFilter = {
    is?: Prisma.ApplicationWhereInput;
    isNot?: Prisma.ApplicationWhereInput;
};
export type ApplicationCreateNestedManyWithoutApplicantInput = {
    create?: Prisma.XOR<Prisma.ApplicationCreateWithoutApplicantInput, Prisma.ApplicationUncheckedCreateWithoutApplicantInput> | Prisma.ApplicationCreateWithoutApplicantInput[] | Prisma.ApplicationUncheckedCreateWithoutApplicantInput[];
    connectOrCreate?: Prisma.ApplicationCreateOrConnectWithoutApplicantInput | Prisma.ApplicationCreateOrConnectWithoutApplicantInput[];
    createMany?: Prisma.ApplicationCreateManyApplicantInputEnvelope;
    connect?: Prisma.ApplicationWhereUniqueInput | Prisma.ApplicationWhereUniqueInput[];
};
export type ApplicationCreateNestedManyWithoutReviewedByInput = {
    create?: Prisma.XOR<Prisma.ApplicationCreateWithoutReviewedByInput, Prisma.ApplicationUncheckedCreateWithoutReviewedByInput> | Prisma.ApplicationCreateWithoutReviewedByInput[] | Prisma.ApplicationUncheckedCreateWithoutReviewedByInput[];
    connectOrCreate?: Prisma.ApplicationCreateOrConnectWithoutReviewedByInput | Prisma.ApplicationCreateOrConnectWithoutReviewedByInput[];
    createMany?: Prisma.ApplicationCreateManyReviewedByInputEnvelope;
    connect?: Prisma.ApplicationWhereUniqueInput | Prisma.ApplicationWhereUniqueInput[];
};
export type ApplicationUncheckedCreateNestedManyWithoutApplicantInput = {
    create?: Prisma.XOR<Prisma.ApplicationCreateWithoutApplicantInput, Prisma.ApplicationUncheckedCreateWithoutApplicantInput> | Prisma.ApplicationCreateWithoutApplicantInput[] | Prisma.ApplicationUncheckedCreateWithoutApplicantInput[];
    connectOrCreate?: Prisma.ApplicationCreateOrConnectWithoutApplicantInput | Prisma.ApplicationCreateOrConnectWithoutApplicantInput[];
    createMany?: Prisma.ApplicationCreateManyApplicantInputEnvelope;
    connect?: Prisma.ApplicationWhereUniqueInput | Prisma.ApplicationWhereUniqueInput[];
};
export type ApplicationUncheckedCreateNestedManyWithoutReviewedByInput = {
    create?: Prisma.XOR<Prisma.ApplicationCreateWithoutReviewedByInput, Prisma.ApplicationUncheckedCreateWithoutReviewedByInput> | Prisma.ApplicationCreateWithoutReviewedByInput[] | Prisma.ApplicationUncheckedCreateWithoutReviewedByInput[];
    connectOrCreate?: Prisma.ApplicationCreateOrConnectWithoutReviewedByInput | Prisma.ApplicationCreateOrConnectWithoutReviewedByInput[];
    createMany?: Prisma.ApplicationCreateManyReviewedByInputEnvelope;
    connect?: Prisma.ApplicationWhereUniqueInput | Prisma.ApplicationWhereUniqueInput[];
};
export type ApplicationUpdateManyWithoutApplicantNestedInput = {
    create?: Prisma.XOR<Prisma.ApplicationCreateWithoutApplicantInput, Prisma.ApplicationUncheckedCreateWithoutApplicantInput> | Prisma.ApplicationCreateWithoutApplicantInput[] | Prisma.ApplicationUncheckedCreateWithoutApplicantInput[];
    connectOrCreate?: Prisma.ApplicationCreateOrConnectWithoutApplicantInput | Prisma.ApplicationCreateOrConnectWithoutApplicantInput[];
    upsert?: Prisma.ApplicationUpsertWithWhereUniqueWithoutApplicantInput | Prisma.ApplicationUpsertWithWhereUniqueWithoutApplicantInput[];
    createMany?: Prisma.ApplicationCreateManyApplicantInputEnvelope;
    set?: Prisma.ApplicationWhereUniqueInput | Prisma.ApplicationWhereUniqueInput[];
    disconnect?: Prisma.ApplicationWhereUniqueInput | Prisma.ApplicationWhereUniqueInput[];
    delete?: Prisma.ApplicationWhereUniqueInput | Prisma.ApplicationWhereUniqueInput[];
    connect?: Prisma.ApplicationWhereUniqueInput | Prisma.ApplicationWhereUniqueInput[];
    update?: Prisma.ApplicationUpdateWithWhereUniqueWithoutApplicantInput | Prisma.ApplicationUpdateWithWhereUniqueWithoutApplicantInput[];
    updateMany?: Prisma.ApplicationUpdateManyWithWhereWithoutApplicantInput | Prisma.ApplicationUpdateManyWithWhereWithoutApplicantInput[];
    deleteMany?: Prisma.ApplicationScalarWhereInput | Prisma.ApplicationScalarWhereInput[];
};
export type ApplicationUpdateManyWithoutReviewedByNestedInput = {
    create?: Prisma.XOR<Prisma.ApplicationCreateWithoutReviewedByInput, Prisma.ApplicationUncheckedCreateWithoutReviewedByInput> | Prisma.ApplicationCreateWithoutReviewedByInput[] | Prisma.ApplicationUncheckedCreateWithoutReviewedByInput[];
    connectOrCreate?: Prisma.ApplicationCreateOrConnectWithoutReviewedByInput | Prisma.ApplicationCreateOrConnectWithoutReviewedByInput[];
    upsert?: Prisma.ApplicationUpsertWithWhereUniqueWithoutReviewedByInput | Prisma.ApplicationUpsertWithWhereUniqueWithoutReviewedByInput[];
    createMany?: Prisma.ApplicationCreateManyReviewedByInputEnvelope;
    set?: Prisma.ApplicationWhereUniqueInput | Prisma.ApplicationWhereUniqueInput[];
    disconnect?: Prisma.ApplicationWhereUniqueInput | Prisma.ApplicationWhereUniqueInput[];
    delete?: Prisma.ApplicationWhereUniqueInput | Prisma.ApplicationWhereUniqueInput[];
    connect?: Prisma.ApplicationWhereUniqueInput | Prisma.ApplicationWhereUniqueInput[];
    update?: Prisma.ApplicationUpdateWithWhereUniqueWithoutReviewedByInput | Prisma.ApplicationUpdateWithWhereUniqueWithoutReviewedByInput[];
    updateMany?: Prisma.ApplicationUpdateManyWithWhereWithoutReviewedByInput | Prisma.ApplicationUpdateManyWithWhereWithoutReviewedByInput[];
    deleteMany?: Prisma.ApplicationScalarWhereInput | Prisma.ApplicationScalarWhereInput[];
};
export type ApplicationUncheckedUpdateManyWithoutApplicantNestedInput = {
    create?: Prisma.XOR<Prisma.ApplicationCreateWithoutApplicantInput, Prisma.ApplicationUncheckedCreateWithoutApplicantInput> | Prisma.ApplicationCreateWithoutApplicantInput[] | Prisma.ApplicationUncheckedCreateWithoutApplicantInput[];
    connectOrCreate?: Prisma.ApplicationCreateOrConnectWithoutApplicantInput | Prisma.ApplicationCreateOrConnectWithoutApplicantInput[];
    upsert?: Prisma.ApplicationUpsertWithWhereUniqueWithoutApplicantInput | Prisma.ApplicationUpsertWithWhereUniqueWithoutApplicantInput[];
    createMany?: Prisma.ApplicationCreateManyApplicantInputEnvelope;
    set?: Prisma.ApplicationWhereUniqueInput | Prisma.ApplicationWhereUniqueInput[];
    disconnect?: Prisma.ApplicationWhereUniqueInput | Prisma.ApplicationWhereUniqueInput[];
    delete?: Prisma.ApplicationWhereUniqueInput | Prisma.ApplicationWhereUniqueInput[];
    connect?: Prisma.ApplicationWhereUniqueInput | Prisma.ApplicationWhereUniqueInput[];
    update?: Prisma.ApplicationUpdateWithWhereUniqueWithoutApplicantInput | Prisma.ApplicationUpdateWithWhereUniqueWithoutApplicantInput[];
    updateMany?: Prisma.ApplicationUpdateManyWithWhereWithoutApplicantInput | Prisma.ApplicationUpdateManyWithWhereWithoutApplicantInput[];
    deleteMany?: Prisma.ApplicationScalarWhereInput | Prisma.ApplicationScalarWhereInput[];
};
export type ApplicationUncheckedUpdateManyWithoutReviewedByNestedInput = {
    create?: Prisma.XOR<Prisma.ApplicationCreateWithoutReviewedByInput, Prisma.ApplicationUncheckedCreateWithoutReviewedByInput> | Prisma.ApplicationCreateWithoutReviewedByInput[] | Prisma.ApplicationUncheckedCreateWithoutReviewedByInput[];
    connectOrCreate?: Prisma.ApplicationCreateOrConnectWithoutReviewedByInput | Prisma.ApplicationCreateOrConnectWithoutReviewedByInput[];
    upsert?: Prisma.ApplicationUpsertWithWhereUniqueWithoutReviewedByInput | Prisma.ApplicationUpsertWithWhereUniqueWithoutReviewedByInput[];
    createMany?: Prisma.ApplicationCreateManyReviewedByInputEnvelope;
    set?: Prisma.ApplicationWhereUniqueInput | Prisma.ApplicationWhereUniqueInput[];
    disconnect?: Prisma.ApplicationWhereUniqueInput | Prisma.ApplicationWhereUniqueInput[];
    delete?: Prisma.ApplicationWhereUniqueInput | Prisma.ApplicationWhereUniqueInput[];
    connect?: Prisma.ApplicationWhereUniqueInput | Prisma.ApplicationWhereUniqueInput[];
    update?: Prisma.ApplicationUpdateWithWhereUniqueWithoutReviewedByInput | Prisma.ApplicationUpdateWithWhereUniqueWithoutReviewedByInput[];
    updateMany?: Prisma.ApplicationUpdateManyWithWhereWithoutReviewedByInput | Prisma.ApplicationUpdateManyWithWhereWithoutReviewedByInput[];
    deleteMany?: Prisma.ApplicationScalarWhereInput | Prisma.ApplicationScalarWhereInput[];
};
export type EnumApplicationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ApplicationStatus;
};
export type ApplicationCreateNestedOneWithoutEmailDeliveriesInput = {
    create?: Prisma.XOR<Prisma.ApplicationCreateWithoutEmailDeliveriesInput, Prisma.ApplicationUncheckedCreateWithoutEmailDeliveriesInput>;
    connectOrCreate?: Prisma.ApplicationCreateOrConnectWithoutEmailDeliveriesInput;
    connect?: Prisma.ApplicationWhereUniqueInput;
};
export type ApplicationUpdateOneRequiredWithoutEmailDeliveriesNestedInput = {
    create?: Prisma.XOR<Prisma.ApplicationCreateWithoutEmailDeliveriesInput, Prisma.ApplicationUncheckedCreateWithoutEmailDeliveriesInput>;
    connectOrCreate?: Prisma.ApplicationCreateOrConnectWithoutEmailDeliveriesInput;
    upsert?: Prisma.ApplicationUpsertWithoutEmailDeliveriesInput;
    connect?: Prisma.ApplicationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ApplicationUpdateToOneWithWhereWithoutEmailDeliveriesInput, Prisma.ApplicationUpdateWithoutEmailDeliveriesInput>, Prisma.ApplicationUncheckedUpdateWithoutEmailDeliveriesInput>;
};
export type ApplicationCreateNestedOneWithoutTeamMembersInput = {
    create?: Prisma.XOR<Prisma.ApplicationCreateWithoutTeamMembersInput, Prisma.ApplicationUncheckedCreateWithoutTeamMembersInput>;
    connectOrCreate?: Prisma.ApplicationCreateOrConnectWithoutTeamMembersInput;
    connect?: Prisma.ApplicationWhereUniqueInput;
};
export type ApplicationUpdateOneRequiredWithoutTeamMembersNestedInput = {
    create?: Prisma.XOR<Prisma.ApplicationCreateWithoutTeamMembersInput, Prisma.ApplicationUncheckedCreateWithoutTeamMembersInput>;
    connectOrCreate?: Prisma.ApplicationCreateOrConnectWithoutTeamMembersInput;
    upsert?: Prisma.ApplicationUpsertWithoutTeamMembersInput;
    connect?: Prisma.ApplicationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ApplicationUpdateToOneWithWhereWithoutTeamMembersInput, Prisma.ApplicationUpdateWithoutTeamMembersInput>, Prisma.ApplicationUncheckedUpdateWithoutTeamMembersInput>;
};
export type ApplicationCreateWithoutApplicantInput = {
    id?: string;
    publicRef?: string;
    startupName: string;
    startupDescription: string;
    startupEmail: string;
    industry: string;
    market: string;
    stage: string;
    traction: string;
    problem: string;
    pitchDeckUrl?: string | null;
    referral?: string | null;
    consentGiven?: boolean;
    consentGivenAt?: Date | string | null;
    status?: $Enums.ApplicationStatus;
    submittedAt?: Date | string | null;
    reviewedAt?: Date | string | null;
    submittedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    reviewedBy?: Prisma.UserCreateNestedOneWithoutReviewedAppsInput;
    teamMembers?: Prisma.ApplicationTeamMemberCreateNestedManyWithoutApplicationInput;
    emailDeliveries?: Prisma.EmailDeliveryCreateNestedManyWithoutApplicationInput;
};
export type ApplicationUncheckedCreateWithoutApplicantInput = {
    id?: string;
    publicRef?: string;
    startupName: string;
    startupDescription: string;
    startupEmail: string;
    industry: string;
    market: string;
    stage: string;
    traction: string;
    problem: string;
    pitchDeckUrl?: string | null;
    referral?: string | null;
    consentGiven?: boolean;
    consentGivenAt?: Date | string | null;
    status?: $Enums.ApplicationStatus;
    submittedAt?: Date | string | null;
    reviewedAt?: Date | string | null;
    submittedById?: string | null;
    reviewedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    teamMembers?: Prisma.ApplicationTeamMemberUncheckedCreateNestedManyWithoutApplicationInput;
    emailDeliveries?: Prisma.EmailDeliveryUncheckedCreateNestedManyWithoutApplicationInput;
};
export type ApplicationCreateOrConnectWithoutApplicantInput = {
    where: Prisma.ApplicationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ApplicationCreateWithoutApplicantInput, Prisma.ApplicationUncheckedCreateWithoutApplicantInput>;
};
export type ApplicationCreateManyApplicantInputEnvelope = {
    data: Prisma.ApplicationCreateManyApplicantInput | Prisma.ApplicationCreateManyApplicantInput[];
    skipDuplicates?: boolean;
};
export type ApplicationCreateWithoutReviewedByInput = {
    id?: string;
    publicRef?: string;
    startupName: string;
    startupDescription: string;
    startupEmail: string;
    industry: string;
    market: string;
    stage: string;
    traction: string;
    problem: string;
    pitchDeckUrl?: string | null;
    referral?: string | null;
    consentGiven?: boolean;
    consentGivenAt?: Date | string | null;
    status?: $Enums.ApplicationStatus;
    submittedAt?: Date | string | null;
    reviewedAt?: Date | string | null;
    submittedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    applicant?: Prisma.UserCreateNestedOneWithoutApplicationsInput;
    teamMembers?: Prisma.ApplicationTeamMemberCreateNestedManyWithoutApplicationInput;
    emailDeliveries?: Prisma.EmailDeliveryCreateNestedManyWithoutApplicationInput;
};
export type ApplicationUncheckedCreateWithoutReviewedByInput = {
    id?: string;
    publicRef?: string;
    startupName: string;
    startupDescription: string;
    startupEmail: string;
    industry: string;
    market: string;
    stage: string;
    traction: string;
    problem: string;
    pitchDeckUrl?: string | null;
    referral?: string | null;
    consentGiven?: boolean;
    consentGivenAt?: Date | string | null;
    status?: $Enums.ApplicationStatus;
    submittedAt?: Date | string | null;
    reviewedAt?: Date | string | null;
    applicantId?: string | null;
    submittedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    teamMembers?: Prisma.ApplicationTeamMemberUncheckedCreateNestedManyWithoutApplicationInput;
    emailDeliveries?: Prisma.EmailDeliveryUncheckedCreateNestedManyWithoutApplicationInput;
};
export type ApplicationCreateOrConnectWithoutReviewedByInput = {
    where: Prisma.ApplicationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ApplicationCreateWithoutReviewedByInput, Prisma.ApplicationUncheckedCreateWithoutReviewedByInput>;
};
export type ApplicationCreateManyReviewedByInputEnvelope = {
    data: Prisma.ApplicationCreateManyReviewedByInput | Prisma.ApplicationCreateManyReviewedByInput[];
    skipDuplicates?: boolean;
};
export type ApplicationUpsertWithWhereUniqueWithoutApplicantInput = {
    where: Prisma.ApplicationWhereUniqueInput;
    update: Prisma.XOR<Prisma.ApplicationUpdateWithoutApplicantInput, Prisma.ApplicationUncheckedUpdateWithoutApplicantInput>;
    create: Prisma.XOR<Prisma.ApplicationCreateWithoutApplicantInput, Prisma.ApplicationUncheckedCreateWithoutApplicantInput>;
};
export type ApplicationUpdateWithWhereUniqueWithoutApplicantInput = {
    where: Prisma.ApplicationWhereUniqueInput;
    data: Prisma.XOR<Prisma.ApplicationUpdateWithoutApplicantInput, Prisma.ApplicationUncheckedUpdateWithoutApplicantInput>;
};
export type ApplicationUpdateManyWithWhereWithoutApplicantInput = {
    where: Prisma.ApplicationScalarWhereInput;
    data: Prisma.XOR<Prisma.ApplicationUpdateManyMutationInput, Prisma.ApplicationUncheckedUpdateManyWithoutApplicantInput>;
};
export type ApplicationScalarWhereInput = {
    AND?: Prisma.ApplicationScalarWhereInput | Prisma.ApplicationScalarWhereInput[];
    OR?: Prisma.ApplicationScalarWhereInput[];
    NOT?: Prisma.ApplicationScalarWhereInput | Prisma.ApplicationScalarWhereInput[];
    id?: Prisma.StringFilter<"Application"> | string;
    publicRef?: Prisma.StringFilter<"Application"> | string;
    startupName?: Prisma.StringFilter<"Application"> | string;
    startupDescription?: Prisma.StringFilter<"Application"> | string;
    startupEmail?: Prisma.StringFilter<"Application"> | string;
    industry?: Prisma.StringFilter<"Application"> | string;
    market?: Prisma.StringFilter<"Application"> | string;
    stage?: Prisma.StringFilter<"Application"> | string;
    traction?: Prisma.StringFilter<"Application"> | string;
    problem?: Prisma.StringFilter<"Application"> | string;
    pitchDeckUrl?: Prisma.StringNullableFilter<"Application"> | string | null;
    referral?: Prisma.StringNullableFilter<"Application"> | string | null;
    consentGiven?: Prisma.BoolFilter<"Application"> | boolean;
    consentGivenAt?: Prisma.DateTimeNullableFilter<"Application"> | Date | string | null;
    status?: Prisma.EnumApplicationStatusFilter<"Application"> | $Enums.ApplicationStatus;
    submittedAt?: Prisma.DateTimeNullableFilter<"Application"> | Date | string | null;
    reviewedAt?: Prisma.DateTimeNullableFilter<"Application"> | Date | string | null;
    applicantId?: Prisma.StringNullableFilter<"Application"> | string | null;
    submittedById?: Prisma.StringNullableFilter<"Application"> | string | null;
    reviewedById?: Prisma.StringNullableFilter<"Application"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Application"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Application"> | Date | string;
};
export type ApplicationUpsertWithWhereUniqueWithoutReviewedByInput = {
    where: Prisma.ApplicationWhereUniqueInput;
    update: Prisma.XOR<Prisma.ApplicationUpdateWithoutReviewedByInput, Prisma.ApplicationUncheckedUpdateWithoutReviewedByInput>;
    create: Prisma.XOR<Prisma.ApplicationCreateWithoutReviewedByInput, Prisma.ApplicationUncheckedCreateWithoutReviewedByInput>;
};
export type ApplicationUpdateWithWhereUniqueWithoutReviewedByInput = {
    where: Prisma.ApplicationWhereUniqueInput;
    data: Prisma.XOR<Prisma.ApplicationUpdateWithoutReviewedByInput, Prisma.ApplicationUncheckedUpdateWithoutReviewedByInput>;
};
export type ApplicationUpdateManyWithWhereWithoutReviewedByInput = {
    where: Prisma.ApplicationScalarWhereInput;
    data: Prisma.XOR<Prisma.ApplicationUpdateManyMutationInput, Prisma.ApplicationUncheckedUpdateManyWithoutReviewedByInput>;
};
export type ApplicationCreateWithoutEmailDeliveriesInput = {
    id?: string;
    publicRef?: string;
    startupName: string;
    startupDescription: string;
    startupEmail: string;
    industry: string;
    market: string;
    stage: string;
    traction: string;
    problem: string;
    pitchDeckUrl?: string | null;
    referral?: string | null;
    consentGiven?: boolean;
    consentGivenAt?: Date | string | null;
    status?: $Enums.ApplicationStatus;
    submittedAt?: Date | string | null;
    reviewedAt?: Date | string | null;
    submittedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    applicant?: Prisma.UserCreateNestedOneWithoutApplicationsInput;
    reviewedBy?: Prisma.UserCreateNestedOneWithoutReviewedAppsInput;
    teamMembers?: Prisma.ApplicationTeamMemberCreateNestedManyWithoutApplicationInput;
};
export type ApplicationUncheckedCreateWithoutEmailDeliveriesInput = {
    id?: string;
    publicRef?: string;
    startupName: string;
    startupDescription: string;
    startupEmail: string;
    industry: string;
    market: string;
    stage: string;
    traction: string;
    problem: string;
    pitchDeckUrl?: string | null;
    referral?: string | null;
    consentGiven?: boolean;
    consentGivenAt?: Date | string | null;
    status?: $Enums.ApplicationStatus;
    submittedAt?: Date | string | null;
    reviewedAt?: Date | string | null;
    applicantId?: string | null;
    submittedById?: string | null;
    reviewedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    teamMembers?: Prisma.ApplicationTeamMemberUncheckedCreateNestedManyWithoutApplicationInput;
};
export type ApplicationCreateOrConnectWithoutEmailDeliveriesInput = {
    where: Prisma.ApplicationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ApplicationCreateWithoutEmailDeliveriesInput, Prisma.ApplicationUncheckedCreateWithoutEmailDeliveriesInput>;
};
export type ApplicationUpsertWithoutEmailDeliveriesInput = {
    update: Prisma.XOR<Prisma.ApplicationUpdateWithoutEmailDeliveriesInput, Prisma.ApplicationUncheckedUpdateWithoutEmailDeliveriesInput>;
    create: Prisma.XOR<Prisma.ApplicationCreateWithoutEmailDeliveriesInput, Prisma.ApplicationUncheckedCreateWithoutEmailDeliveriesInput>;
    where?: Prisma.ApplicationWhereInput;
};
export type ApplicationUpdateToOneWithWhereWithoutEmailDeliveriesInput = {
    where?: Prisma.ApplicationWhereInput;
    data: Prisma.XOR<Prisma.ApplicationUpdateWithoutEmailDeliveriesInput, Prisma.ApplicationUncheckedUpdateWithoutEmailDeliveriesInput>;
};
export type ApplicationUpdateWithoutEmailDeliveriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    publicRef?: Prisma.StringFieldUpdateOperationsInput | string;
    startupName?: Prisma.StringFieldUpdateOperationsInput | string;
    startupDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    startupEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    industry?: Prisma.StringFieldUpdateOperationsInput | string;
    market?: Prisma.StringFieldUpdateOperationsInput | string;
    stage?: Prisma.StringFieldUpdateOperationsInput | string;
    traction?: Prisma.StringFieldUpdateOperationsInput | string;
    problem?: Prisma.StringFieldUpdateOperationsInput | string;
    pitchDeckUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referral?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    consentGiven?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    consentGivenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus;
    submittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    submittedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    applicant?: Prisma.UserUpdateOneWithoutApplicationsNestedInput;
    reviewedBy?: Prisma.UserUpdateOneWithoutReviewedAppsNestedInput;
    teamMembers?: Prisma.ApplicationTeamMemberUpdateManyWithoutApplicationNestedInput;
};
export type ApplicationUncheckedUpdateWithoutEmailDeliveriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    publicRef?: Prisma.StringFieldUpdateOperationsInput | string;
    startupName?: Prisma.StringFieldUpdateOperationsInput | string;
    startupDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    startupEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    industry?: Prisma.StringFieldUpdateOperationsInput | string;
    market?: Prisma.StringFieldUpdateOperationsInput | string;
    stage?: Prisma.StringFieldUpdateOperationsInput | string;
    traction?: Prisma.StringFieldUpdateOperationsInput | string;
    problem?: Prisma.StringFieldUpdateOperationsInput | string;
    pitchDeckUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referral?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    consentGiven?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    consentGivenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus;
    submittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    applicantId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    submittedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    teamMembers?: Prisma.ApplicationTeamMemberUncheckedUpdateManyWithoutApplicationNestedInput;
};
export type ApplicationCreateWithoutTeamMembersInput = {
    id?: string;
    publicRef?: string;
    startupName: string;
    startupDescription: string;
    startupEmail: string;
    industry: string;
    market: string;
    stage: string;
    traction: string;
    problem: string;
    pitchDeckUrl?: string | null;
    referral?: string | null;
    consentGiven?: boolean;
    consentGivenAt?: Date | string | null;
    status?: $Enums.ApplicationStatus;
    submittedAt?: Date | string | null;
    reviewedAt?: Date | string | null;
    submittedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    applicant?: Prisma.UserCreateNestedOneWithoutApplicationsInput;
    reviewedBy?: Prisma.UserCreateNestedOneWithoutReviewedAppsInput;
    emailDeliveries?: Prisma.EmailDeliveryCreateNestedManyWithoutApplicationInput;
};
export type ApplicationUncheckedCreateWithoutTeamMembersInput = {
    id?: string;
    publicRef?: string;
    startupName: string;
    startupDescription: string;
    startupEmail: string;
    industry: string;
    market: string;
    stage: string;
    traction: string;
    problem: string;
    pitchDeckUrl?: string | null;
    referral?: string | null;
    consentGiven?: boolean;
    consentGivenAt?: Date | string | null;
    status?: $Enums.ApplicationStatus;
    submittedAt?: Date | string | null;
    reviewedAt?: Date | string | null;
    applicantId?: string | null;
    submittedById?: string | null;
    reviewedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    emailDeliveries?: Prisma.EmailDeliveryUncheckedCreateNestedManyWithoutApplicationInput;
};
export type ApplicationCreateOrConnectWithoutTeamMembersInput = {
    where: Prisma.ApplicationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ApplicationCreateWithoutTeamMembersInput, Prisma.ApplicationUncheckedCreateWithoutTeamMembersInput>;
};
export type ApplicationUpsertWithoutTeamMembersInput = {
    update: Prisma.XOR<Prisma.ApplicationUpdateWithoutTeamMembersInput, Prisma.ApplicationUncheckedUpdateWithoutTeamMembersInput>;
    create: Prisma.XOR<Prisma.ApplicationCreateWithoutTeamMembersInput, Prisma.ApplicationUncheckedCreateWithoutTeamMembersInput>;
    where?: Prisma.ApplicationWhereInput;
};
export type ApplicationUpdateToOneWithWhereWithoutTeamMembersInput = {
    where?: Prisma.ApplicationWhereInput;
    data: Prisma.XOR<Prisma.ApplicationUpdateWithoutTeamMembersInput, Prisma.ApplicationUncheckedUpdateWithoutTeamMembersInput>;
};
export type ApplicationUpdateWithoutTeamMembersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    publicRef?: Prisma.StringFieldUpdateOperationsInput | string;
    startupName?: Prisma.StringFieldUpdateOperationsInput | string;
    startupDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    startupEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    industry?: Prisma.StringFieldUpdateOperationsInput | string;
    market?: Prisma.StringFieldUpdateOperationsInput | string;
    stage?: Prisma.StringFieldUpdateOperationsInput | string;
    traction?: Prisma.StringFieldUpdateOperationsInput | string;
    problem?: Prisma.StringFieldUpdateOperationsInput | string;
    pitchDeckUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referral?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    consentGiven?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    consentGivenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus;
    submittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    submittedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    applicant?: Prisma.UserUpdateOneWithoutApplicationsNestedInput;
    reviewedBy?: Prisma.UserUpdateOneWithoutReviewedAppsNestedInput;
    emailDeliveries?: Prisma.EmailDeliveryUpdateManyWithoutApplicationNestedInput;
};
export type ApplicationUncheckedUpdateWithoutTeamMembersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    publicRef?: Prisma.StringFieldUpdateOperationsInput | string;
    startupName?: Prisma.StringFieldUpdateOperationsInput | string;
    startupDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    startupEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    industry?: Prisma.StringFieldUpdateOperationsInput | string;
    market?: Prisma.StringFieldUpdateOperationsInput | string;
    stage?: Prisma.StringFieldUpdateOperationsInput | string;
    traction?: Prisma.StringFieldUpdateOperationsInput | string;
    problem?: Prisma.StringFieldUpdateOperationsInput | string;
    pitchDeckUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referral?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    consentGiven?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    consentGivenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus;
    submittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    applicantId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    submittedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    emailDeliveries?: Prisma.EmailDeliveryUncheckedUpdateManyWithoutApplicationNestedInput;
};
export type ApplicationCreateManyApplicantInput = {
    id?: string;
    publicRef?: string;
    startupName: string;
    startupDescription: string;
    startupEmail: string;
    industry: string;
    market: string;
    stage: string;
    traction: string;
    problem: string;
    pitchDeckUrl?: string | null;
    referral?: string | null;
    consentGiven?: boolean;
    consentGivenAt?: Date | string | null;
    status?: $Enums.ApplicationStatus;
    submittedAt?: Date | string | null;
    reviewedAt?: Date | string | null;
    submittedById?: string | null;
    reviewedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ApplicationCreateManyReviewedByInput = {
    id?: string;
    publicRef?: string;
    startupName: string;
    startupDescription: string;
    startupEmail: string;
    industry: string;
    market: string;
    stage: string;
    traction: string;
    problem: string;
    pitchDeckUrl?: string | null;
    referral?: string | null;
    consentGiven?: boolean;
    consentGivenAt?: Date | string | null;
    status?: $Enums.ApplicationStatus;
    submittedAt?: Date | string | null;
    reviewedAt?: Date | string | null;
    applicantId?: string | null;
    submittedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ApplicationUpdateWithoutApplicantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    publicRef?: Prisma.StringFieldUpdateOperationsInput | string;
    startupName?: Prisma.StringFieldUpdateOperationsInput | string;
    startupDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    startupEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    industry?: Prisma.StringFieldUpdateOperationsInput | string;
    market?: Prisma.StringFieldUpdateOperationsInput | string;
    stage?: Prisma.StringFieldUpdateOperationsInput | string;
    traction?: Prisma.StringFieldUpdateOperationsInput | string;
    problem?: Prisma.StringFieldUpdateOperationsInput | string;
    pitchDeckUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referral?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    consentGiven?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    consentGivenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus;
    submittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    submittedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviewedBy?: Prisma.UserUpdateOneWithoutReviewedAppsNestedInput;
    teamMembers?: Prisma.ApplicationTeamMemberUpdateManyWithoutApplicationNestedInput;
    emailDeliveries?: Prisma.EmailDeliveryUpdateManyWithoutApplicationNestedInput;
};
export type ApplicationUncheckedUpdateWithoutApplicantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    publicRef?: Prisma.StringFieldUpdateOperationsInput | string;
    startupName?: Prisma.StringFieldUpdateOperationsInput | string;
    startupDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    startupEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    industry?: Prisma.StringFieldUpdateOperationsInput | string;
    market?: Prisma.StringFieldUpdateOperationsInput | string;
    stage?: Prisma.StringFieldUpdateOperationsInput | string;
    traction?: Prisma.StringFieldUpdateOperationsInput | string;
    problem?: Prisma.StringFieldUpdateOperationsInput | string;
    pitchDeckUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referral?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    consentGiven?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    consentGivenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus;
    submittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    submittedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    teamMembers?: Prisma.ApplicationTeamMemberUncheckedUpdateManyWithoutApplicationNestedInput;
    emailDeliveries?: Prisma.EmailDeliveryUncheckedUpdateManyWithoutApplicationNestedInput;
};
export type ApplicationUncheckedUpdateManyWithoutApplicantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    publicRef?: Prisma.StringFieldUpdateOperationsInput | string;
    startupName?: Prisma.StringFieldUpdateOperationsInput | string;
    startupDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    startupEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    industry?: Prisma.StringFieldUpdateOperationsInput | string;
    market?: Prisma.StringFieldUpdateOperationsInput | string;
    stage?: Prisma.StringFieldUpdateOperationsInput | string;
    traction?: Prisma.StringFieldUpdateOperationsInput | string;
    problem?: Prisma.StringFieldUpdateOperationsInput | string;
    pitchDeckUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referral?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    consentGiven?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    consentGivenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus;
    submittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    submittedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApplicationUpdateWithoutReviewedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    publicRef?: Prisma.StringFieldUpdateOperationsInput | string;
    startupName?: Prisma.StringFieldUpdateOperationsInput | string;
    startupDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    startupEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    industry?: Prisma.StringFieldUpdateOperationsInput | string;
    market?: Prisma.StringFieldUpdateOperationsInput | string;
    stage?: Prisma.StringFieldUpdateOperationsInput | string;
    traction?: Prisma.StringFieldUpdateOperationsInput | string;
    problem?: Prisma.StringFieldUpdateOperationsInput | string;
    pitchDeckUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referral?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    consentGiven?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    consentGivenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus;
    submittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    submittedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    applicant?: Prisma.UserUpdateOneWithoutApplicationsNestedInput;
    teamMembers?: Prisma.ApplicationTeamMemberUpdateManyWithoutApplicationNestedInput;
    emailDeliveries?: Prisma.EmailDeliveryUpdateManyWithoutApplicationNestedInput;
};
export type ApplicationUncheckedUpdateWithoutReviewedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    publicRef?: Prisma.StringFieldUpdateOperationsInput | string;
    startupName?: Prisma.StringFieldUpdateOperationsInput | string;
    startupDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    startupEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    industry?: Prisma.StringFieldUpdateOperationsInput | string;
    market?: Prisma.StringFieldUpdateOperationsInput | string;
    stage?: Prisma.StringFieldUpdateOperationsInput | string;
    traction?: Prisma.StringFieldUpdateOperationsInput | string;
    problem?: Prisma.StringFieldUpdateOperationsInput | string;
    pitchDeckUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referral?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    consentGiven?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    consentGivenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus;
    submittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    applicantId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    submittedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    teamMembers?: Prisma.ApplicationTeamMemberUncheckedUpdateManyWithoutApplicationNestedInput;
    emailDeliveries?: Prisma.EmailDeliveryUncheckedUpdateManyWithoutApplicationNestedInput;
};
export type ApplicationUncheckedUpdateManyWithoutReviewedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    publicRef?: Prisma.StringFieldUpdateOperationsInput | string;
    startupName?: Prisma.StringFieldUpdateOperationsInput | string;
    startupDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    startupEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    industry?: Prisma.StringFieldUpdateOperationsInput | string;
    market?: Prisma.StringFieldUpdateOperationsInput | string;
    stage?: Prisma.StringFieldUpdateOperationsInput | string;
    traction?: Prisma.StringFieldUpdateOperationsInput | string;
    problem?: Prisma.StringFieldUpdateOperationsInput | string;
    pitchDeckUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referral?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    consentGiven?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    consentGivenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus;
    submittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    applicantId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    submittedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type ApplicationCountOutputType
 */
export type ApplicationCountOutputType = {
    teamMembers: number;
    emailDeliveries: number;
};
export type ApplicationCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    teamMembers?: boolean | ApplicationCountOutputTypeCountTeamMembersArgs;
    emailDeliveries?: boolean | ApplicationCountOutputTypeCountEmailDeliveriesArgs;
};
/**
 * ApplicationCountOutputType without action
 */
export type ApplicationCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationCountOutputType
     */
    select?: Prisma.ApplicationCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * ApplicationCountOutputType without action
 */
export type ApplicationCountOutputTypeCountTeamMembersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApplicationTeamMemberWhereInput;
};
/**
 * ApplicationCountOutputType without action
 */
export type ApplicationCountOutputTypeCountEmailDeliveriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmailDeliveryWhereInput;
};
export type ApplicationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    publicRef?: boolean;
    startupName?: boolean;
    startupDescription?: boolean;
    startupEmail?: boolean;
    industry?: boolean;
    market?: boolean;
    stage?: boolean;
    traction?: boolean;
    problem?: boolean;
    pitchDeckUrl?: boolean;
    referral?: boolean;
    consentGiven?: boolean;
    consentGivenAt?: boolean;
    status?: boolean;
    submittedAt?: boolean;
    reviewedAt?: boolean;
    applicantId?: boolean;
    submittedById?: boolean;
    reviewedById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    applicant?: boolean | Prisma.Application$applicantArgs<ExtArgs>;
    reviewedBy?: boolean | Prisma.Application$reviewedByArgs<ExtArgs>;
    teamMembers?: boolean | Prisma.Application$teamMembersArgs<ExtArgs>;
    emailDeliveries?: boolean | Prisma.Application$emailDeliveriesArgs<ExtArgs>;
    _count?: boolean | Prisma.ApplicationCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["application"]>;
export type ApplicationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    publicRef?: boolean;
    startupName?: boolean;
    startupDescription?: boolean;
    startupEmail?: boolean;
    industry?: boolean;
    market?: boolean;
    stage?: boolean;
    traction?: boolean;
    problem?: boolean;
    pitchDeckUrl?: boolean;
    referral?: boolean;
    consentGiven?: boolean;
    consentGivenAt?: boolean;
    status?: boolean;
    submittedAt?: boolean;
    reviewedAt?: boolean;
    applicantId?: boolean;
    submittedById?: boolean;
    reviewedById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    applicant?: boolean | Prisma.Application$applicantArgs<ExtArgs>;
    reviewedBy?: boolean | Prisma.Application$reviewedByArgs<ExtArgs>;
}, ExtArgs["result"]["application"]>;
export type ApplicationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    publicRef?: boolean;
    startupName?: boolean;
    startupDescription?: boolean;
    startupEmail?: boolean;
    industry?: boolean;
    market?: boolean;
    stage?: boolean;
    traction?: boolean;
    problem?: boolean;
    pitchDeckUrl?: boolean;
    referral?: boolean;
    consentGiven?: boolean;
    consentGivenAt?: boolean;
    status?: boolean;
    submittedAt?: boolean;
    reviewedAt?: boolean;
    applicantId?: boolean;
    submittedById?: boolean;
    reviewedById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    applicant?: boolean | Prisma.Application$applicantArgs<ExtArgs>;
    reviewedBy?: boolean | Prisma.Application$reviewedByArgs<ExtArgs>;
}, ExtArgs["result"]["application"]>;
export type ApplicationSelectScalar = {
    id?: boolean;
    publicRef?: boolean;
    startupName?: boolean;
    startupDescription?: boolean;
    startupEmail?: boolean;
    industry?: boolean;
    market?: boolean;
    stage?: boolean;
    traction?: boolean;
    problem?: boolean;
    pitchDeckUrl?: boolean;
    referral?: boolean;
    consentGiven?: boolean;
    consentGivenAt?: boolean;
    status?: boolean;
    submittedAt?: boolean;
    reviewedAt?: boolean;
    applicantId?: boolean;
    submittedById?: boolean;
    reviewedById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ApplicationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "publicRef" | "startupName" | "startupDescription" | "startupEmail" | "industry" | "market" | "stage" | "traction" | "problem" | "pitchDeckUrl" | "referral" | "consentGiven" | "consentGivenAt" | "status" | "submittedAt" | "reviewedAt" | "applicantId" | "submittedById" | "reviewedById" | "createdAt" | "updatedAt", ExtArgs["result"]["application"]>;
export type ApplicationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    applicant?: boolean | Prisma.Application$applicantArgs<ExtArgs>;
    reviewedBy?: boolean | Prisma.Application$reviewedByArgs<ExtArgs>;
    teamMembers?: boolean | Prisma.Application$teamMembersArgs<ExtArgs>;
    emailDeliveries?: boolean | Prisma.Application$emailDeliveriesArgs<ExtArgs>;
    _count?: boolean | Prisma.ApplicationCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ApplicationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    applicant?: boolean | Prisma.Application$applicantArgs<ExtArgs>;
    reviewedBy?: boolean | Prisma.Application$reviewedByArgs<ExtArgs>;
};
export type ApplicationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    applicant?: boolean | Prisma.Application$applicantArgs<ExtArgs>;
    reviewedBy?: boolean | Prisma.Application$reviewedByArgs<ExtArgs>;
};
export type $ApplicationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Application";
    objects: {
        applicant: Prisma.$UserPayload<ExtArgs> | null;
        reviewedBy: Prisma.$UserPayload<ExtArgs> | null;
        teamMembers: Prisma.$ApplicationTeamMemberPayload<ExtArgs>[];
        emailDeliveries: Prisma.$EmailDeliveryPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        publicRef: string;
        startupName: string;
        startupDescription: string;
        startupEmail: string;
        industry: string;
        market: string;
        stage: string;
        traction: string;
        problem: string;
        pitchDeckUrl: string | null;
        referral: string | null;
        consentGiven: boolean;
        consentGivenAt: Date | null;
        status: $Enums.ApplicationStatus;
        submittedAt: Date | null;
        reviewedAt: Date | null;
        applicantId: string | null;
        submittedById: string | null;
        reviewedById: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["application"]>;
    composites: {};
};
export type ApplicationGetPayload<S extends boolean | null | undefined | ApplicationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ApplicationPayload, S>;
export type ApplicationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ApplicationCountAggregateInputType | true;
};
export interface ApplicationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Application'];
        meta: {
            name: 'Application';
        };
    };
    /**
     * Find zero or one Application that matches the filter.
     * @param {ApplicationFindUniqueArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApplicationFindUniqueArgs>(args: Prisma.SelectSubset<T, ApplicationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ApplicationClient<runtime.Types.Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Application that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApplicationFindUniqueOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApplicationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ApplicationClient<runtime.Types.Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Application that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApplicationFindFirstArgs>(args?: Prisma.SelectSubset<T, ApplicationFindFirstArgs<ExtArgs>>): Prisma.Prisma__ApplicationClient<runtime.Types.Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Application that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApplicationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ApplicationClient<runtime.Types.Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applications
     * const applications = await prisma.application.findMany()
     *
     * // Get first 10 Applications
     * const applications = await prisma.application.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const applicationWithIdOnly = await prisma.application.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ApplicationFindManyArgs>(args?: Prisma.SelectSubset<T, ApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Application.
     * @param {ApplicationCreateArgs} args - Arguments to create a Application.
     * @example
     * // Create one Application
     * const Application = await prisma.application.create({
     *   data: {
     *     // ... data to create a Application
     *   }
     * })
     *
     */
    create<T extends ApplicationCreateArgs>(args: Prisma.SelectSubset<T, ApplicationCreateArgs<ExtArgs>>): Prisma.Prisma__ApplicationClient<runtime.Types.Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Applications.
     * @param {ApplicationCreateManyArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ApplicationCreateManyArgs>(args?: Prisma.SelectSubset<T, ApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Applications and returns the data saved in the database.
     * @param {ApplicationCreateManyAndReturnArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Applications and only return the `id`
     * const applicationWithIdOnly = await prisma.application.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ApplicationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Application.
     * @param {ApplicationDeleteArgs} args - Arguments to delete one Application.
     * @example
     * // Delete one Application
     * const Application = await prisma.application.delete({
     *   where: {
     *     // ... filter to delete one Application
     *   }
     * })
     *
     */
    delete<T extends ApplicationDeleteArgs>(args: Prisma.SelectSubset<T, ApplicationDeleteArgs<ExtArgs>>): Prisma.Prisma__ApplicationClient<runtime.Types.Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Application.
     * @param {ApplicationUpdateArgs} args - Arguments to update one Application.
     * @example
     * // Update one Application
     * const application = await prisma.application.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ApplicationUpdateArgs>(args: Prisma.SelectSubset<T, ApplicationUpdateArgs<ExtArgs>>): Prisma.Prisma__ApplicationClient<runtime.Types.Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Applications.
     * @param {ApplicationDeleteManyArgs} args - Arguments to filter Applications to delete.
     * @example
     * // Delete a few Applications
     * const { count } = await prisma.application.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ApplicationDeleteManyArgs>(args?: Prisma.SelectSubset<T, ApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ApplicationUpdateManyArgs>(args: Prisma.SelectSubset<T, ApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Applications and returns the data updated in the database.
     * @param {ApplicationUpdateManyAndReturnArgs} args - Arguments to update many Applications.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Applications and only return the `id`
     * const applicationWithIdOnly = await prisma.application.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ApplicationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ApplicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Application.
     * @param {ApplicationUpsertArgs} args - Arguments to update or create a Application.
     * @example
     * // Update or create a Application
     * const application = await prisma.application.upsert({
     *   create: {
     *     // ... data to create a Application
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Application we want to update
     *   }
     * })
     */
    upsert<T extends ApplicationUpsertArgs>(args: Prisma.SelectSubset<T, ApplicationUpsertArgs<ExtArgs>>): Prisma.Prisma__ApplicationClient<runtime.Types.Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationCountArgs} args - Arguments to filter Applications to count.
     * @example
     * // Count the number of Applications
     * const count = await prisma.application.count({
     *   where: {
     *     // ... the filter for the Applications we want to count
     *   }
     * })
    **/
    count<T extends ApplicationCountArgs>(args?: Prisma.Subset<T, ApplicationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ApplicationCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApplicationAggregateArgs>(args: Prisma.Subset<T, ApplicationAggregateArgs>): Prisma.PrismaPromise<GetApplicationAggregateType<T>>;
    /**
     * Group by Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends ApplicationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ApplicationGroupByArgs['orderBy'];
    } : {
        orderBy?: ApplicationGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Application model
     */
    readonly fields: ApplicationFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Application.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ApplicationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    applicant<T extends Prisma.Application$applicantArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Application$applicantArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    reviewedBy<T extends Prisma.Application$reviewedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Application$reviewedByArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    teamMembers<T extends Prisma.Application$teamMembersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Application$teamMembersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApplicationTeamMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    emailDeliveries<T extends Prisma.Application$emailDeliveriesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Application$emailDeliveriesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmailDeliveryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Application model
 */
export interface ApplicationFieldRefs {
    readonly id: Prisma.FieldRef<"Application", 'String'>;
    readonly publicRef: Prisma.FieldRef<"Application", 'String'>;
    readonly startupName: Prisma.FieldRef<"Application", 'String'>;
    readonly startupDescription: Prisma.FieldRef<"Application", 'String'>;
    readonly startupEmail: Prisma.FieldRef<"Application", 'String'>;
    readonly industry: Prisma.FieldRef<"Application", 'String'>;
    readonly market: Prisma.FieldRef<"Application", 'String'>;
    readonly stage: Prisma.FieldRef<"Application", 'String'>;
    readonly traction: Prisma.FieldRef<"Application", 'String'>;
    readonly problem: Prisma.FieldRef<"Application", 'String'>;
    readonly pitchDeckUrl: Prisma.FieldRef<"Application", 'String'>;
    readonly referral: Prisma.FieldRef<"Application", 'String'>;
    readonly consentGiven: Prisma.FieldRef<"Application", 'Boolean'>;
    readonly consentGivenAt: Prisma.FieldRef<"Application", 'DateTime'>;
    readonly status: Prisma.FieldRef<"Application", 'ApplicationStatus'>;
    readonly submittedAt: Prisma.FieldRef<"Application", 'DateTime'>;
    readonly reviewedAt: Prisma.FieldRef<"Application", 'DateTime'>;
    readonly applicantId: Prisma.FieldRef<"Application", 'String'>;
    readonly submittedById: Prisma.FieldRef<"Application", 'String'>;
    readonly reviewedById: Prisma.FieldRef<"Application", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Application", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Application", 'DateTime'>;
}
/**
 * Application findUnique
 */
export type ApplicationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: Prisma.ApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Application
     */
    omit?: Prisma.ApplicationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApplicationInclude<ExtArgs> | null;
    /**
     * Filter, which Application to fetch.
     */
    where: Prisma.ApplicationWhereUniqueInput;
};
/**
 * Application findUniqueOrThrow
 */
export type ApplicationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: Prisma.ApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Application
     */
    omit?: Prisma.ApplicationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApplicationInclude<ExtArgs> | null;
    /**
     * Filter, which Application to fetch.
     */
    where: Prisma.ApplicationWhereUniqueInput;
};
/**
 * Application findFirst
 */
export type ApplicationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: Prisma.ApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Application
     */
    omit?: Prisma.ApplicationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApplicationInclude<ExtArgs> | null;
    /**
     * Filter, which Application to fetch.
     */
    where?: Prisma.ApplicationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Applications to fetch.
     */
    orderBy?: Prisma.ApplicationOrderByWithRelationInput | Prisma.ApplicationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Applications.
     */
    cursor?: Prisma.ApplicationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Applications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Applications.
     */
    distinct?: Prisma.ApplicationScalarFieldEnum | Prisma.ApplicationScalarFieldEnum[];
};
/**
 * Application findFirstOrThrow
 */
export type ApplicationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: Prisma.ApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Application
     */
    omit?: Prisma.ApplicationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApplicationInclude<ExtArgs> | null;
    /**
     * Filter, which Application to fetch.
     */
    where?: Prisma.ApplicationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Applications to fetch.
     */
    orderBy?: Prisma.ApplicationOrderByWithRelationInput | Prisma.ApplicationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Applications.
     */
    cursor?: Prisma.ApplicationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Applications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Applications.
     */
    distinct?: Prisma.ApplicationScalarFieldEnum | Prisma.ApplicationScalarFieldEnum[];
};
/**
 * Application findMany
 */
export type ApplicationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: Prisma.ApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Application
     */
    omit?: Prisma.ApplicationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApplicationInclude<ExtArgs> | null;
    /**
     * Filter, which Applications to fetch.
     */
    where?: Prisma.ApplicationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Applications to fetch.
     */
    orderBy?: Prisma.ApplicationOrderByWithRelationInput | Prisma.ApplicationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Applications.
     */
    cursor?: Prisma.ApplicationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Applications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Applications.
     */
    distinct?: Prisma.ApplicationScalarFieldEnum | Prisma.ApplicationScalarFieldEnum[];
};
/**
 * Application create
 */
export type ApplicationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: Prisma.ApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Application
     */
    omit?: Prisma.ApplicationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApplicationInclude<ExtArgs> | null;
    /**
     * The data needed to create a Application.
     */
    data: Prisma.XOR<Prisma.ApplicationCreateInput, Prisma.ApplicationUncheckedCreateInput>;
};
/**
 * Application createMany
 */
export type ApplicationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Applications.
     */
    data: Prisma.ApplicationCreateManyInput | Prisma.ApplicationCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Application createManyAndReturn
 */
export type ApplicationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: Prisma.ApplicationSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Application
     */
    omit?: Prisma.ApplicationOmit<ExtArgs> | null;
    /**
     * The data used to create many Applications.
     */
    data: Prisma.ApplicationCreateManyInput | Prisma.ApplicationCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApplicationIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Application update
 */
export type ApplicationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: Prisma.ApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Application
     */
    omit?: Prisma.ApplicationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApplicationInclude<ExtArgs> | null;
    /**
     * The data needed to update a Application.
     */
    data: Prisma.XOR<Prisma.ApplicationUpdateInput, Prisma.ApplicationUncheckedUpdateInput>;
    /**
     * Choose, which Application to update.
     */
    where: Prisma.ApplicationWhereUniqueInput;
};
/**
 * Application updateMany
 */
export type ApplicationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Applications.
     */
    data: Prisma.XOR<Prisma.ApplicationUpdateManyMutationInput, Prisma.ApplicationUncheckedUpdateManyInput>;
    /**
     * Filter which Applications to update
     */
    where?: Prisma.ApplicationWhereInput;
    /**
     * Limit how many Applications to update.
     */
    limit?: number;
};
/**
 * Application updateManyAndReturn
 */
export type ApplicationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: Prisma.ApplicationSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Application
     */
    omit?: Prisma.ApplicationOmit<ExtArgs> | null;
    /**
     * The data used to update Applications.
     */
    data: Prisma.XOR<Prisma.ApplicationUpdateManyMutationInput, Prisma.ApplicationUncheckedUpdateManyInput>;
    /**
     * Filter which Applications to update
     */
    where?: Prisma.ApplicationWhereInput;
    /**
     * Limit how many Applications to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApplicationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Application upsert
 */
export type ApplicationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: Prisma.ApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Application
     */
    omit?: Prisma.ApplicationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApplicationInclude<ExtArgs> | null;
    /**
     * The filter to search for the Application to update in case it exists.
     */
    where: Prisma.ApplicationWhereUniqueInput;
    /**
     * In case the Application found by the `where` argument doesn't exist, create a new Application with this data.
     */
    create: Prisma.XOR<Prisma.ApplicationCreateInput, Prisma.ApplicationUncheckedCreateInput>;
    /**
     * In case the Application was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ApplicationUpdateInput, Prisma.ApplicationUncheckedUpdateInput>;
};
/**
 * Application delete
 */
export type ApplicationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: Prisma.ApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Application
     */
    omit?: Prisma.ApplicationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApplicationInclude<ExtArgs> | null;
    /**
     * Filter which Application to delete.
     */
    where: Prisma.ApplicationWhereUniqueInput;
};
/**
 * Application deleteMany
 */
export type ApplicationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Applications to delete
     */
    where?: Prisma.ApplicationWhereInput;
    /**
     * Limit how many Applications to delete.
     */
    limit?: number;
};
/**
 * Application.applicant
 */
export type Application$applicantArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
/**
 * Application.reviewedBy
 */
export type Application$reviewedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
/**
 * Application.teamMembers
 */
export type Application$teamMembersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationTeamMember
     */
    select?: Prisma.ApplicationTeamMemberSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ApplicationTeamMember
     */
    omit?: Prisma.ApplicationTeamMemberOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApplicationTeamMemberInclude<ExtArgs> | null;
    where?: Prisma.ApplicationTeamMemberWhereInput;
    orderBy?: Prisma.ApplicationTeamMemberOrderByWithRelationInput | Prisma.ApplicationTeamMemberOrderByWithRelationInput[];
    cursor?: Prisma.ApplicationTeamMemberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ApplicationTeamMemberScalarFieldEnum | Prisma.ApplicationTeamMemberScalarFieldEnum[];
};
/**
 * Application.emailDeliveries
 */
export type Application$emailDeliveriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailDelivery
     */
    select?: Prisma.EmailDeliverySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EmailDelivery
     */
    omit?: Prisma.EmailDeliveryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EmailDeliveryInclude<ExtArgs> | null;
    where?: Prisma.EmailDeliveryWhereInput;
    orderBy?: Prisma.EmailDeliveryOrderByWithRelationInput | Prisma.EmailDeliveryOrderByWithRelationInput[];
    cursor?: Prisma.EmailDeliveryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmailDeliveryScalarFieldEnum | Prisma.EmailDeliveryScalarFieldEnum[];
};
/**
 * Application without action
 */
export type ApplicationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: Prisma.ApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Application
     */
    omit?: Prisma.ApplicationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApplicationInclude<ExtArgs> | null;
};
