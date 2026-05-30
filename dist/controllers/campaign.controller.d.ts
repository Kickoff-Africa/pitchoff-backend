import type { Response } from "express";
import type { AuthenticatedRequest } from "../middlewares/auth.middleware.js";
export declare function createCampaignController(req: AuthenticatedRequest, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function listCampaignsController(_req: AuthenticatedRequest, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getCampaignController(req: AuthenticatedRequest, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getApplicationEmailHistoryController(req: AuthenticatedRequest, res: Response): Promise<Response<any, Record<string, any>>>;
