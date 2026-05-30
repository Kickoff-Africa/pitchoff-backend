export type PitchDeckUploadResult = {
    url: string;
    publicId: string;
    fileName: string;
};
export declare function uploadPitchDeckToCloudinary(input: {
    buffer: Buffer;
    fileName: string;
}): Promise<PitchDeckUploadResult>;
