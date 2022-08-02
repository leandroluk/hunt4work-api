import * as middlewares from '$/api/middlewares';
import { Router } from 'express';

const routes = Router();

routes.use(middlewares.logger);

export default routes;
