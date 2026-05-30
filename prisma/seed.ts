import "dotenv/config"
import bcrypt from "bcryptjs"
import { PrismaPg } from "@prisma/adapter-pg"
import { PrismaClient, UserStatus } from "../src/generated/prisma/client.js"

const connectionString = process.env.DATABASE_URL
if (!connectionString) {
  throw new Error("Missing DATABASE_URL in .env")
}

const adapter = new PrismaPg({ connectionString })
const prisma = new PrismaClient({ adapter })

const PERMISSIONS = [
  { key: "application.create", description: "Create application" },
  { key: "application.read", description: "Read applications" },
  { key: "application.update", description: "Update application fields" },
  { key: "application.update_status", description: "Update application status" },
  { key: "application.delete", description: "Delete application" },

  { key: "campaign.read", description: "Read email campaigns and delivery history" },
  { key: "campaign.send", description: "Send email campaigns to selected applicants" },

  { key: "rbac.read", description: "Read roles and permissions" },
  { key: "rbac.manage_roles", description: "Create/update roles" },
  { key: "rbac.manage_permissions", description: "Assign/remove role permissions" },
  { key: "rbac.assign_roles", description: "Assign roles to users" },

  { key: "admin.dashboard", description: "Access admin dashboard" },
] as const

const ROLES = [
  {
    name: "SUPER_ADMIN",
    description: "Full platform access",
    isSystem: true,
    permissionKeys: PERMISSIONS.map((p) => p.key),
  },
  {
    name: "ADMIN",
    description: "Manage applications and dashboard",
    isSystem: true,
    permissionKeys: [
      "application.read",
      "application.update",
      "application.update_status",
      "application.delete",
      "campaign.read",
      "campaign.send",
      "admin.dashboard",
    ],
  },
  {
    name: "REVIEWER",
    description: "Review applications only",
    isSystem: true,
    permissionKeys: ["application.read", "application.update_status", "admin.dashboard"],
  },
] as const

async function seedPermissions() {
  for (const permission of PERMISSIONS) {
    await prisma.permission.upsert({
      where: { key: permission.key },
      update: { description: permission.description },
      create: {
        key: permission.key,
        description: permission.description,
      },
    })
  }
}

async function seedRolesAndRolePermissions() {
  for (const role of ROLES) {
    const roleRecord = await prisma.role.upsert({
      where: { name: role.name },
      update: {
        description: role.description,
        isSystem: role.isSystem,
      },
      create: {
        name: role.name,
        description: role.description,
        isSystem: role.isSystem,
      },
    })

    const permissions = await prisma.permission.findMany({
      where: { key: { in: role.permissionKeys as string[] } },
      select: { id: true },
    })

    for (const permission of permissions) {
      await prisma.rolePermission.upsert({
        where: {
          roleId_permissionId: {
            roleId: roleRecord.id,
            permissionId: permission.id,
          },
        },
        update: {},
        create: {
          roleId: roleRecord.id,
          permissionId: permission.id,
        },
      })
    }
  }
}

async function seedSuperAdmin() {
  const email = process.env.SUPER_ADMIN_EMAIL
  const password = process.env.SUPER_ADMIN_PASSWORD
  const fullName = process.env.SUPER_ADMIN_NAME ?? "Super Admin"

  if (!email || !password) {
    throw new Error("Missing SUPER_ADMIN_EMAIL or SUPER_ADMIN_PASSWORD in .env")
  }

  const passwordHash = await bcrypt.hash(password, 12)

  const superAdmin = await prisma.user.upsert({
    where: { email },
    update: {
      fullName,
      passwordHash,
      status: UserStatus.ACTIVE,
    },
    create: {
      email,
      fullName,
      passwordHash,
      status: UserStatus.ACTIVE,
    },
  })

  const superAdminRole = await prisma.role.findUnique({
    where: { name: "SUPER_ADMIN" },
    select: { id: true },
  })

  if (!superAdminRole) {
    throw new Error("SUPER_ADMIN role not found after seed.")
  }

  await prisma.userRole.upsert({
    where: {
      userId_roleId: {
        userId: superAdmin.id,
        roleId: superAdminRole.id,
      },
    },
    update: {},
    create: {
      userId: superAdmin.id,
      roleId: superAdminRole.id,
      assignedById: superAdmin.id, // self-assign on bootstrap
    },
  })
}

async function main() {
  await seedPermissions()
  await seedRolesAndRolePermissions()
  await seedSuperAdmin()
  console.log("Seed completed successfully.")
}

main()
  .catch((error) => {
    console.error("Seed failed:", error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })