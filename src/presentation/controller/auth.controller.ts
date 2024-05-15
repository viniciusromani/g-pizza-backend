import express from "express"
import { AuthUseCase } from "@domain/use-case"

export class AuthController {
  constructor(
    private readonly useCase: AuthUseCase
  ) { }

  async authenticate(req: express.Request, res: express.Response): Promise<void> {
    /**
     * 1. checar se a cidade está válida, se estiver volta token, se não erro
     */
    try {
      const { city } = req.body
      const isValid = this.useCase.execute(city)
      console.log(isValid)
    } catch (err) {
      console.log('is error')
    }
  }
}
