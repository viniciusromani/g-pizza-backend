import express, { NextFunction } from "express";
import { AuthUseCase } from "@domain/use-case";
import { UnauthorizedError } from "@presentation/view-model";

export class AuthController {
  constructor(
    private readonly useCase: AuthUseCase
  ) { };

  authenticate = async(req: express.Request, res: express.Response, next: NextFunction): Promise<void> => {
    /**
     * 1. checar se a cidade está válida, se estiver volta token, se não erro
     */
    const { zipcode } = req.body;
    const isValid = await this.useCase.execute(zipcode);
    if (!isValid) next(new UnauthorizedError("Invalid credentials"));
    // retornar response de sucesso (pesquisar como é melhor fazer)
  }
};
