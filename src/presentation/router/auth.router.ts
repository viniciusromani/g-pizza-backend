import { Router } from '.'
import { AuthController } from '@presentation/controller'
import { validateBody } from '@presentation/middleware'
import { postAuthSchema } from '@presentation/view-model'

export class AuthRouter extends Router {
  constructor(
    private readonly controller: AuthController,
  ) { 
    super()
    this.router.post('/', validateBody(postAuthSchema), this.controller.authenticate)
  }
}
