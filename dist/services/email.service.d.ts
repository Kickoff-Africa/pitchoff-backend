export declare function sendApplicationReceivedEmail(input: {
    to: string;
    startupName: string;
    publicRef: string;
}): Promise<import("resend").CreateEmailResponseSuccess>;
export declare function sendCampaignEmail(input: {
    to: string;
    startupName: string;
    publicRef: string;
    subject: string;
    htmlBody: string;
}): Promise<import("resend").CreateEmailResponseSuccess>;
