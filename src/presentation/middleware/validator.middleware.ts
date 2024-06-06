import { NextFunction, Request, Response } from "express";
import { BadRequestError, InternalServerError } from "@presentation/view-model";
import { z, ZodError } from "zod";

class ValidatorHandler {
  public validate(schema: z.ZodObject<any, any>) {
    return (req: Request, res: Response, next: NextFunction) => {
      try {
        schema.parse(req.body);
        next();
      } catch (err) {
        if (err instanceof ZodError) {
          const messages = err.errors.map(error => `${error.path.join('.')} is ${error.message}`);
          next(new BadRequestError(messages.join('; ')));
        } else {
          next(new InternalServerError());
        };
      };
    };
  };
};

export const validator = new ValidatorHandler();
