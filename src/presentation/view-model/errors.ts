export abstract class CustomError extends Error {
  abstract readonly statusCode: number;
  abstract readonly description: string;
  readonly logging: boolean;

  constructor(message: string, logging: boolean) {
    console.log('chamei o super')
    super(message);

    this.logging = logging;

    Error.captureStackTrace(this);
    Object.setPrototypeOf(this, CustomError.prototype);
  };
};


/**
 * TODO: Try to shrink this code to only have a constructor
 */
export class BadRequestError extends CustomError {
  public statusCode: number;
  public description: string;
  
  constructor(message?: string, logging?: boolean, description?: string) {
    console.log('hello from here')
    super(message || "Bad Request", logging || true);

    this.statusCode = 400;
    this.description = description || "Bad Request";

    Object.setPrototypeOf(this, BadRequestError.prototype);
  };
};

export class InternalServerError extends CustomError {
  public statusCode: number;
  public description: string;
  
  constructor(message?: string, logging?: boolean, description?: string) {
    super(message || "Internal Server Error", logging || true);

    this.statusCode = 500;
    this.description = description || "Internal Server Error";

    Object.setPrototypeOf(this, BadRequestError.prototype);
  };
};

export class UnauthorizedError extends CustomError {
  public statusCode: number;
  public description: string;
  
  constructor(message?: string, logging?: boolean, description?: string) {
    super(message || "Unauthorized", logging || true);

    this.statusCode = 401;
    this.description = description || "Unauthorized";

    Object.setPrototypeOf(this, BadRequestError.prototype);
  };
};
