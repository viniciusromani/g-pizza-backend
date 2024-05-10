import { JWTAuth } from "@data/model/jwt"
import * as jwt from "jsonwebtoken"

export interface AuthRepository {
  createToken(payload: JWTAuth): Promise<string>
  validateToken(token: string): Promise<JWTAuth>
}

export class AuthRepositoryImpl implements AuthRepository {
  async createToken(payload: JWTAuth): Promise<string> {
    return jwt.sign(payload, process.env.JWT_SECRET)
    // return jwt.sign(payload, "process.env.JWT_SECRET")
  }

  async validateToken(token: string): Promise<JWTAuth> {
    const decoded = jwt.verify(token, "process.env.JWT_SECRET")
    return decoded as JWTAuth
  }
}
