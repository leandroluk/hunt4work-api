import { NextFunction, Request, Response } from 'express';

const errors: Record<string, number> = {
  ValidationError: 400,
  NotFoundError: 404,
  ConflitError: 409,
};

export const errorHandler = (
  { name, message }: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const status = errors[name];
  if (!status) {
    return res.sendStatus(500);
  }
  res.status(status).json({ message });
};
