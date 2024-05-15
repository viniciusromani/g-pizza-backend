import { Request, Response, NextFunction } from 'express';
import { z, ZodError } from 'zod';
import { StatusCodes } from 'http-status-codes';

export const validateBody = (schema: z.ZodObject<any, any>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body)
      next()
    } catch (err) {
      if (err instanceof ZodError) {
        const messages = err.errors.map(error => `${error.path.join('.')} is ${error.message}`)
        res.status(StatusCodes.BAD_REQUEST).json({ error: 'Validation body error', message: messages.join('; ') })
      } else {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' })
      }
    }
  }
}
