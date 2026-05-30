import type { Request, Response } from "express";
import type { AuthenticatedRequest } from "../middlewares/auth.middleware.js";
export declare function createApplicationController(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function listApplicationsController(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function updateApplicationStatusController(req: AuthenticatedRequest, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function deleteApplicationController(req: AuthenticatedRequest, res: Response): Promise<Response<any, Record<string, any>>>;
