import express from "express"
import { AuthUseCase } from "@domain/use-case"

export class AuthController {
  constructor(
    private readonly useCase: AuthUseCase
  ) { }

  async authenticate(req: express.Request, res: express.Response): Promise<void> {
    // try {
    //   const { city } = req.body

    //   const authenticated = this.useCase.execute(city)
    // } catch (err) {

    // }

    console.log('ive been called')
    res.status(200).json({ 'message': 'ok' })
  }
}
// import { Request, Response } from 'express';
// import AuthUseCase from '../usecases/authUseCase';

// class AuthController {
//   public async login(req: Request, res: Response): Promise<void> {
//     try {
//       const { username, password } = req.body;
      
//       // Chamando o caso de uso para autenticar o usuário
//       const token = await AuthUseCase.login(username, password);

//       // Se a autenticação for bem-sucedida, retornamos o token
//       res.status(200).json({ token });
//     } catch (error) {
//       // Se ocorrer um erro, retornamos uma mensagem de erro
//       res.status(401).json({ error: 'Authentication failed' });
//     }
//   }
// }
