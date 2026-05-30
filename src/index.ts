import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import authRoutes from "./routes/auth.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import { notFound } from "./middlewares/not-found.middleware.js";
import { errorHandler } from "./middlewares/error-handler.middleware.js";
import applicationRoutes from "./routes/application.routes.js";
import uploadRoutes from "./routes/upload.routes.js";
import campaignRoutes, { applicationEmailHistoryRouter } from "./routes/campaign.routes.js";
import swaggerUi from "swagger-ui-express"
import { swaggerSpec } from "./lib/swagger.js"
import "./workers/email.worker.js"
import logger from "./configs/logger.js";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))
app.get("/api/docs.json", (_req, res) => res.json(swaggerSpec))

app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/admin/campaigns", campaignRoutes);
app.use("/api/admin/applications", applicationEmailHistoryRouter);
app.use("/api/applications", applicationRoutes);
app.use("/api/uploads", uploadRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});