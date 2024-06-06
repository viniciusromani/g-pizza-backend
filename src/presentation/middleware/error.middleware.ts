import { Request, Response } from "express";
import { CustomError } from "@presentation/view-model";

class ErrorHandler {
  public async handle(error: Error, req: Request, res: Response) {
    /**
     * Logging
     * TODO: Improve it by logging stack trace and so on
     */
    console.log('estou aqui')
    console.error(error);

    if (error instanceof CustomError) {
      console.log('oiii')
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
