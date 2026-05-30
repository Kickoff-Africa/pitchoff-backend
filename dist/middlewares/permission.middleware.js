import { userHasPermission } from "../services/rbac.service.js";
export function requirePermission(permissionKey) {
    return async (req, res, next) => {
        if (!req.user)
            return res.status(401).json({ message: "Unauthorized" });
        const allowed = await userHasPermission(req.user.id, permissionKey);
        if (!allowed)
            return res.status(403).json({ message: "Forbidden" });
        return next();
    };
}
//# sourceMappingURL=permission.middleware.js.map