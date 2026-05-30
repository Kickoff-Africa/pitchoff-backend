import type { NextFunction, Request, Response } from "express";
export type AuthenticatedRequest = Request & {
    user?: {
        id: string;
        email: string;
    };
};
export declare function authMiddleware(req: AuthenticatedRequest, res: Response, next: NextFunction): void | Response<any, Record<string, any>>;
