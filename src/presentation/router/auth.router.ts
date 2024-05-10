import { Router } from '.'
import { AuthController } from '@presentation/controller'

export class AuthRouter extends Router {
  constructor(
    private readonly controller: AuthController,
  ) { 
    super()
    this.router.post('/', this.controller.authenticate)
  }
}
