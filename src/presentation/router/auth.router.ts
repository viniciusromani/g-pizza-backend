import { Router } from ".";
import { AuthController } from "@presentation/controller";
import { validator } from "@presentation/middleware";
import { postAuthSchema } from "@presentation/view-model";


export class AuthRouter extends Router {
  constructor(
    private readonly controller: AuthController,
  ) { 
    super();
    this.router.post("/", validator.validate(postAuthSchema), this.controller.authenticate);
  };
};
