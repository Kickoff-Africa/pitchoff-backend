import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model ApplicationTeamMember
 *
 */
export type ApplicationTeamMemberModel = runtime.Types.Result.DefaultSelection<Prisma.$ApplicationTeamMemberPayload>;
export type AggregateApplicationTeamMember = {
    _count: ApplicationTeamMemberCountAggregateOutputType | null;
    _avg: ApplicationTeamMemberAvgAggregateOutputType | null;
    _sum: ApplicationTeamMemberSumAggregateOutputType | null;
    _min: ApplicationTeamMemberMinAggregateOutputType | null;
    _max: ApplicationTeamMemberMaxAggregateOutputType | null;
};
export type ApplicationTeamMemberAvgAggregateOutputType = {
    sortOrder: number | null;
};
export type ApplicationTeamMemberSumAggregateOutputType = {
    sortOrder: number | null;
};
export type ApplicationTeamMemberMinAggregateOutputType = {
    id: string | null;
    applicationId: string | null;
    fullName: string | null;
    role: string | null;
    linkedInUrl: string | null;
    background: string | null;
    isPrimary: boolean | null;
    sortOrder: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ApplicationTeamMemberMaxAggregateOutputType = {
    id: string | null;
    applicationId: string | null;
    fullName: string | null;
    role: string | null;
    linkedInUrl: string | null;
    background: string | null;
    isPrimary: boolean | null;
    sortOrder: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ApplicationTeamMemberCountAggregateOutputType = {
    id: number;
    applicationId: number;
    fullName: number;
    role: number;
    linkedInUrl: number;
    background: number;
    isPrimary: number;
    sortOrder: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ApplicationTeamMemberAvgAggregateInputType = {
    sortOrder?: true;
};
export type ApplicationTeamMemberSumAggregateInputType = {
    sortOrder?: true;
};
export type ApplicationTeamMemberMinAggregateInputType = {
    id?: true;
    applicationId?: true;
    fullName?: true;
    role?: true;
    linkedInUrl?: true;
    background?: true;
    isPrimary?: true;
    sortOrder?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ApplicationTeamMemberMaxAggregateInputType = {
    id?: true;
    applicationId?: true;
    fullName?: true;
    role?: true;
    linkedInUrl?: true;
    background?: true;
    isPrimary?: true;
    sortOrder?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ApplicationTeamMemberCountAggregateInputType = {
    id?: true;
    applicationId?: true;
    fullName?: true;
    role?: true;
    linkedInUrl?: true;
    background?: true;
    isPrimary?: true;
    sortOrder?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ApplicationTeamMemberAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ApplicationTeamMember to aggregate.
     */
    where?: Prisma.ApplicationTeamMemberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ApplicationTeamMembers to fetch.
     */
    orderBy?: Prisma.ApplicationTeamMemberOrderByWithRelationInput | Prisma.ApplicationTeamMemberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ApplicationTeamMemberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ApplicationTeamMembers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ApplicationTeamMembers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ApplicationTeamMembers
    **/
    _count?: true | ApplicationTeamMemberCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ApplicationTeamMemberAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ApplicationTeamMemberSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationTeamMemberMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationTeamMemberMaxAggregateInputType;
};
export type GetApplicationTeamMemberAggregateType<T extends ApplicationTeamMemberAggregateArgs> = {
    [P in keyof T & keyof AggregateApplicationTeamMember]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateApplicationTeamMember[P]> : Prisma.GetScalarType<T[P], AggregateApplicationTeamMember[P]>;
};
export type ApplicationTeamMemberGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApplicationTeamMemberWhereInput;
    orderBy?: Prisma.ApplicationTeamMemberOrderByWithAggregationInput | Prisma.ApplicationTeamMemberOrderByWithAggregationInput[];
    by: Prisma.ApplicationTeamMemberScalarFieldEnum[] | Prisma.ApplicationTeamMemberScalarFieldEnum;
    having?: Prisma.ApplicationTeamMemberScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ApplicationTeamMemberCountAggregateInputType | true;
    _avg?: ApplicationTeamMemberAvgAggregateInputType;
    _sum?: ApplicationTeamMemberSumAggregateInputType;
    _min?: ApplicationTeamMemberMinAggregateInputType;
    _max?: ApplicationTeamMemberMaxAggregateInputType;
};
export type ApplicationTeamMemberGroupByOutputType = {
    id: string;
    applicationId: string;
    fullName: string;
    role: string;
    linkedInUrl: string;
    background: string;
    isPrimary: boolean;
    sortOrder: number;
    createdAt: Date;
    updatedAt: Date;
    _count: ApplicationTeamMemberCountAggregateOutputType | null;
    _avg: ApplicationTeamMemberAvgAggregateOutputType | null;
    _sum: ApplicationTeamMemberSumAggregateOutputType | null;
    _min: ApplicationTeamMemberMinAggregateOutputType | null;
    _max: ApplicationTeamMemberMaxAggregateOutputType | null;
};
export type GetApplicationTeamMemberGroupByPayload<T extends ApplicationTeamMemberGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ApplicationTeamMemberGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ApplicationTeamMemberGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ApplicationTeamMemberGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ApplicationTeamMemberGroupByOutputType[P]>;
}>>;
export type ApplicationTeamMemberWhereInput = {
    AND?: Prisma.ApplicationTeamMemberWhereInput | Prisma.ApplicationTeamMemberWhereInput[];
    OR?: Prisma.ApplicationTeamMemberWhereInput[];
    NOT?: Prisma.ApplicationTeamMemberWhereInput | Prisma.ApplicationTeamMemberWhereInput[];
    id?: Prisma.StringFilter<"ApplicationTeamMember"> | string;
    applicationId?: Prisma.StringFilter<"ApplicationTeamMember"> | string;
    fullName?: Prisma.StringFilter<"ApplicationTeamMember"> | string;
    role?: Prisma.StringFilter<"ApplicationTeamMember"> | string;
    linkedInUrl?: Prisma.StringFilter<"ApplicationTeamMember"> | string;
    background?: Prisma.StringFilter<"ApplicationTeamMember"> | string;
    isPrimary?: Prisma.BoolFilter<"ApplicationTeamMember"> | boolean;
    sortOrder?: Prisma.IntFilter<"ApplicationTeamMember"> | number;
    createdAt?: Prisma.DateTimeFilter<"ApplicationTeamMember"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ApplicationTeamMember"> | Date | string;
    application?: Prisma.XOR<Prisma.ApplicationScalarRelationFilter, Prisma.ApplicationWhereInput>;
};
export type ApplicationTeamMemberOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    linkedInUrl?: Prisma.SortOrder;
    background?: Prisma.SortOrder;
    isPrimary?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    application?: Prisma.ApplicationOrderByWithRelationInput;
};
export type ApplicationTeamMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ApplicationTeamMemberWhereInput | Prisma.ApplicationTeamMemberWhereInput[];
    OR?: Prisma.ApplicationTeamMemberWhereInput[];
    NOT?: Prisma.ApplicationTeamMemberWhereInput | Prisma.ApplicationTeamMemberWhereInput[];
    applicationId?: Prisma.StringFilter<"ApplicationTeamMember"> | string;
    fullName?: Prisma.StringFilter<"ApplicationTeamMember"> | string;
    role?: Prisma.StringFilter<"ApplicationTeamMember"> | string;
    linkedInUrl?: Prisma.StringFilter<"ApplicationTeamMember"> | string;
    background?: Prisma.StringFilter<"ApplicationTeamMember"> | string;
    isPrimary?: Prisma.BoolFilter<"ApplicationTeamMember"> | boolean;
    sortOrder?: Prisma.IntFilter<"ApplicationTeamMember"> | number;
    createdAt?: Prisma.DateTimeFilter<"ApplicationTeamMember"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ApplicationTeamMember"> | Date | string;
    application?: Prisma.XOR<Prisma.ApplicationScalarRelationFilter, Prisma.ApplicationWhereInput>;
}, "id">;
export type ApplicationTeamMemberOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    linkedInUrl?: Prisma.SortOrder;
    background?: Prisma.SortOrder;
    isPrimary?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ApplicationTeamMemberCountOrderByAggregateInput;
    _avg?: Prisma.ApplicationTeamMemberAvgOrderByAggregateInput;
    _max?: Prisma.ApplicationTeamMemberMaxOrderByAggregateInput;
    _min?: Prisma.ApplicationTeamMemberMinOrderByAggregateInput;
    _sum?: Prisma.ApplicationTeamMemberSumOrderByAggregateInput;
};
export type ApplicationTeamMemberScalarWhereWithAggregatesInput = {
    AND?: Prisma.ApplicationTeamMemberScalarWhereWithAggregatesInput | Prisma.ApplicationTeamMemberScalarWhereWithAggregatesInput[];
    OR?: Prisma.ApplicationTeamMemberScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ApplicationTeamMemberScalarWhereWithAggregatesInput | Prisma.ApplicationTeamMemberScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ApplicationTeamMember"> | string;
    applicationId?: Prisma.StringWithAggregatesFilter<"ApplicationTeamMember"> | string;
    fullName?: Prisma.StringWithAggregatesFilter<"ApplicationTeamMember"> | string;
    role?: Prisma.StringWithAggregatesFilter<"ApplicationTeamMember"> | string;
    linkedInUrl?: Prisma.StringWithAggregatesFilter<"ApplicationTeamMember"> | string;
    background?: Prisma.StringWithAggregatesFilter<"ApplicationTeamMember"> | string;
    isPrimary?: Prisma.BoolWithAggregatesFilter<"ApplicationTeamMember"> | boolean;
    sortOrder?: Prisma.IntWithAggregatesFilter<"ApplicationTeamMember"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ApplicationTeamMember"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ApplicationTeamMember"> | Date | string;
};
export type ApplicationTeamMemberCreateInput = {
    id?: string;
    fullName: string;
    role: string;
    linkedInUrl: string;
    background: string;
    isPrimary?: boolean;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    application: Prisma.ApplicationCreateNestedOneWithoutTeamMembersInput;
};
export type ApplicationTeamMemberUncheckedCreateInput = {
    id?: string;
    applicationId: string;
    fullName: string;
    role: string;
    linkedInUrl: string;
    background: string;
    isPrimary?: boolean;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ApplicationTeamMemberUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    linkedInUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    background?: Prisma.StringFieldUpdateOperationsInput | string;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    application?: Prisma.ApplicationUpdateOneRequiredWithoutTeamMembersNestedInput;
};
export type ApplicationTeamMemberUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    applicationId?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    linkedInUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    background?: Prisma.StringFieldUpdateOperationsInput | string;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApplicationTeamMemberCreateManyInput = {
    id?: string;
    applicationId: string;
    fullName: string;
    role: string;
    linkedInUrl: string;
    background: string;
    isPrimary?: boolean;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ApplicationTeamMemberUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    linkedInUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    background?: Prisma.StringFieldUpdateOperationsInput | string;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApplicationTeamMemberUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    applicationId?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    linkedInUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    background?: Prisma.StringFieldUpdateOperationsInput | string;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApplicationTeamMemberListRelationFilter = {
    every?: Prisma.ApplicationTeamMemberWhereInput;
    some?: Prisma.ApplicationTeamMemberWhereInput;
    none?: Prisma.ApplicationTeamMemberWhereInput;
};
export type ApplicationTeamMemberOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ApplicationTeamMemberCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    linkedInUrl?: Prisma.SortOrder;
    background?: Prisma.SortOrder;
    isPrimary?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ApplicationTeamMemberAvgOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type ApplicationTeamMemberMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    linkedInUrl?: Prisma.SortOrder;
    background?: Prisma.SortOrder;
    isPrimary?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ApplicationTeamMemberMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    linkedInUrl?: Prisma.SortOrder;
    background?: Prisma.SortOrder;
    isPrimary?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ApplicationTeamMemberSumOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type ApplicationTeamMemberCreateNestedManyWithoutApplicationInput = {
    create?: Prisma.XOR<Prisma.ApplicationTeamMemberCreateWithoutApplicationInput, Prisma.ApplicationTeamMemberUncheckedCreateWithoutApplicationInput> | Prisma.ApplicationTeamMemberCreateWithoutApplicationInput[] | Prisma.ApplicationTeamMemberUncheckedCreateWithoutApplicationInput[];
    connectOrCreate?: Prisma.ApplicationTeamMemberCreateOrConnectWithoutApplicationInput | Prisma.ApplicationTeamMemberCreateOrConnectWithoutApplicationInput[];
    createMany?: Prisma.ApplicationTeamMemberCreateManyApplicationInputEnvelope;
    connect?: Prisma.ApplicationTeamMemberWhereUniqueInput | Prisma.ApplicationTeamMemberWhereUniqueInput[];
};
export type ApplicationTeamMemberUncheckedCreateNestedManyWithoutApplicationInput = {
    create?: Prisma.XOR<Prisma.ApplicationTeamMemberCreateWithoutApplicationInput, Prisma.ApplicationTeamMemberUncheckedCreateWithoutApplicationInput> | Prisma.ApplicationTeamMemberCreateWithoutApplicationInput[] | Prisma.ApplicationTeamMemberUncheckedCreateWithoutApplicationInput[];
    connectOrCreate?: Prisma.ApplicationTeamMemberCreateOrConnectWithoutApplicationInput | Prisma.ApplicationTeamMemberCreateOrConnectWithoutApplicationInput[];
    createMany?: Prisma.ApplicationTeamMemberCreateManyApplicationInputEnvelope;
    connect?: Prisma.ApplicationTeamMemberWhereUniqueInput | Prisma.ApplicationTeamMemberWhereUniqueInput[];
};
export type ApplicationTeamMemberUpdateManyWithoutApplicationNestedInput = {
    create?: Prisma.XOR<Prisma.ApplicationTeamMemberCreateWithoutApplicationInput, Prisma.ApplicationTeamMemberUncheckedCreateWithoutApplicationInput> | Prisma.ApplicationTeamMemberCreateWithoutApplicationInput[] | Prisma.ApplicationTeamMemberUncheckedCreateWithoutApplicationInput[];
    connectOrCreate?: Prisma.ApplicationTeamMemberCreateOrConnectWithoutApplicationInput | Prisma.ApplicationTeamMemberCreateOrConnectWithoutApplicationInput[];
    upsert?: Prisma.ApplicationTeamMemberUpsertWithWhereUniqueWithoutApplicationInput | Prisma.ApplicationTeamMemberUpsertWithWhereUniqueWithoutApplicationInput[];
    createMany?: Prisma.ApplicationTeamMemberCreateManyApplicationInputEnvelope;
    set?: Prisma.ApplicationTeamMemberWhereUniqueInput | Prisma.ApplicationTeamMemberWhereUniqueInput[];
    disconnect?: Prisma.ApplicationTeamMemberWhereUniqueInput | Prisma.ApplicationTeamMemberWhereUniqueInput[];
    delete?: Prisma.ApplicationTeamMemberWhereUniqueInput | Prisma.ApplicationTeamMemberWhereUniqueInput[];
    connect?: Prisma.ApplicationTeamMemberWhereUniqueInput | Prisma.ApplicationTeamMemberWhereUniqueInput[];
    update?: Prisma.ApplicationTeamMemberUpdateWithWhereUniqueWithoutApplicationInput | Prisma.ApplicationTeamMemberUpdateWithWhereUniqueWithoutApplicationInput[];
    updateMany?: Prisma.ApplicationTeamMemberUpdateManyWithWhereWithoutApplicationInput | Prisma.ApplicationTeamMemberUpdateManyWithWhereWithoutApplicationInput[];
    deleteMany?: Prisma.ApplicationTeamMemberScalarWhereInput | Prisma.ApplicationTeamMemberScalarWhereInput[];
};
export type ApplicationTeamMemberUncheckedUpdateManyWithoutApplicationNestedInput = {
    create?: Prisma.XOR<Prisma.ApplicationTeamMemberCreateWithoutApplicationInput, Prisma.ApplicationTeamMemberUncheckedCreateWithoutApplicationInput> | Prisma.ApplicationTeamMemberCreateWithoutApplicationInput[] | Prisma.ApplicationTeamMemberUncheckedCreateWithoutApplicationInput[];
    connectOrCreate?: Prisma.ApplicationTeamMemberCreateOrConnectWithoutApplicationInput | Prisma.ApplicationTeamMemberCreateOrConnectWithoutApplicationInput[];
    upsert?: Prisma.ApplicationTeamMemberUpsertWithWhereUniqueWithoutApplicationInput | Prisma.ApplicationTeamMemberUpsertWithWhereUniqueWithoutApplicationInput[];
    createMany?: Prisma.ApplicationTeamMemberCreateManyApplicationInputEnvelope;
    set?: Prisma.ApplicationTeamMemberWhereUniqueInput | Prisma.ApplicationTeamMemberWhereUniqueInput[];
    disconnect?: Prisma.ApplicationTeamMemberWhereUniqueInput | Prisma.ApplicationTeamMemberWhereUniqueInput[];
    delete?: Prisma.ApplicationTeamMemberWhereUniqueInput | Prisma.ApplicationTeamMemberWhereUniqueInput[];
    connect?: Prisma.ApplicationTeamMemberWhereUniqueInput | Prisma.ApplicationTeamMemberWhereUniqueInput[];
    update?: Prisma.ApplicationTeamMemberUpdateWithWhereUniqueWithoutApplicationInput | Prisma.ApplicationTeamMemberUpdateWithWhereUniqueWithoutApplicationInput[];
    updateMany?: Prisma.ApplicationTeamMemberUpdateManyWithWhereWithoutApplicationInput | Prisma.ApplicationTeamMemberUpdateManyWithWhereWithoutApplicationInput[];
    deleteMany?: Prisma.ApplicationTeamMemberScalarWhereInput | Prisma.ApplicationTeamMemberScalarWhereInput[];
};
export type ApplicationTeamMemberCreateWithoutApplicationInput = {
    id?: string;
    fullName: string;
    role: string;
    linkedInUrl: string;
    background: string;
    isPrimary?: boolean;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ApplicationTeamMemberUncheckedCreateWithoutApplicationInput = {
    id?: string;
    fullName: string;
    role: string;
    linkedInUrl: string;
    background: string;
    isPrimary?: boolean;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ApplicationTeamMemberCreateOrConnectWithoutApplicationInput = {
    where: Prisma.ApplicationTeamMemberWhereUniqueInput;
    create: Prisma.XOR<Prisma.ApplicationTeamMemberCreateWithoutApplicationInput, Prisma.ApplicationTeamMemberUncheckedCreateWithoutApplicationInput>;
};
export type ApplicationTeamMemberCreateManyApplicationInputEnvelope = {
    data: Prisma.ApplicationTeamMemberCreateManyApplicationInput | Prisma.ApplicationTeamMemberCreateManyApplicationInput[];
    skipDuplicates?: boolean;
};
export type ApplicationTeamMemberUpsertWithWhereUniqueWithoutApplicationInput = {
    where: Prisma.ApplicationTeamMemberWhereUniqueInput;
    update: Prisma.XOR<Prisma.ApplicationTeamMemberUpdateWithoutApplicationInput, Prisma.ApplicationTeamMemberUncheckedUpdateWithoutApplicationInput>;
    create: Prisma.XOR<Prisma.ApplicationTeamMemberCreateWithoutApplicationInput, Prisma.ApplicationTeamMemberUncheckedCreateWithoutApplicationInput>;
};
export type ApplicationTeamMemberUpdateWithWhereUniqueWithoutApplicationInput = {
    where: Prisma.ApplicationTeamMemberWhereUniqueInput;
    data: Prisma.XOR<Prisma.ApplicationTeamMemberUpdateWithoutApplicationInput, Prisma.ApplicationTeamMemberUncheckedUpdateWithoutApplicationInput>;
};
export type ApplicationTeamMemberUpdateManyWithWhereWithoutApplicationInput = {
    where: Prisma.ApplicationTeamMemberScalarWhereInput;
    data: Prisma.XOR<Prisma.ApplicationTeamMemberUpdateManyMutationInput, Prisma.ApplicationTeamMemberUncheckedUpdateManyWithoutApplicationInput>;
};
export type ApplicationTeamMemberScalarWhereInput = {
    AND?: Prisma.ApplicationTeamMemberScalarWhereInput | Prisma.ApplicationTeamMemberScalarWhereInput[];
    OR?: Prisma.ApplicationTeamMemberScalarWhereInput[];
    NOT?: Prisma.ApplicationTeamMemberScalarWhereInput | Prisma.ApplicationTeamMemberScalarWhereInput[];
    id?: Prisma.StringFilter<"ApplicationTeamMember"> | string;
    applicationId?: Prisma.StringFilter<"ApplicationTeamMember"> | string;
    fullName?: Prisma.StringFilter<"ApplicationTeamMember"> | string;
    role?: Prisma.StringFilter<"ApplicationTeamMember"> | string;
    linkedInUrl?: Prisma.StringFilter<"ApplicationTeamMember"> | string;
    background?: Prisma.StringFilter<"ApplicationTeamMember"> | string;
    isPrimary?: Prisma.BoolFilter<"ApplicationTeamMember"> | boolean;
    sortOrder?: Prisma.IntFilter<"ApplicationTeamMember"> | number;
    createdAt?: Prisma.DateTimeFilter<"ApplicationTeamMember"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ApplicationTeamMember"> | Date | string;
};
export type ApplicationTeamMemberCreateManyApplicationInput = {
    id?: string;
    fullName: string;
    role: string;
    linkedInUrl: string;
    background: string;
    isPrimary?: boolean;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ApplicationTeamMemberUpdateWithoutApplicationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    linkedInUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    background?: Prisma.StringFieldUpdateOperationsInput | string;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApplicationTeamMemberUncheckedUpdateWithoutApplicationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    linkedInUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    background?: Prisma.StringFieldUpdateOperationsInput | string;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApplicationTeamMemberUncheckedUpdateManyWithoutApplicationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    linkedInUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    background?: Prisma.StringFieldUpdateOperationsInput | string;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApplicationTeamMemberSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    applicationId?: boolean;
    fullName?: boolean;
    role?: boolean;
    linkedInUrl?: boolean;
    background?: boolean;
    isPrimary?: boolean;
    sortOrder?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    application?: boolean | Prisma.ApplicationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["applicationTeamMember"]>;
export type ApplicationTeamMemberSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    applicationId?: boolean;
    fullName?: boolean;
    role?: boolean;
    linkedInUrl?: boolean;
    background?: boolean;
    isPrimary?: boolean;
    sortOrder?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    application?: boolean | Prisma.ApplicationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["applicationTeamMember"]>;
export type ApplicationTeamMemberSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    applicationId?: boolean;
    fullName?: boolean;
    role?: boolean;
    linkedInUrl?: boolean;
    background?: boolean;
    isPrimary?: boolean;
    sortOrder?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    application?: boolean | Prisma.ApplicationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["applicationTeamMember"]>;
export type ApplicationTeamMemberSelectScalar = {
    id?: boolean;
    applicationId?: boolean;
    fullName?: boolean;
    role?: boolean;
    linkedInUrl?: boolean;
    background?: boolean;
    isPrimary?: boolean;
    sortOrder?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ApplicationTeamMemberOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "applicationId" | "fullName" | "role" | "linkedInUrl" | "background" | "isPrimary" | "sortOrder" | "createdAt" | "updatedAt", ExtArgs["result"]["applicationTeamMember"]>;
export type ApplicationTeamMemberInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    application?: boolean | Prisma.ApplicationDefaultArgs<ExtArgs>;
};
export type ApplicationTeamMemberIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    application?: boolean | Prisma.ApplicationDefaultArgs<ExtArgs>;
};
export type ApplicationTeamMemberIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    application?: boolean | Prisma.ApplicationDefaultArgs<ExtArgs>;
};
export type $ApplicationTeamMemberPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ApplicationTeamMember";
    objects: {
        application: Prisma.$ApplicationPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        applicationId: string;
        fullName: string;
        role: string;
        linkedInUrl: string;
        background: string;
        isPrimary: boolean;
        sortOrder: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["applicationTeamMember"]>;
    composites: {};
};
export type ApplicationTeamMemberGetPayload<S extends boolean | null | undefined | ApplicationTeamMemberDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ApplicationTeamMemberPayload, S>;
export type ApplicationTeamMemberCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ApplicationTeamMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ApplicationTeamMemberCountAggregateInputType | true;
};
export interface ApplicationTeamMemberDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ApplicationTeamMember'];
        meta: {
            name: 'ApplicationTeamMember';
        };
    };
    /**
     * Find zero or one ApplicationTeamMember that matches the filter.
     * @param {ApplicationTeamMemberFindUniqueArgs} args - Arguments to find a ApplicationTeamMember
     * @example
     * // Get one ApplicationTeamMember
     * const applicationTeamMember = await prisma.applicationTeamMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApplicationTeamMemberFindUniqueArgs>(args: Prisma.SelectSubset<T, ApplicationTeamMemberFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ApplicationTeamMemberClient<runtime.Types.Result.GetResult<Prisma.$ApplicationTeamMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ApplicationTeamMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApplicationTeamMemberFindUniqueOrThrowArgs} args - Arguments to find a ApplicationTeamMember
     * @example
     * // Get one ApplicationTeamMember
     * const applicationTeamMember = await prisma.applicationTeamMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApplicationTeamMemberFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ApplicationTeamMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ApplicationTeamMemberClient<runtime.Types.Result.GetResult<Prisma.$ApplicationTeamMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ApplicationTeamMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationTeamMemberFindFirstArgs} args - Arguments to find a ApplicationTeamMember
     * @example
     * // Get one ApplicationTeamMember
     * const applicationTeamMember = await prisma.applicationTeamMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApplicationTeamMemberFindFirstArgs>(args?: Prisma.SelectSubset<T, ApplicationTeamMemberFindFirstArgs<ExtArgs>>): Prisma.Prisma__ApplicationTeamMemberClient<runtime.Types.Result.GetResult<Prisma.$ApplicationTeamMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ApplicationTeamMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationTeamMemberFindFirstOrThrowArgs} args - Arguments to find a ApplicationTeamMember
     * @example
     * // Get one ApplicationTeamMember
     * const applicationTeamMember = await prisma.applicationTeamMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApplicationTeamMemberFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ApplicationTeamMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ApplicationTeamMemberClient<runtime.Types.Result.GetResult<Prisma.$ApplicationTeamMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ApplicationTeamMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationTeamMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApplicationTeamMembers
     * const applicationTeamMembers = await prisma.applicationTeamMember.findMany()
     *
     * // Get first 10 ApplicationTeamMembers
     * const applicationTeamMembers = await prisma.applicationTeamMember.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const applicationTeamMemberWithIdOnly = await prisma.applicationTeamMember.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ApplicationTeamMemberFindManyArgs>(args?: Prisma.SelectSubset<T, ApplicationTeamMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApplicationTeamMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ApplicationTeamMember.
     * @param {ApplicationTeamMemberCreateArgs} args - Arguments to create a ApplicationTeamMember.
     * @example
     * // Create one ApplicationTeamMember
     * const ApplicationTeamMember = await prisma.applicationTeamMember.create({
     *   data: {
     *     // ... data to create a ApplicationTeamMember
     *   }
     * })
     *
     */
    create<T extends ApplicationTeamMemberCreateArgs>(args: Prisma.SelectSubset<T, ApplicationTeamMemberCreateArgs<ExtArgs>>): Prisma.Prisma__ApplicationTeamMemberClient<runtime.Types.Result.GetResult<Prisma.$ApplicationTeamMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ApplicationTeamMembers.
     * @param {ApplicationTeamMemberCreateManyArgs} args - Arguments to create many ApplicationTeamMembers.
     * @example
     * // Create many ApplicationTeamMembers
     * const applicationTeamMember = await prisma.applicationTeamMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ApplicationTeamMemberCreateManyArgs>(args?: Prisma.SelectSubset<T, ApplicationTeamMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ApplicationTeamMembers and returns the data saved in the database.
     * @param {ApplicationTeamMemberCreateManyAndReturnArgs} args - Arguments to create many ApplicationTeamMembers.
     * @example
     * // Create many ApplicationTeamMembers
     * const applicationTeamMember = await prisma.applicationTeamMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ApplicationTeamMembers and only return the `id`
     * const applicationTeamMemberWithIdOnly = await prisma.applicationTeamMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ApplicationTeamMemberCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ApplicationTeamMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApplicationTeamMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ApplicationTeamMember.
     * @param {ApplicationTeamMemberDeleteArgs} args - Arguments to delete one ApplicationTeamMember.
     * @example
     * // Delete one ApplicationTeamMember
     * const ApplicationTeamMember = await prisma.applicationTeamMember.delete({
     *   where: {
     *     // ... filter to delete one ApplicationTeamMember
     *   }
     * })
     *
     */
    delete<T extends ApplicationTeamMemberDeleteArgs>(args: Prisma.SelectSubset<T, ApplicationTeamMemberDeleteArgs<ExtArgs>>): Prisma.Prisma__ApplicationTeamMemberClient<runtime.Types.Result.GetResult<Prisma.$ApplicationTeamMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ApplicationTeamMember.
     * @param {ApplicationTeamMemberUpdateArgs} args - Arguments to update one ApplicationTeamMember.
     * @example
     * // Update one ApplicationTeamMember
     * const applicationTeamMember = await prisma.applicationTeamMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ApplicationTeamMemberUpdateArgs>(args: Prisma.SelectSubset<T, ApplicationTeamMemberUpdateArgs<ExtArgs>>): Prisma.Prisma__ApplicationTeamMemberClient<runtime.Types.Result.GetResult<Prisma.$ApplicationTeamMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ApplicationTeamMembers.
     * @param {ApplicationTeamMemberDeleteManyArgs} args - Arguments to filter ApplicationTeamMembers to delete.
     * @example
     * // Delete a few ApplicationTeamMembers
     * const { count } = await prisma.applicationTeamMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ApplicationTeamMemberDeleteManyArgs>(args?: Prisma.SelectSubset<T, ApplicationTeamMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ApplicationTeamMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationTeamMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApplicationTeamMembers
     * const applicationTeamMember = await prisma.applicationTeamMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ApplicationTeamMemberUpdateManyArgs>(args: Prisma.SelectSubset<T, ApplicationTeamMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ApplicationTeamMembers and returns the data updated in the database.
     * @param {ApplicationTeamMemberUpdateManyAndReturnArgs} args - Arguments to update many ApplicationTeamMembers.
     * @example
     * // Update many ApplicationTeamMembers
     * const applicationTeamMember = await prisma.applicationTeamMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ApplicationTeamMembers and only return the `id`
     * const applicationTeamMemberWithIdOnly = await prisma.applicationTeamMember.updateManyAndReturn({
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
    updateManyAndReturn<T extends ApplicationTeamMemberUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ApplicationTeamMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApplicationTeamMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ApplicationTeamMember.
     * @param {ApplicationTeamMemberUpsertArgs} args - Arguments to update or create a ApplicationTeamMember.
     * @example
     * // Update or create a ApplicationTeamMember
     * const applicationTeamMember = await prisma.applicationTeamMember.upsert({
     *   create: {
     *     // ... data to create a ApplicationTeamMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApplicationTeamMember we want to update
     *   }
     * })
     */
    upsert<T extends ApplicationTeamMemberUpsertArgs>(args: Prisma.SelectSubset<T, ApplicationTeamMemberUpsertArgs<ExtArgs>>): Prisma.Prisma__ApplicationTeamMemberClient<runtime.Types.Result.GetResult<Prisma.$ApplicationTeamMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ApplicationTeamMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationTeamMemberCountArgs} args - Arguments to filter ApplicationTeamMembers to count.
     * @example
     * // Count the number of ApplicationTeamMembers
     * const count = await prisma.applicationTeamMember.count({
     *   where: {
     *     // ... the filter for the ApplicationTeamMembers we want to count
     *   }
     * })
    **/
    count<T extends ApplicationTeamMemberCountArgs>(args?: Prisma.Subset<T, ApplicationTeamMemberCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ApplicationTeamMemberCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ApplicationTeamMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationTeamMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApplicationTeamMemberAggregateArgs>(args: Prisma.Subset<T, ApplicationTeamMemberAggregateArgs>): Prisma.PrismaPromise<GetApplicationTeamMemberAggregateType<T>>;
    /**
     * Group by ApplicationTeamMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationTeamMemberGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ApplicationTeamMemberGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ApplicationTeamMemberGroupByArgs['orderBy'];
    } : {
        orderBy?: ApplicationTeamMemberGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ApplicationTeamMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationTeamMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ApplicationTeamMember model
     */
    readonly fields: ApplicationTeamMemberFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ApplicationTeamMember.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ApplicationTeamMemberClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    application<T extends Prisma.ApplicationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ApplicationDefaultArgs<ExtArgs>>): Prisma.Prisma__ApplicationClient<runtime.Types.Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the ApplicationTeamMember model
 */
export interface ApplicationTeamMemberFieldRefs {
    readonly id: Prisma.FieldRef<"ApplicationTeamMember", 'String'>;
    readonly applicationId: Prisma.FieldRef<"ApplicationTeamMember", 'String'>;
    readonly fullName: Prisma.FieldRef<"ApplicationTeamMember", 'String'>;
    readonly role: Prisma.FieldRef<"ApplicationTeamMember", 'String'>;
    readonly linkedInUrl: Prisma.FieldRef<"ApplicationTeamMember", 'String'>;
    readonly background: Prisma.FieldRef<"ApplicationTeamMember", 'String'>;
    readonly isPrimary: Prisma.FieldRef<"ApplicationTeamMember", 'Boolean'>;
    readonly sortOrder: Prisma.FieldRef<"ApplicationTeamMember", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"ApplicationTeamMember", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ApplicationTeamMember", 'DateTime'>;
}
/**
 * ApplicationTeamMember findUnique
 */
export type ApplicationTeamMemberFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ApplicationTeamMember to fetch.
     */
    where: Prisma.ApplicationTeamMemberWhereUniqueInput;
};
/**
 * ApplicationTeamMember findUniqueOrThrow
 */
export type ApplicationTeamMemberFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ApplicationTeamMember to fetch.
     */
    where: Prisma.ApplicationTeamMemberWhereUniqueInput;
};
/**
 * ApplicationTeamMember findFirst
 */
export type ApplicationTeamMemberFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ApplicationTeamMember to fetch.
     */
    where?: Prisma.ApplicationTeamMemberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ApplicationTeamMembers to fetch.
     */
    orderBy?: Prisma.ApplicationTeamMemberOrderByWithRelationInput | Prisma.ApplicationTeamMemberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ApplicationTeamMembers.
     */
    cursor?: Prisma.ApplicationTeamMemberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ApplicationTeamMembers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ApplicationTeamMembers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ApplicationTeamMembers.
     */
    distinct?: Prisma.ApplicationTeamMemberScalarFieldEnum | Prisma.ApplicationTeamMemberScalarFieldEnum[];
};
/**
 * ApplicationTeamMember findFirstOrThrow
 */
export type ApplicationTeamMemberFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ApplicationTeamMember to fetch.
     */
    where?: Prisma.ApplicationTeamMemberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ApplicationTeamMembers to fetch.
     */
    orderBy?: Prisma.ApplicationTeamMemberOrderByWithRelationInput | Prisma.ApplicationTeamMemberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ApplicationTeamMembers.
     */
    cursor?: Prisma.ApplicationTeamMemberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ApplicationTeamMembers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ApplicationTeamMembers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ApplicationTeamMembers.
     */
    distinct?: Prisma.ApplicationTeamMemberScalarFieldEnum | Prisma.ApplicationTeamMemberScalarFieldEnum[];
};
/**
 * ApplicationTeamMember findMany
 */
