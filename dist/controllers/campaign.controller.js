import { AppError } from "../lib/app-error.js";
import { createCampaignService, getApplicationEmailHistoryService, getCampaignService, listCampaignsService, } from "../services/campaign.service.js";
export async function createCampaignController(req, res) {
    if (!req.user)
        throw new AppError("Unauthorized", 401);
    const { applicationIds, subject, htmlBody, name, templateKey } = req.body;
    if (!Array.isArray(applicationIds)) {
        throw new AppError("applicationIds must be an array", 400);
    }
    const result = await createCampaignService({
        applicationIds,
        subject: subject ?? "",
        htmlBody: htmlBody ?? "",
        name,
        templateKey,
        createdById: req.user.id,
    });
    return res.status(202).json({
        message: "Campaign queued successfully",
        ...result,
    });
}
export async function listCampaignsController(_req, res) {
    const campaigns = await listCampaignsService();
    return res.json(campaigns);
}
export async function getCampaignController(req, res) {
    const campaign = await getCampaignService(req.params.id);
    return res.json(campaign);
}
export async function getApplicationEmailHistoryController(req, res) {
    const history = await getApplicationEmailHistoryService(req.params.id);
    return res.json(history);
}
//# sourceMappingURL=campaign.controller.js.map