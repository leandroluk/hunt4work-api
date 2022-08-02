import { NextFunction, Request, Response } from 'express';
import vars from '../../vars';

export default (_req: Request, res: Response, next: NextFunction): void => {
  res.set('access-control-allow-origin', vars.api.corsOrigin);
  res.set('access-control-allow-methods', '*');
  res.set('access-control-allow-headers', '*');
  next();
};