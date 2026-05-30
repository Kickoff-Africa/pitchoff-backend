import { prisma } from "../lib/prisma.js";
export async function userHasPermission(userId, permissionKey) {
    const count = await prisma.userRole.count({
        where: {
            userId,
            role: {
                rolePermissions: {
                    some: { permission: { key: permissionKey } },
                },
            },
        },
    });
    return count > 0;
}
//# sourceMappingURL=rbac.service.js.map