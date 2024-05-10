import { Router } from '.'
import { RestaurantsController } from '@presentation/controller'

export class AuthRouter extends Router {
  constructor(
    private readonly controller: RestaurantsController,
  ) { 
    super()
    // this.router.post('/', this.controller.authenticate)
  }
}
