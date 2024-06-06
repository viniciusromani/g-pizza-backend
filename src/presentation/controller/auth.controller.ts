import express from "express";
import { AuthUseCase } from "@domain/use-case";
import { UnauthorizedError } from "@presentation/view-model";

export class AuthController {
  constructor(
    private readonly useCase: AuthUseCase
  ) { };

  async authenticate(req: express.Request, res: express.Response): Promise<void> {
    /**
     * 1. checar se a cidade está válida, se estiver volta token, se não erro
     */
    const { city } = req.body;
    const isValid = this.useCase.execute(city);
    if (!isValid) throw new UnauthorizedError();
    // retornar response de sucesso (pesquisar como é melhor fazer)
  };
};
