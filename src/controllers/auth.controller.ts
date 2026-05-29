import type { Request, Response } from "express"
import { loginService } from "../services/auth.service.js"

export async function loginController(req: Request, res: Response) {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ message: "email and password are required" })
    }

    const result = await loginService(email, password)
    return res.status(200).json(result)
  } catch (error) {
    return res.status(401).json({ message: "Invalid credentials" })
  }
}