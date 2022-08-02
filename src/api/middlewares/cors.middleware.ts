import vars from '$/vars';
import { NextFunction, Request, Response } from 'express';

export const cors = (
  _req: Request,
  res: Response,
  next: NextFunction,
): void => {
  res.setHeader('access-control-allow-origin', vars.api.corsOrigin);
  res.setHeader('access-control-allow-methods', '*');
  res.setHeader('access-control-allow-headers', '*');
  next();
};