export type ApplicationTeamMemberFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ApplicationTeamMembers to fetch.
     */
    where?: Prisma.ApplicationTeamMemberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ApplicationTeamMembers to fetch.
     */
    orderBy?: Prisma.ApplicationTeamMemberOrderByWithRelationInput | Prisma.ApplicationTeamMemberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ApplicationTeamMembers.
     */
    cursor?: Prisma.ApplicationTeamMemberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ApplicationTeamMembers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ApplicationTeamMembers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ApplicationTeamMembers.
     */
    distinct?: Prisma.ApplicationTeamMemberScalarFieldEnum | Prisma.ApplicationTeamMemberScalarFieldEnum[];
};
/**
 * ApplicationTeamMember create
 */
export type ApplicationTeamMemberCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a ApplicationTeamMember.
     */
    data: Prisma.XOR<Prisma.ApplicationTeamMemberCreateInput, Prisma.ApplicationTeamMemberUncheckedCreateInput>;
};
/**
 * ApplicationTeamMember createMany
 */
export type ApplicationTeamMemberCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApplicationTeamMembers.
     */
    data: Prisma.ApplicationTeamMemberCreateManyInput | Prisma.ApplicationTeamMemberCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ApplicationTeamMember createManyAndReturn
 */
export type ApplicationTeamMemberCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationTeamMember
     */
    select?: Prisma.ApplicationTeamMemberSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ApplicationTeamMember
     */
    omit?: Prisma.ApplicationTeamMemberOmit<ExtArgs> | null;
    /**
     * The data used to create many ApplicationTeamMembers.
     */
    data: Prisma.ApplicationTeamMemberCreateManyInput | Prisma.ApplicationTeamMemberCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApplicationTeamMemberIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ApplicationTeamMember update
 */
