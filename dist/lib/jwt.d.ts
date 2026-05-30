export type AuthPayload = {
    sub: string;
    email: string;
};
export declare function signAccessToken(payload: AuthPayload): string;
export declare function verifyAccessToken(token: string): AuthPayload;
