import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model EmailDelivery
 *
 */
export type EmailDeliveryModel = runtime.Types.Result.DefaultSelection<Prisma.$EmailDeliveryPayload>;
export type AggregateEmailDelivery = {
    _count: EmailDeliveryCountAggregateOutputType | null;
    _avg: EmailDeliveryAvgAggregateOutputType | null;
    _sum: EmailDeliverySumAggregateOutputType | null;
    _min: EmailDeliveryMinAggregateOutputType | null;
    _max: EmailDeliveryMaxAggregateOutputType | null;
};
export type EmailDeliveryAvgAggregateOutputType = {
    attempts: number | null;
};
export type EmailDeliverySumAggregateOutputType = {
    attempts: number | null;
};
export type EmailDeliveryMinAggregateOutputType = {
    id: string | null;
    campaignId: string | null;
    applicationId: string | null;
    recipientEmail: string | null;
    status: $Enums.EmailDeliveryStatus | null;
    jobId: string | null;
    sentAt: Date | null;
    failedAt: Date | null;
    errorMessage: string | null;
    attempts: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type EmailDeliveryMaxAggregateOutputType = {
    id: string | null;
    campaignId: string | null;
    applicationId: string | null;
    recipientEmail: string | null;
    status: $Enums.EmailDeliveryStatus | null;
    jobId: string | null;
    sentAt: Date | null;
    failedAt: Date | null;
    errorMessage: string | null;
    attempts: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type EmailDeliveryCountAggregateOutputType = {
    id: number;
    campaignId: number;
    applicationId: number;
    recipientEmail: number;
    status: number;
    jobId: number;
    sentAt: number;
    failedAt: number;
    errorMessage: number;
    attempts: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type EmailDeliveryAvgAggregateInputType = {
    attempts?: true;
};
export type EmailDeliverySumAggregateInputType = {
    attempts?: true;
};
export type EmailDeliveryMinAggregateInputType = {
    id?: true;
    campaignId?: true;
    applicationId?: true;
    recipientEmail?: true;
    status?: true;
    jobId?: true;
    sentAt?: true;
    failedAt?: true;
    errorMessage?: true;
    attempts?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type EmailDeliveryMaxAggregateInputType = {
    id?: true;
    campaignId?: true;
    applicationId?: true;
    recipientEmail?: true;
    status?: true;
    jobId?: true;
    sentAt?: true;
    failedAt?: true;
    errorMessage?: true;
    attempts?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type EmailDeliveryCountAggregateInputType = {
    id?: true;
    campaignId?: true;
    applicationId?: true;
    recipientEmail?: true;
    status?: true;
    jobId?: true;
    sentAt?: true;
    failedAt?: true;
    errorMessage?: true;
    attempts?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type EmailDeliveryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which EmailDelivery to aggregate.
     */
    where?: Prisma.EmailDeliveryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EmailDeliveries to fetch.
     */
    orderBy?: Prisma.EmailDeliveryOrderByWithRelationInput | Prisma.EmailDeliveryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.EmailDeliveryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EmailDeliveries from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EmailDeliveries.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned EmailDeliveries
    **/
    _count?: true | EmailDeliveryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: EmailDeliveryAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: EmailDeliverySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: EmailDeliveryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: EmailDeliveryMaxAggregateInputType;
};
export type GetEmailDeliveryAggregateType<T extends EmailDeliveryAggregateArgs> = {
    [P in keyof T & keyof AggregateEmailDelivery]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEmailDelivery[P]> : Prisma.GetScalarType<T[P], AggregateEmailDelivery[P]>;
};
export type EmailDeliveryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmailDeliveryWhereInput;
    orderBy?: Prisma.EmailDeliveryOrderByWithAggregationInput | Prisma.EmailDeliveryOrderByWithAggregationInput[];
    by: Prisma.EmailDeliveryScalarFieldEnum[] | Prisma.EmailDeliveryScalarFieldEnum;
    having?: Prisma.EmailDeliveryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EmailDeliveryCountAggregateInputType | true;
    _avg?: EmailDeliveryAvgAggregateInputType;
    _sum?: EmailDeliverySumAggregateInputType;
    _min?: EmailDeliveryMinAggregateInputType;
    _max?: EmailDeliveryMaxAggregateInputType;
};
export type EmailDeliveryGroupByOutputType = {
    id: string;
    campaignId: string;
    applicationId: string;
    recipientEmail: string;
    status: $Enums.EmailDeliveryStatus;
    jobId: string | null;
    sentAt: Date | null;
    failedAt: Date | null;
    errorMessage: string | null;
    attempts: number;
    createdAt: Date;
    updatedAt: Date;
    _count: EmailDeliveryCountAggregateOutputType | null;
    _avg: EmailDeliveryAvgAggregateOutputType | null;
    _sum: EmailDeliverySumAggregateOutputType | null;
    _min: EmailDeliveryMinAggregateOutputType | null;
    _max: EmailDeliveryMaxAggregateOutputType | null;
};
export type GetEmailDeliveryGroupByPayload<T extends EmailDeliveryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EmailDeliveryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EmailDeliveryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EmailDeliveryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EmailDeliveryGroupByOutputType[P]>;
}>>;
export type EmailDeliveryWhereInput = {
    AND?: Prisma.EmailDeliveryWhereInput | Prisma.EmailDeliveryWhereInput[];
    OR?: Prisma.EmailDeliveryWhereInput[];
    NOT?: Prisma.EmailDeliveryWhereInput | Prisma.EmailDeliveryWhereInput[];
    id?: Prisma.StringFilter<"EmailDelivery"> | string;
    campaignId?: Prisma.StringFilter<"EmailDelivery"> | string;
    applicationId?: Prisma.StringFilter<"EmailDelivery"> | string;
    recipientEmail?: Prisma.StringFilter<"EmailDelivery"> | string;
    status?: Prisma.EnumEmailDeliveryStatusFilter<"EmailDelivery"> | $Enums.EmailDeliveryStatus;
    jobId?: Prisma.StringNullableFilter<"EmailDelivery"> | string | null;
    sentAt?: Prisma.DateTimeNullableFilter<"EmailDelivery"> | Date | string | null;
    failedAt?: Prisma.DateTimeNullableFilter<"EmailDelivery"> | Date | string | null;
    errorMessage?: Prisma.StringNullableFilter<"EmailDelivery"> | string | null;
    attempts?: Prisma.IntFilter<"EmailDelivery"> | number;
    createdAt?: Prisma.DateTimeFilter<"EmailDelivery"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"EmailDelivery"> | Date | string;
    campaign?: Prisma.XOR<Prisma.EmailCampaignScalarRelationFilter, Prisma.EmailCampaignWhereInput>;
    application?: Prisma.XOR<Prisma.ApplicationScalarRelationFilter, Prisma.ApplicationWhereInput>;
};
export type EmailDeliveryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    campaignId?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
    recipientEmail?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    jobId?: Prisma.SortOrderInput | Prisma.SortOrder;
    sentAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    failedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    errorMessage?: Prisma.SortOrderInput | Prisma.SortOrder;
    attempts?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    campaign?: Prisma.EmailCampaignOrderByWithRelationInput;
    application?: Prisma.ApplicationOrderByWithRelationInput;
};
export type EmailDeliveryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    jobId?: string;
    AND?: Prisma.EmailDeliveryWhereInput | Prisma.EmailDeliveryWhereInput[];
    OR?: Prisma.EmailDeliveryWhereInput[];
    NOT?: Prisma.EmailDeliveryWhereInput | Prisma.EmailDeliveryWhereInput[];
    campaignId?: Prisma.StringFilter<"EmailDelivery"> | string;
    applicationId?: Prisma.StringFilter<"EmailDelivery"> | string;
    recipientEmail?: Prisma.StringFilter<"EmailDelivery"> | string;
    status?: Prisma.EnumEmailDeliveryStatusFilter<"EmailDelivery"> | $Enums.EmailDeliveryStatus;
    sentAt?: Prisma.DateTimeNullableFilter<"EmailDelivery"> | Date | string | null;
    failedAt?: Prisma.DateTimeNullableFilter<"EmailDelivery"> | Date | string | null;
    errorMessage?: Prisma.StringNullableFilter<"EmailDelivery"> | string | null;
    attempts?: Prisma.IntFilter<"EmailDelivery"> | number;
    createdAt?: Prisma.DateTimeFilter<"EmailDelivery"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"EmailDelivery"> | Date | string;
    campaign?: Prisma.XOR<Prisma.EmailCampaignScalarRelationFilter, Prisma.EmailCampaignWhereInput>;
    application?: Prisma.XOR<Prisma.ApplicationScalarRelationFilter, Prisma.ApplicationWhereInput>;
}, "id" | "jobId">;
export type EmailDeliveryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    campaignId?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
    recipientEmail?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    jobId?: Prisma.SortOrderInput | Prisma.SortOrder;
    sentAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    failedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    errorMessage?: Prisma.SortOrderInput | Prisma.SortOrder;
    attempts?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.EmailDeliveryCountOrderByAggregateInput;
    _avg?: Prisma.EmailDeliveryAvgOrderByAggregateInput;
    _max?: Prisma.EmailDeliveryMaxOrderByAggregateInput;
    _min?: Prisma.EmailDeliveryMinOrderByAggregateInput;
    _sum?: Prisma.EmailDeliverySumOrderByAggregateInput;
};
export type EmailDeliveryScalarWhereWithAggregatesInput = {
    AND?: Prisma.EmailDeliveryScalarWhereWithAggregatesInput | Prisma.EmailDeliveryScalarWhereWithAggregatesInput[];
    OR?: Prisma.EmailDeliveryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EmailDeliveryScalarWhereWithAggregatesInput | Prisma.EmailDeliveryScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"EmailDelivery"> | string;
    campaignId?: Prisma.StringWithAggregatesFilter<"EmailDelivery"> | string;
    applicationId?: Prisma.StringWithAggregatesFilter<"EmailDelivery"> | string;
    recipientEmail?: Prisma.StringWithAggregatesFilter<"EmailDelivery"> | string;
    status?: Prisma.EnumEmailDeliveryStatusWithAggregatesFilter<"EmailDelivery"> | $Enums.EmailDeliveryStatus;
    jobId?: Prisma.StringNullableWithAggregatesFilter<"EmailDelivery"> | string | null;
    sentAt?: Prisma.DateTimeNullableWithAggregatesFilter<"EmailDelivery"> | Date | string | null;
    failedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"EmailDelivery"> | Date | string | null;
    errorMessage?: Prisma.StringNullableWithAggregatesFilter<"EmailDelivery"> | string | null;
    attempts?: Prisma.IntWithAggregatesFilter<"EmailDelivery"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"EmailDelivery"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"EmailDelivery"> | Date | string;
};
export type EmailDeliveryCreateInput = {
    id?: string;
    recipientEmail: string;
    status?: $Enums.EmailDeliveryStatus;
    jobId?: string | null;
    sentAt?: Date | string | null;
    failedAt?: Date | string | null;
    errorMessage?: string | null;
    attempts?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    campaign: Prisma.EmailCampaignCreateNestedOneWithoutDeliveriesInput;
    application: Prisma.ApplicationCreateNestedOneWithoutEmailDeliveriesInput;
};
export type EmailDeliveryUncheckedCreateInput = {
    id?: string;
    campaignId: string;
    applicationId: string;
    recipientEmail: string;
    status?: $Enums.EmailDeliveryStatus;
    jobId?: string | null;
    sentAt?: Date | string | null;
    failedAt?: Date | string | null;
    errorMessage?: string | null;
    attempts?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EmailDeliveryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    recipientEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumEmailDeliveryStatusFieldUpdateOperationsInput | $Enums.EmailDeliveryStatus;
    jobId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attempts?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    campaign?: Prisma.EmailCampaignUpdateOneRequiredWithoutDeliveriesNestedInput;
    application?: Prisma.ApplicationUpdateOneRequiredWithoutEmailDeliveriesNestedInput;
};
export type EmailDeliveryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    campaignId?: Prisma.StringFieldUpdateOperationsInput | string;
    applicationId?: Prisma.StringFieldUpdateOperationsInput | string;
    recipientEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumEmailDeliveryStatusFieldUpdateOperationsInput | $Enums.EmailDeliveryStatus;
    jobId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attempts?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmailDeliveryCreateManyInput = {
    id?: string;
    campaignId: string;
    applicationId: string;
    recipientEmail: string;
    status?: $Enums.EmailDeliveryStatus;
    jobId?: string | null;
    sentAt?: Date | string | null;
    failedAt?: Date | string | null;
    errorMessage?: string | null;
    attempts?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EmailDeliveryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    recipientEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumEmailDeliveryStatusFieldUpdateOperationsInput | $Enums.EmailDeliveryStatus;
    jobId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attempts?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmailDeliveryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    campaignId?: Prisma.StringFieldUpdateOperationsInput | string;
    applicationId?: Prisma.StringFieldUpdateOperationsInput | string;
    recipientEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumEmailDeliveryStatusFieldUpdateOperationsInput | $Enums.EmailDeliveryStatus;
    jobId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attempts?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmailDeliveryListRelationFilter = {
    every?: Prisma.EmailDeliveryWhereInput;
    some?: Prisma.EmailDeliveryWhereInput;
    none?: Prisma.EmailDeliveryWhereInput;
};
export type EmailDeliveryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EmailDeliveryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    campaignId?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
    recipientEmail?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    jobId?: Prisma.SortOrder;
    sentAt?: Prisma.SortOrder;
    failedAt?: Prisma.SortOrder;
    errorMessage?: Prisma.SortOrder;
    attempts?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EmailDeliveryAvgOrderByAggregateInput = {
    attempts?: Prisma.SortOrder;
};
export type EmailDeliveryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    campaignId?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
    recipientEmail?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    jobId?: Prisma.SortOrder;
    sentAt?: Prisma.SortOrder;
    failedAt?: Prisma.SortOrder;
    errorMessage?: Prisma.SortOrder;
    attempts?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EmailDeliveryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    campaignId?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
    recipientEmail?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    jobId?: Prisma.SortOrder;
    sentAt?: Prisma.SortOrder;
    failedAt?: Prisma.SortOrder;
    errorMessage?: Prisma.SortOrder;
    attempts?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EmailDeliverySumOrderByAggregateInput = {
    attempts?: Prisma.SortOrder;
};
export type EmailDeliveryCreateNestedManyWithoutApplicationInput = {
    create?: Prisma.XOR<Prisma.EmailDeliveryCreateWithoutApplicationInput, Prisma.EmailDeliveryUncheckedCreateWithoutApplicationInput> | Prisma.EmailDeliveryCreateWithoutApplicationInput[] | Prisma.EmailDeliveryUncheckedCreateWithoutApplicationInput[];
    connectOrCreate?: Prisma.EmailDeliveryCreateOrConnectWithoutApplicationInput | Prisma.EmailDeliveryCreateOrConnectWithoutApplicationInput[];
    createMany?: Prisma.EmailDeliveryCreateManyApplicationInputEnvelope;
    connect?: Prisma.EmailDeliveryWhereUniqueInput | Prisma.EmailDeliveryWhereUniqueInput[];
};
export type EmailDeliveryUncheckedCreateNestedManyWithoutApplicationInput = {
    create?: Prisma.XOR<Prisma.EmailDeliveryCreateWithoutApplicationInput, Prisma.EmailDeliveryUncheckedCreateWithoutApplicationInput> | Prisma.EmailDeliveryCreateWithoutApplicationInput[] | Prisma.EmailDeliveryUncheckedCreateWithoutApplicationInput[];
    connectOrCreate?: Prisma.EmailDeliveryCreateOrConnectWithoutApplicationInput | Prisma.EmailDeliveryCreateOrConnectWithoutApplicationInput[];
    createMany?: Prisma.EmailDeliveryCreateManyApplicationInputEnvelope;
    connect?: Prisma.EmailDeliveryWhereUniqueInput | Prisma.EmailDeliveryWhereUniqueInput[];
};
export type EmailDeliveryUpdateManyWithoutApplicationNestedInput = {
    create?: Prisma.XOR<Prisma.EmailDeliveryCreateWithoutApplicationInput, Prisma.EmailDeliveryUncheckedCreateWithoutApplicationInput> | Prisma.EmailDeliveryCreateWithoutApplicationInput[] | Prisma.EmailDeliveryUncheckedCreateWithoutApplicationInput[];
    connectOrCreate?: Prisma.EmailDeliveryCreateOrConnectWithoutApplicationInput | Prisma.EmailDeliveryCreateOrConnectWithoutApplicationInput[];
    upsert?: Prisma.EmailDeliveryUpsertWithWhereUniqueWithoutApplicationInput | Prisma.EmailDeliveryUpsertWithWhereUniqueWithoutApplicationInput[];
    createMany?: Prisma.EmailDeliveryCreateManyApplicationInputEnvelope;
    set?: Prisma.EmailDeliveryWhereUniqueInput | Prisma.EmailDeliveryWhereUniqueInput[];
    disconnect?: Prisma.EmailDeliveryWhereUniqueInput | Prisma.EmailDeliveryWhereUniqueInput[];
    delete?: Prisma.EmailDeliveryWhereUniqueInput | Prisma.EmailDeliveryWhereUniqueInput[];
    connect?: Prisma.EmailDeliveryWhereUniqueInput | Prisma.EmailDeliveryWhereUniqueInput[];
    update?: Prisma.EmailDeliveryUpdateWithWhereUniqueWithoutApplicationInput | Prisma.EmailDeliveryUpdateWithWhereUniqueWithoutApplicationInput[];
    updateMany?: Prisma.EmailDeliveryUpdateManyWithWhereWithoutApplicationInput | Prisma.EmailDeliveryUpdateManyWithWhereWithoutApplicationInput[];
    deleteMany?: Prisma.EmailDeliveryScalarWhereInput | Prisma.EmailDeliveryScalarWhereInput[];
};
export type EmailDeliveryUncheckedUpdateManyWithoutApplicationNestedInput = {
    create?: Prisma.XOR<Prisma.EmailDeliveryCreateWithoutApplicationInput, Prisma.EmailDeliveryUncheckedCreateWithoutApplicationInput> | Prisma.EmailDeliveryCreateWithoutApplicationInput[] | Prisma.EmailDeliveryUncheckedCreateWithoutApplicationInput[];
    connectOrCreate?: Prisma.EmailDeliveryCreateOrConnectWithoutApplicationInput | Prisma.EmailDeliveryCreateOrConnectWithoutApplicationInput[];
    upsert?: Prisma.EmailDeliveryUpsertWithWhereUniqueWithoutApplicationInput | Prisma.EmailDeliveryUpsertWithWhereUniqueWithoutApplicationInput[];
    createMany?: Prisma.EmailDeliveryCreateManyApplicationInputEnvelope;
    set?: Prisma.EmailDeliveryWhereUniqueInput | Prisma.EmailDeliveryWhereUniqueInput[];
    disconnect?: Prisma.EmailDeliveryWhereUniqueInput | Prisma.EmailDeliveryWhereUniqueInput[];
    delete?: Prisma.EmailDeliveryWhereUniqueInput | Prisma.EmailDeliveryWhereUniqueInput[];
    connect?: Prisma.EmailDeliveryWhereUniqueInput | Prisma.EmailDeliveryWhereUniqueInput[];
    update?: Prisma.EmailDeliveryUpdateWithWhereUniqueWithoutApplicationInput | Prisma.EmailDeliveryUpdateWithWhereUniqueWithoutApplicationInput[];
    updateMany?: Prisma.EmailDeliveryUpdateManyWithWhereWithoutApplicationInput | Prisma.EmailDeliveryUpdateManyWithWhereWithoutApplicationInput[];
    deleteMany?: Prisma.EmailDeliveryScalarWhereInput | Prisma.EmailDeliveryScalarWhereInput[];
};
export type EmailDeliveryCreateNestedManyWithoutCampaignInput = {
    create?: Prisma.XOR<Prisma.EmailDeliveryCreateWithoutCampaignInput, Prisma.EmailDeliveryUncheckedCreateWithoutCampaignInput> | Prisma.EmailDeliveryCreateWithoutCampaignInput[] | Prisma.EmailDeliveryUncheckedCreateWithoutCampaignInput[];
    connectOrCreate?: Prisma.EmailDeliveryCreateOrConnectWithoutCampaignInput | Prisma.EmailDeliveryCreateOrConnectWithoutCampaignInput[];
    createMany?: Prisma.EmailDeliveryCreateManyCampaignInputEnvelope;
    connect?: Prisma.EmailDeliveryWhereUniqueInput | Prisma.EmailDeliveryWhereUniqueInput[];
};
export type EmailDeliveryUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: Prisma.XOR<Prisma.EmailDeliveryCreateWithoutCampaignInput, Prisma.EmailDeliveryUncheckedCreateWithoutCampaignInput> | Prisma.EmailDeliveryCreateWithoutCampaignInput[] | Prisma.EmailDeliveryUncheckedCreateWithoutCampaignInput[];
    connectOrCreate?: Prisma.EmailDeliveryCreateOrConnectWithoutCampaignInput | Prisma.EmailDeliveryCreateOrConnectWithoutCampaignInput[];
    createMany?: Prisma.EmailDeliveryCreateManyCampaignInputEnvelope;
    connect?: Prisma.EmailDeliveryWhereUniqueInput | Prisma.EmailDeliveryWhereUniqueInput[];
};
export type EmailDeliveryUpdateManyWithoutCampaignNestedInput = {
    create?: Prisma.XOR<Prisma.EmailDeliveryCreateWithoutCampaignInput, Prisma.EmailDeliveryUncheckedCreateWithoutCampaignInput> | Prisma.EmailDeliveryCreateWithoutCampaignInput[] | Prisma.EmailDeliveryUncheckedCreateWithoutCampaignInput[];
    connectOrCreate?: Prisma.EmailDeliveryCreateOrConnectWithoutCampaignInput | Prisma.EmailDeliveryCreateOrConnectWithoutCampaignInput[];
    upsert?: Prisma.EmailDeliveryUpsertWithWhereUniqueWithoutCampaignInput | Prisma.EmailDeliveryUpsertWithWhereUniqueWithoutCampaignInput[];
    createMany?: Prisma.EmailDeliveryCreateManyCampaignInputEnvelope;
    set?: Prisma.EmailDeliveryWhereUniqueInput | Prisma.EmailDeliveryWhereUniqueInput[];
    disconnect?: Prisma.EmailDeliveryWhereUniqueInput | Prisma.EmailDeliveryWhereUniqueInput[];
    delete?: Prisma.EmailDeliveryWhereUniqueInput | Prisma.EmailDeliveryWhereUniqueInput[];
    connect?: Prisma.EmailDeliveryWhereUniqueInput | Prisma.EmailDeliveryWhereUniqueInput[];
    update?: Prisma.EmailDeliveryUpdateWithWhereUniqueWithoutCampaignInput | Prisma.EmailDeliveryUpdateWithWhereUniqueWithoutCampaignInput[];
    updateMany?: Prisma.EmailDeliveryUpdateManyWithWhereWithoutCampaignInput | Prisma.EmailDeliveryUpdateManyWithWhereWithoutCampaignInput[];
    deleteMany?: Prisma.EmailDeliveryScalarWhereInput | Prisma.EmailDeliveryScalarWhereInput[];
};
export type EmailDeliveryUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: Prisma.XOR<Prisma.EmailDeliveryCreateWithoutCampaignInput, Prisma.EmailDeliveryUncheckedCreateWithoutCampaignInput> | Prisma.EmailDeliveryCreateWithoutCampaignInput[] | Prisma.EmailDeliveryUncheckedCreateWithoutCampaignInput[];
    connectOrCreate?: Prisma.EmailDeliveryCreateOrConnectWithoutCampaignInput | Prisma.EmailDeliveryCreateOrConnectWithoutCampaignInput[];
    upsert?: Prisma.EmailDeliveryUpsertWithWhereUniqueWithoutCampaignInput | Prisma.EmailDeliveryUpsertWithWhereUniqueWithoutCampaignInput[];
    createMany?: Prisma.EmailDeliveryCreateManyCampaignInputEnvelope;
    set?: Prisma.EmailDeliveryWhereUniqueInput | Prisma.EmailDeliveryWhereUniqueInput[];
    disconnect?: Prisma.EmailDeliveryWhereUniqueInput | Prisma.EmailDeliveryWhereUniqueInput[];
    delete?: Prisma.EmailDeliveryWhereUniqueInput | Prisma.EmailDeliveryWhereUniqueInput[];
    connect?: Prisma.EmailDeliveryWhereUniqueInput | Prisma.EmailDeliveryWhereUniqueInput[];
    update?: Prisma.EmailDeliveryUpdateWithWhereUniqueWithoutCampaignInput | Prisma.EmailDeliveryUpdateWithWhereUniqueWithoutCampaignInput[];
    updateMany?: Prisma.EmailDeliveryUpdateManyWithWhereWithoutCampaignInput | Prisma.EmailDeliveryUpdateManyWithWhereWithoutCampaignInput[];
    deleteMany?: Prisma.EmailDeliveryScalarWhereInput | Prisma.EmailDeliveryScalarWhereInput[];
};
export type EnumEmailDeliveryStatusFieldUpdateOperationsInput = {
    set?: $Enums.EmailDeliveryStatus;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type EmailDeliveryCreateWithoutApplicationInput = {
    id?: string;
    recipientEmail: string;
    status?: $Enums.EmailDeliveryStatus;
    jobId?: string | null;
    sentAt?: Date | string | null;
    failedAt?: Date | string | null;
    errorMessage?: string | null;
    attempts?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    campaign: Prisma.EmailCampaignCreateNestedOneWithoutDeliveriesInput;
};
export type EmailDeliveryUncheckedCreateWithoutApplicationInput = {
    id?: string;
    campaignId: string;
    recipientEmail: string;
    status?: $Enums.EmailDeliveryStatus;
    jobId?: string | null;
    sentAt?: Date | string | null;
    failedAt?: Date | string | null;
    errorMessage?: string | null;
    attempts?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EmailDeliveryCreateOrConnectWithoutApplicationInput = {
    where: Prisma.EmailDeliveryWhereUniqueInput;
    create: Prisma.XOR<Prisma.EmailDeliveryCreateWithoutApplicationInput, Prisma.EmailDeliveryUncheckedCreateWithoutApplicationInput>;
};
export type EmailDeliveryCreateManyApplicationInputEnvelope = {
    data: Prisma.EmailDeliveryCreateManyApplicationInput | Prisma.EmailDeliveryCreateManyApplicationInput[];
    skipDuplicates?: boolean;
};
export type EmailDeliveryUpsertWithWhereUniqueWithoutApplicationInput = {
    where: Prisma.EmailDeliveryWhereUniqueInput;
    update: Prisma.XOR<Prisma.EmailDeliveryUpdateWithoutApplicationInput, Prisma.EmailDeliveryUncheckedUpdateWithoutApplicationInput>;
    create: Prisma.XOR<Prisma.EmailDeliveryCreateWithoutApplicationInput, Prisma.EmailDeliveryUncheckedCreateWithoutApplicationInput>;
};
export type EmailDeliveryUpdateWithWhereUniqueWithoutApplicationInput = {
    where: Prisma.EmailDeliveryWhereUniqueInput;
    data: Prisma.XOR<Prisma.EmailDeliveryUpdateWithoutApplicationInput, Prisma.EmailDeliveryUncheckedUpdateWithoutApplicationInput>;
};
export type EmailDeliveryUpdateManyWithWhereWithoutApplicationInput = {
    where: Prisma.EmailDeliveryScalarWhereInput;
    data: Prisma.XOR<Prisma.EmailDeliveryUpdateManyMutationInput, Prisma.EmailDeliveryUncheckedUpdateManyWithoutApplicationInput>;
};
export type EmailDeliveryScalarWhereInput = {
    AND?: Prisma.EmailDeliveryScalarWhereInput | Prisma.EmailDeliveryScalarWhereInput[];
    OR?: Prisma.EmailDeliveryScalarWhereInput[];
    NOT?: Prisma.EmailDeliveryScalarWhereInput | Prisma.EmailDeliveryScalarWhereInput[];
    id?: Prisma.StringFilter<"EmailDelivery"> | string;
    campaignId?: Prisma.StringFilter<"EmailDelivery"> | string;
    applicationId?: Prisma.StringFilter<"EmailDelivery"> | string;
    recipientEmail?: Prisma.StringFilter<"EmailDelivery"> | string;
    status?: Prisma.EnumEmailDeliveryStatusFilter<"EmailDelivery"> | $Enums.EmailDeliveryStatus;
    jobId?: Prisma.StringNullableFilter<"EmailDelivery"> | string | null;
    sentAt?: Prisma.DateTimeNullableFilter<"EmailDelivery"> | Date | string | null;
    failedAt?: Prisma.DateTimeNullableFilter<"EmailDelivery"> | Date | string | null;
    errorMessage?: Prisma.StringNullableFilter<"EmailDelivery"> | string | null;
    attempts?: Prisma.IntFilter<"EmailDelivery"> | number;
    createdAt?: Prisma.DateTimeFilter<"EmailDelivery"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"EmailDelivery"> | Date | string;
};
export type EmailDeliveryCreateWithoutCampaignInput = {
    id?: string;
    recipientEmail: string;
    status?: $Enums.EmailDeliveryStatus;
    jobId?: string | null;
    sentAt?: Date | string | null;
    failedAt?: Date | string | null;
    errorMessage?: string | null;
    attempts?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    application: Prisma.ApplicationCreateNestedOneWithoutEmailDeliveriesInput;
};
export type EmailDeliveryUncheckedCreateWithoutCampaignInput = {
    id?: string;
    applicationId: string;
    recipientEmail: string;
    status?: $Enums.EmailDeliveryStatus;
    jobId?: string | null;
    sentAt?: Date | string | null;
    failedAt?: Date | string | null;
    errorMessage?: string | null;
    attempts?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EmailDeliveryCreateOrConnectWithoutCampaignInput = {
    where: Prisma.EmailDeliveryWhereUniqueInput;
    create: Prisma.XOR<Prisma.EmailDeliveryCreateWithoutCampaignInput, Prisma.EmailDeliveryUncheckedCreateWithoutCampaignInput>;
};
export type EmailDeliveryCreateManyCampaignInputEnvelope = {
    data: Prisma.EmailDeliveryCreateManyCampaignInput | Prisma.EmailDeliveryCreateManyCampaignInput[];
    skipDuplicates?: boolean;
};
export type EmailDeliveryUpsertWithWhereUniqueWithoutCampaignInput = {
    where: Prisma.EmailDeliveryWhereUniqueInput;
    update: Prisma.XOR<Prisma.EmailDeliveryUpdateWithoutCampaignInput, Prisma.EmailDeliveryUncheckedUpdateWithoutCampaignInput>;
    create: Prisma.XOR<Prisma.EmailDeliveryCreateWithoutCampaignInput, Prisma.EmailDeliveryUncheckedCreateWithoutCampaignInput>;
};
export type EmailDeliveryUpdateWithWhereUniqueWithoutCampaignInput = {
    where: Prisma.EmailDeliveryWhereUniqueInput;
    data: Prisma.XOR<Prisma.EmailDeliveryUpdateWithoutCampaignInput, Prisma.EmailDeliveryUncheckedUpdateWithoutCampaignInput>;
};
export type EmailDeliveryUpdateManyWithWhereWithoutCampaignInput = {
    where: Prisma.EmailDeliveryScalarWhereInput;
    data: Prisma.XOR<Prisma.EmailDeliveryUpdateManyMutationInput, Prisma.EmailDeliveryUncheckedUpdateManyWithoutCampaignInput>;
};
export type EmailDeliveryCreateManyApplicationInput = {
    id?: string;
    campaignId: string;
    recipientEmail: string;
    status?: $Enums.EmailDeliveryStatus;
    jobId?: string | null;
    sentAt?: Date | string | null;
    failedAt?: Date | string | null;
    errorMessage?: string | null;
    attempts?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EmailDeliveryUpdateWithoutApplicationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    recipientEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumEmailDeliveryStatusFieldUpdateOperationsInput | $Enums.EmailDeliveryStatus;
    jobId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attempts?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    campaign?: Prisma.EmailCampaignUpdateOneRequiredWithoutDeliveriesNestedInput;
};
export type EmailDeliveryUncheckedUpdateWithoutApplicationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    campaignId?: Prisma.StringFieldUpdateOperationsInput | string;
    recipientEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumEmailDeliveryStatusFieldUpdateOperationsInput | $Enums.EmailDeliveryStatus;
    jobId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attempts?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmailDeliveryUncheckedUpdateManyWithoutApplicationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    campaignId?: Prisma.StringFieldUpdateOperationsInput | string;
    recipientEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumEmailDeliveryStatusFieldUpdateOperationsInput | $Enums.EmailDeliveryStatus;
    jobId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attempts?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmailDeliveryCreateManyCampaignInput = {
    id?: string;
    applicationId: string;
    recipientEmail: string;
    status?: $Enums.EmailDeliveryStatus;
    jobId?: string | null;
    sentAt?: Date | string | null;
    failedAt?: Date | string | null;
    errorMessage?: string | null;
    attempts?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EmailDeliveryUpdateWithoutCampaignInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    recipientEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumEmailDeliveryStatusFieldUpdateOperationsInput | $Enums.EmailDeliveryStatus;
    jobId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attempts?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    application?: Prisma.ApplicationUpdateOneRequiredWithoutEmailDeliveriesNestedInput;
};
export type EmailDeliveryUncheckedUpdateWithoutCampaignInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    applicationId?: Prisma.StringFieldUpdateOperationsInput | string;
    recipientEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumEmailDeliveryStatusFieldUpdateOperationsInput | $Enums.EmailDeliveryStatus;
    jobId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attempts?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmailDeliveryUncheckedUpdateManyWithoutCampaignInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    applicationId?: Prisma.StringFieldUpdateOperationsInput | string;
    recipientEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumEmailDeliveryStatusFieldUpdateOperationsInput | $Enums.EmailDeliveryStatus;
    jobId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attempts?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmailDeliverySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    campaignId?: boolean;
    applicationId?: boolean;
    recipientEmail?: boolean;
    status?: boolean;
    jobId?: boolean;
    sentAt?: boolean;
    failedAt?: boolean;
    errorMessage?: boolean;
    attempts?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    campaign?: boolean | Prisma.EmailCampaignDefaultArgs<ExtArgs>;
    application?: boolean | Prisma.ApplicationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["emailDelivery"]>;
export type EmailDeliverySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    campaignId?: boolean;
    applicationId?: boolean;
    recipientEmail?: boolean;
    status?: boolean;
    jobId?: boolean;
    sentAt?: boolean;
    failedAt?: boolean;
    errorMessage?: boolean;
    attempts?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    campaign?: boolean | Prisma.EmailCampaignDefaultArgs<ExtArgs>;
    application?: boolean | Prisma.ApplicationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["emailDelivery"]>;
export type EmailDeliverySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    campaignId?: boolean;
    applicationId?: boolean;
    recipientEmail?: boolean;
    status?: boolean;
    jobId?: boolean;
    sentAt?: boolean;
    failedAt?: boolean;
    errorMessage?: boolean;
    attempts?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    campaign?: boolean | Prisma.EmailCampaignDefaultArgs<ExtArgs>;
    application?: boolean | Prisma.ApplicationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["emailDelivery"]>;
export type EmailDeliverySelectScalar = {
    id?: boolean;
    campaignId?: boolean;
    applicationId?: boolean;
    recipientEmail?: boolean;
    status?: boolean;
    jobId?: boolean;
    sentAt?: boolean;
    failedAt?: boolean;
    errorMessage?: boolean;
    attempts?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type EmailDeliveryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "campaignId" | "applicationId" | "recipientEmail" | "status" | "jobId" | "sentAt" | "failedAt" | "errorMessage" | "attempts" | "createdAt" | "updatedAt", ExtArgs["result"]["emailDelivery"]>;
export type EmailDeliveryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    campaign?: boolean | Prisma.EmailCampaignDefaultArgs<ExtArgs>;
    application?: boolean | Prisma.ApplicationDefaultArgs<ExtArgs>;
};
export type EmailDeliveryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    campaign?: boolean | Prisma.EmailCampaignDefaultArgs<ExtArgs>;
    application?: boolean | Prisma.ApplicationDefaultArgs<ExtArgs>;
};
export type EmailDeliveryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    campaign?: boolean | Prisma.EmailCampaignDefaultArgs<ExtArgs>;
    application?: boolean | Prisma.ApplicationDefaultArgs<ExtArgs>;
};
export type $EmailDeliveryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EmailDelivery";
    objects: {
        campaign: Prisma.$EmailCampaignPayload<ExtArgs>;
        application: Prisma.$ApplicationPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        campaignId: string;
        applicationId: string;
        recipientEmail: string;
        status: $Enums.EmailDeliveryStatus;
        jobId: string | null;
        sentAt: Date | null;
        failedAt: Date | null;
        errorMessage: string | null;
        attempts: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["emailDelivery"]>;
    composites: {};
};
export type EmailDeliveryGetPayload<S extends boolean | null | undefined | EmailDeliveryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EmailDeliveryPayload, S>;
export type EmailDeliveryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EmailDeliveryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EmailDeliveryCountAggregateInputType | true;
};
export interface EmailDeliveryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EmailDelivery'];
        meta: {
            name: 'EmailDelivery';
        };
    };
    /**
     * Find zero or one EmailDelivery that matches the filter.
     * @param {EmailDeliveryFindUniqueArgs} args - Arguments to find a EmailDelivery
     * @example
     * // Get one EmailDelivery
     * const emailDelivery = await prisma.emailDelivery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailDeliveryFindUniqueArgs>(args: Prisma.SelectSubset<T, EmailDeliveryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EmailDeliveryClient<runtime.Types.Result.GetResult<Prisma.$EmailDeliveryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one EmailDelivery that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmailDeliveryFindUniqueOrThrowArgs} args - Arguments to find a EmailDelivery
     * @example
     * // Get one EmailDelivery
     * const emailDelivery = await prisma.emailDelivery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailDeliveryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EmailDeliveryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EmailDeliveryClient<runtime.Types.Result.GetResult<Prisma.$EmailDeliveryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first EmailDelivery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailDeliveryFindFirstArgs} args - Arguments to find a EmailDelivery
     * @example
     * // Get one EmailDelivery
     * const emailDelivery = await prisma.emailDelivery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailDeliveryFindFirstArgs>(args?: Prisma.SelectSubset<T, EmailDeliveryFindFirstArgs<ExtArgs>>): Prisma.Prisma__EmailDeliveryClient<runtime.Types.Result.GetResult<Prisma.$EmailDeliveryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first EmailDelivery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailDeliveryFindFirstOrThrowArgs} args - Arguments to find a EmailDelivery
     * @example
     * // Get one EmailDelivery
     * const emailDelivery = await prisma.emailDelivery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailDeliveryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EmailDeliveryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EmailDeliveryClient<runtime.Types.Result.GetResult<Prisma.$EmailDeliveryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more EmailDeliveries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailDeliveryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmailDeliveries
     * const emailDeliveries = await prisma.emailDelivery.findMany()
     *
     * // Get first 10 EmailDeliveries
     * const emailDeliveries = await prisma.emailDelivery.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const emailDeliveryWithIdOnly = await prisma.emailDelivery.findMany({ select: { id: true } })
     *
     */
    findMany<T extends EmailDeliveryFindManyArgs>(args?: Prisma.SelectSubset<T, EmailDeliveryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmailDeliveryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a EmailDelivery.
     * @param {EmailDeliveryCreateArgs} args - Arguments to create a EmailDelivery.
     * @example
     * // Create one EmailDelivery
     * const EmailDelivery = await prisma.emailDelivery.create({
     *   data: {
     *     // ... data to create a EmailDelivery
     *   }
     * })
     *
     */
    create<T extends EmailDeliveryCreateArgs>(args: Prisma.SelectSubset<T, EmailDeliveryCreateArgs<ExtArgs>>): Prisma.Prisma__EmailDeliveryClient<runtime.Types.Result.GetResult<Prisma.$EmailDeliveryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many EmailDeliveries.
     * @param {EmailDeliveryCreateManyArgs} args - Arguments to create many EmailDeliveries.
     * @example
     * // Create many EmailDeliveries
     * const emailDelivery = await prisma.emailDelivery.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends EmailDeliveryCreateManyArgs>(args?: Prisma.SelectSubset<T, EmailDeliveryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many EmailDeliveries and returns the data saved in the database.
     * @param {EmailDeliveryCreateManyAndReturnArgs} args - Arguments to create many EmailDeliveries.
     * @example
     * // Create many EmailDeliveries
     * const emailDelivery = await prisma.emailDelivery.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many EmailDeliveries and only return the `id`
     * const emailDeliveryWithIdOnly = await prisma.emailDelivery.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends EmailDeliveryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EmailDeliveryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmailDeliveryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a EmailDelivery.
     * @param {EmailDeliveryDeleteArgs} args - Arguments to delete one EmailDelivery.
     * @example
     * // Delete one EmailDelivery
     * const EmailDelivery = await prisma.emailDelivery.delete({
     *   where: {
     *     // ... filter to delete one EmailDelivery
     *   }
     * })
     *
     */
    delete<T extends EmailDeliveryDeleteArgs>(args: Prisma.SelectSubset<T, EmailDeliveryDeleteArgs<ExtArgs>>): Prisma.Prisma__EmailDeliveryClient<runtime.Types.Result.GetResult<Prisma.$EmailDeliveryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one EmailDelivery.
     * @param {EmailDeliveryUpdateArgs} args - Arguments to update one EmailDelivery.
     * @example
     * // Update one EmailDelivery
     * const emailDelivery = await prisma.emailDelivery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends EmailDeliveryUpdateArgs>(args: Prisma.SelectSubset<T, EmailDeliveryUpdateArgs<ExtArgs>>): Prisma.Prisma__EmailDeliveryClient<runtime.Types.Result.GetResult<Prisma.$EmailDeliveryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more EmailDeliveries.
     * @param {EmailDeliveryDeleteManyArgs} args - Arguments to filter EmailDeliveries to delete.
     * @example
     * // Delete a few EmailDeliveries
     * const { count } = await prisma.emailDelivery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends EmailDeliveryDeleteManyArgs>(args?: Prisma.SelectSubset<T, EmailDeliveryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more EmailDeliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailDeliveryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmailDeliveries
     * const emailDelivery = await prisma.emailDelivery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends EmailDeliveryUpdateManyArgs>(args: Prisma.SelectSubset<T, EmailDeliveryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more EmailDeliveries and returns the data updated in the database.
     * @param {EmailDeliveryUpdateManyAndReturnArgs} args - Arguments to update many EmailDeliveries.
     * @example
     * // Update many EmailDeliveries
     * const emailDelivery = await prisma.emailDelivery.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more EmailDeliveries and only return the `id`
     * const emailDeliveryWithIdOnly = await prisma.emailDelivery.updateManyAndReturn({
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
    updateManyAndReturn<T extends EmailDeliveryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EmailDeliveryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmailDeliveryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one EmailDelivery.
     * @param {EmailDeliveryUpsertArgs} args - Arguments to update or create a EmailDelivery.
     * @example
     * // Update or create a EmailDelivery
     * const emailDelivery = await prisma.emailDelivery.upsert({
     *   create: {
     *     // ... data to create a EmailDelivery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmailDelivery we want to update
     *   }
     * })
     */
    upsert<T extends EmailDeliveryUpsertArgs>(args: Prisma.SelectSubset<T, EmailDeliveryUpsertArgs<ExtArgs>>): Prisma.Prisma__EmailDeliveryClient<runtime.Types.Result.GetResult<Prisma.$EmailDeliveryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of EmailDeliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailDeliveryCountArgs} args - Arguments to filter EmailDeliveries to count.
     * @example
     * // Count the number of EmailDeliveries
     * const count = await prisma.emailDelivery.count({
     *   where: {
     *     // ... the filter for the EmailDeliveries we want to count
     *   }
     * })
    **/
    count<T extends EmailDeliveryCountArgs>(args?: Prisma.Subset<T, EmailDeliveryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EmailDeliveryCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a EmailDelivery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailDeliveryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmailDeliveryAggregateArgs>(args: Prisma.Subset<T, EmailDeliveryAggregateArgs>): Prisma.PrismaPromise<GetEmailDeliveryAggregateType<T>>;
    /**
     * Group by EmailDelivery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailDeliveryGroupByArgs} args - Group by arguments.
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
    groupBy<T extends EmailDeliveryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EmailDeliveryGroupByArgs['orderBy'];
    } : {
        orderBy?: EmailDeliveryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EmailDeliveryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailDeliveryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the EmailDelivery model
     */
    readonly fields: EmailDeliveryFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for EmailDelivery.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__EmailDeliveryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    campaign<T extends Prisma.EmailCampaignDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EmailCampaignDefaultArgs<ExtArgs>>): Prisma.Prisma__EmailCampaignClient<runtime.Types.Result.GetResult<Prisma.$EmailCampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the EmailDelivery model
 */
export interface EmailDeliveryFieldRefs {
    readonly id: Prisma.FieldRef<"EmailDelivery", 'String'>;
    readonly campaignId: Prisma.FieldRef<"EmailDelivery", 'String'>;
    readonly applicationId: Prisma.FieldRef<"EmailDelivery", 'String'>;
    readonly recipientEmail: Prisma.FieldRef<"EmailDelivery", 'String'>;
    readonly status: Prisma.FieldRef<"EmailDelivery", 'EmailDeliveryStatus'>;
    readonly jobId: Prisma.FieldRef<"EmailDelivery", 'String'>;
    readonly sentAt: Prisma.FieldRef<"EmailDelivery", 'DateTime'>;
    readonly failedAt: Prisma.FieldRef<"EmailDelivery", 'DateTime'>;
    readonly errorMessage: Prisma.FieldRef<"EmailDelivery", 'String'>;
    readonly attempts: Prisma.FieldRef<"EmailDelivery", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"EmailDelivery", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"EmailDelivery", 'DateTime'>;
}
/**
 * EmailDelivery findUnique
 */
export type EmailDeliveryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which EmailDelivery to fetch.
     */
    where: Prisma.EmailDeliveryWhereUniqueInput;
};
/**
 * EmailDelivery findUniqueOrThrow
 */
export type EmailDeliveryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which EmailDelivery to fetch.
     */
    where: Prisma.EmailDeliveryWhereUniqueInput;
};
/**
 * EmailDelivery findFirst
 */
export type EmailDeliveryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which EmailDelivery to fetch.
     */
    where?: Prisma.EmailDeliveryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EmailDeliveries to fetch.
     */
    orderBy?: Prisma.EmailDeliveryOrderByWithRelationInput | Prisma.EmailDeliveryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for EmailDeliveries.
     */
    cursor?: Prisma.EmailDeliveryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EmailDeliveries from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EmailDeliveries.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EmailDeliveries.
     */
    distinct?: Prisma.EmailDeliveryScalarFieldEnum | Prisma.EmailDeliveryScalarFieldEnum[];
};
/**
 * EmailDelivery findFirstOrThrow
 */
export type EmailDeliveryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which EmailDelivery to fetch.
     */
    where?: Prisma.EmailDeliveryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EmailDeliveries to fetch.
     */
    orderBy?: Prisma.EmailDeliveryOrderByWithRelationInput | Prisma.EmailDeliveryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for EmailDeliveries.
     */
    cursor?: Prisma.EmailDeliveryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EmailDeliveries from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EmailDeliveries.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EmailDeliveries.
     */
    distinct?: Prisma.EmailDeliveryScalarFieldEnum | Prisma.EmailDeliveryScalarFieldEnum[];
};
/**
 * EmailDelivery findMany
 */
export type EmailDeliveryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which EmailDeliveries to fetch.
     */
    where?: Prisma.EmailDeliveryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EmailDeliveries to fetch.
     */
    orderBy?: Prisma.EmailDeliveryOrderByWithRelationInput | Prisma.EmailDeliveryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing EmailDeliveries.
     */
    cursor?: Prisma.EmailDeliveryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EmailDeliveries from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EmailDeliveries.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EmailDeliveries.
     */
    distinct?: Prisma.EmailDeliveryScalarFieldEnum | Prisma.EmailDeliveryScalarFieldEnum[];
};
/**
 * EmailDelivery create
 */
