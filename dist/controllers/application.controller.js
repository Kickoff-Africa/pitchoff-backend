import { ApplicationStatus, ApplicationStage } from "../generated/prisma/client.js";
import { AppError } from "../lib/app-error.js";
import { createApplicationService, deleteApplicationService, listApplicationsService, updateApplicationStatusService, } from "../services/application.services.js";
import logger from "../configs/logger.js";
import { toPaginatedResponse } from "../lib/paginated-response.js";
import { parseApplicationFilters } from "../lib/application-filters.js";
import { parsePagination } from "../lib/pagination.js";
export async function createApplicationController(req, res) {
    const body = req.body;
    if (!body.startupName || !body.startupEmail || !body.stage || !Array.isArray(body.teamMembers)) {
        throw new AppError("Missing required application fields", 400);
    }
    if (!body.consentGiven)
        throw new AppError("Consent is required", 400);
    // ensure enum safety
    if (!Object.values(ApplicationStage).includes(body.stage)) {
        logger.error(`Invalid stage value: ${body.stage}`, { stage: body.stage });
        throw new AppError("Invalid stage value", 400);
    }
    const created = await createApplicationService({
        ...body,
        stage: body.stage,
    });
    return res.status(201).json(created);
}
// export async function listApplicationsController(req: Request, res: Response) {
//   const status = req.query.status as ApplicationStatus | undefined
//   const q = req.query.q as string | undefined
//   if (status && !Object.values(ApplicationStatus).includes(status)) {
//     logger.error(`Invalid status filter: ${status}`, { status })
//     throw new AppError("Invalid status filter", 400)
//   }
//   const data = await listApplicationsService({ status, q })
//   return res.json(data)
// }
export async function listApplicationsController(req, res) {
    const pagination = parsePagination(req, {
        defaultSortBy: "createdAt",
        allowedSortFields: ["createdAt", "startupName", "status", "submittedAt"],
    });
    const filters = parseApplicationFilters(req);
    const result = await listApplicationsService({ pagination, filters });
    return res.json(toPaginatedResponse(result.data, result.meta));
}
export async function updateApplicationStatusController(req, res) {
    if (!req.user) {
        logger.error(`Unauthorized request: ${req.user}`);
        throw new AppError("Unauthorized", 401);
    }
    const { id } = req.params;
    const { status } = req.body;
    if (!status || !Object.values(ApplicationStatus).includes(status)) {
        logger.error(`Invalid status: ${status}`, { status });
        throw new AppError("Invalid status", 400);
    }
    const updated = await updateApplicationStatusService({
        id: id,
        status,
        reviewerId: req.user.id,
    });
    return res.json(updated);
}
export async function deleteApplicationController(req, res) {
    if (!req.user) {
        logger.error(`Unauthorized request: ${req.user}`);
        throw new AppError("Unauthorized", 401);
    }
    const { id } = req.params;
    await deleteApplicationService({ id: id });
    return res.status(204).send();
}
//# sourceMappingURL=application.controller.js.map