import bcrypt from "bcryptjs"
import { prisma } from "../lib/prisma.js"
import { signAccessToken } from "../lib/jwt.js"

export async function loginService(email: string, password: string) {
  const user = await prisma.user.findUnique({
    where: { email },
    include: {
      userRoles: {
        include: {
          role: {
            include: {
              rolePermissions: { include: { permission: true } },
            },
          },
        },
      },
    },
  })

  if (!user || !user.passwordHash) throw new Error("Invalid credentials")

  const ok = await bcrypt.compare(password, user.passwordHash)
  if (!ok) throw new Error("Invalid credentials")

  const permissions = Array.from(
    new Set(
      user.userRoles.flatMap((ur) =>
        ur.role.rolePermissions.map((rp) => rp.permission.key)
      )
    )
  )

  const token = signAccessToken({ sub: user.id, email: user.email })

  return {
    token,
    user: {
      id: user.id,
      email: user.email,
      fullName: user.fullName,
      roles: user.userRoles.map((ur) => ur.role.name),
      permissions,
    },
  }
}