export type EmailDeliveryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a EmailDelivery.
     */
    data: Prisma.XOR<Prisma.EmailDeliveryCreateInput, Prisma.EmailDeliveryUncheckedCreateInput>;
};
/**
 * EmailDelivery createMany
 */
export type EmailDeliveryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmailDeliveries.
     */
    data: Prisma.EmailDeliveryCreateManyInput | Prisma.EmailDeliveryCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * EmailDelivery createManyAndReturn
 */
export type EmailDeliveryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailDelivery
     */
    select?: Prisma.EmailDeliverySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the EmailDelivery
     */
    omit?: Prisma.EmailDeliveryOmit<ExtArgs> | null;
    /**
     * The data used to create many EmailDeliveries.
     */
    data: Prisma.EmailDeliveryCreateManyInput | Prisma.EmailDeliveryCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EmailDeliveryIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * EmailDelivery update
 */
export type EmailDeliveryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a EmailDelivery.
     */
    data: Prisma.XOR<Prisma.EmailDeliveryUpdateInput, Prisma.EmailDeliveryUncheckedUpdateInput>;
    /**
     * Choose, which EmailDelivery to update.
     */
    where: Prisma.EmailDeliveryWhereUniqueInput;
};
/**
 * EmailDelivery updateMany
 */
export type EmailDeliveryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update EmailDeliveries.
     */
    data: Prisma.XOR<Prisma.EmailDeliveryUpdateManyMutationInput, Prisma.EmailDeliveryUncheckedUpdateManyInput>;
    /**
     * Filter which EmailDeliveries to update
     */
    where?: Prisma.EmailDeliveryWhereInput;
    /**
     * Limit how many EmailDeliveries to update.
     */
    limit?: number;
};
/**
 * EmailDelivery updateManyAndReturn
 */
export type EmailDeliveryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailDelivery
     */
    select?: Prisma.EmailDeliverySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the EmailDelivery
     */
    omit?: Prisma.EmailDeliveryOmit<ExtArgs> | null;
    /**
     * The data used to update EmailDeliveries.
     */
    data: Prisma.XOR<Prisma.EmailDeliveryUpdateManyMutationInput, Prisma.EmailDeliveryUncheckedUpdateManyInput>;
    /**
     * Filter which EmailDeliveries to update
     */
    where?: Prisma.EmailDeliveryWhereInput;
    /**
     * Limit how many EmailDeliveries to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EmailDeliveryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * EmailDelivery upsert
 */
export type EmailDeliveryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the EmailDelivery to update in case it exists.
     */
    where: Prisma.EmailDeliveryWhereUniqueInput;
    /**
     * In case the EmailDelivery found by the `where` argument doesn't exist, create a new EmailDelivery with this data.
     */
    create: Prisma.XOR<Prisma.EmailDeliveryCreateInput, Prisma.EmailDeliveryUncheckedCreateInput>;
    /**
     * In case the EmailDelivery was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.EmailDeliveryUpdateInput, Prisma.EmailDeliveryUncheckedUpdateInput>;
};
/**
 * EmailDelivery delete
 */
export type EmailDeliveryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which EmailDelivery to delete.
     */
    where: Prisma.EmailDeliveryWhereUniqueInput;
};
/**
 * EmailDelivery deleteMany
 */
export type EmailDeliveryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which EmailDeliveries to delete
     */
    where?: Prisma.EmailDeliveryWhereInput;
    /**
     * Limit how many EmailDeliveries to delete.
     */
    limit?: number;
};
/**
 * EmailDelivery without action
 */
export type EmailDeliveryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
