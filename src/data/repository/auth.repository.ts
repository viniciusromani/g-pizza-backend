import { JWTModel } from "@data/model"
import * as jwt from "jsonwebtoken"

export interface AuthRepository {
  createToken(payload: JWTModel): Promise<string>
  validateToken(token: string): Promise<JWTModel>
}

export class AuthRepositoryImpl implements AuthRepository {
  async createToken(payload: JWTModel): Promise<string> {
    return jwt.sign(payload, process.env.JWT_SECRET)
  }
  
  async validateToken(token: string): Promise<JWTModel> {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    return decoded as JWTModel
  }
}
