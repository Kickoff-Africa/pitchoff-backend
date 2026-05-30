import { AppError } from "../lib/app-error.js";
import { uploadPitchDeckToCloudinary } from "../services/upload.service.js";
export async function uploadPitchDeckController(req, res) {
    const file = req.file;
    if (!file) {
        throw new AppError("Pitch deck file is required", 400);
    }
    const uploaded = await uploadPitchDeckToCloudinary({
        buffer: file.buffer,
        fileName: file.originalname,
    });
    return res.status(201).json({
        url: uploaded.url,
        fileName: uploaded.fileName,
    });
}
//# sourceMappingURL=upload.controller.js.map