export type ApplicationTeamMemberUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a ApplicationTeamMember.
     */
    data: Prisma.XOR<Prisma.ApplicationTeamMemberUpdateInput, Prisma.ApplicationTeamMemberUncheckedUpdateInput>;
    /**
     * Choose, which ApplicationTeamMember to update.
     */
    where: Prisma.ApplicationTeamMemberWhereUniqueInput;
};
/**
 * ApplicationTeamMember updateMany
 */
export type ApplicationTeamMemberUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ApplicationTeamMembers.
     */
    data: Prisma.XOR<Prisma.ApplicationTeamMemberUpdateManyMutationInput, Prisma.ApplicationTeamMemberUncheckedUpdateManyInput>;
    /**
     * Filter which ApplicationTeamMembers to update
     */
    where?: Prisma.ApplicationTeamMemberWhereInput;
    /**
     * Limit how many ApplicationTeamMembers to update.
     */
    limit?: number;
};
/**
 * ApplicationTeamMember updateManyAndReturn
 */
export type ApplicationTeamMemberUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationTeamMember
     */
    select?: Prisma.ApplicationTeamMemberSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ApplicationTeamMember
     */
    omit?: Prisma.ApplicationTeamMemberOmit<ExtArgs> | null;
    /**
     * The data used to update ApplicationTeamMembers.
     */
    data: Prisma.XOR<Prisma.ApplicationTeamMemberUpdateManyMutationInput, Prisma.ApplicationTeamMemberUncheckedUpdateManyInput>;
    /**
     * Filter which ApplicationTeamMembers to update
     */
    where?: Prisma.ApplicationTeamMemberWhereInput;
    /**
     * Limit how many ApplicationTeamMembers to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApplicationTeamMemberIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ApplicationTeamMember upsert
 */
export type ApplicationTeamMemberUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the ApplicationTeamMember to update in case it exists.
     */
    where: Prisma.ApplicationTeamMemberWhereUniqueInput;
    /**
     * In case the ApplicationTeamMember found by the `where` argument doesn't exist, create a new ApplicationTeamMember with this data.
     */
    create: Prisma.XOR<Prisma.ApplicationTeamMemberCreateInput, Prisma.ApplicationTeamMemberUncheckedCreateInput>;
    /**
     * In case the ApplicationTeamMember was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ApplicationTeamMemberUpdateInput, Prisma.ApplicationTeamMemberUncheckedUpdateInput>;
};
/**
 * ApplicationTeamMember delete
 */
export type ApplicationTeamMemberDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which ApplicationTeamMember to delete.
     */
    where: Prisma.ApplicationTeamMemberWhereUniqueInput;
};
/**
 * ApplicationTeamMember deleteMany
 */
export type ApplicationTeamMemberDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ApplicationTeamMembers to delete
     */
    where?: Prisma.ApplicationTeamMemberWhereInput;
    /**
     * Limit how many ApplicationTeamMembers to delete.
     */
    limit?: number;
};
/**
 * ApplicationTeamMember without action
 */
export type ApplicationTeamMemberDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
