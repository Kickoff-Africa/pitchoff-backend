import { verifyAccessToken } from "../lib/jwt.js";
import logger from "../configs/logger.js";
export function authMiddleware(req, res, next) {
    const header = req.headers.authorization;
    if (!header || !header.startsWith("Bearer ")) {
        logger.error("Unauthorized: No token provided");
        return res.status(401).json({ message: "Unauthorized: No token provided" });
    }
    try {
        const token = header.slice(7);
        const payload = verifyAccessToken(token);
        req.user = { id: payload.sub, email: payload.email };
        return next();
    }
    catch {
        logger.error("Unauthorized: Invalid token");
        return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
}
//# sourceMappingURL=auth.middleware.js.map