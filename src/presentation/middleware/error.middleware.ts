import { NextFunction, Request, Response } from "express";
import { CustomError } from "@presentation/view-model";

class ErrorHandler {
  public async handle(error: Error, req: Request, res: Response, next: NextFunction) {
    /**
     * Logging
     * TODO: Improve it by logging stack trace and so on
     */
    console.error(error);

    if (error instanceof CustomError) {
      return res
        .status(error.statusCode)
        .send({
          message: error.message,
          description: error.description
        });
    };
    
    // Unhandled
    return res.status(500).send({ message: "Unhandled error. Something went wrong" });
  };
};

export const errorHandler = new ErrorHandler();
