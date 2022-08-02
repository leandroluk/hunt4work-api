import { Router } from 'express';
import api from './api';

const routes = Router();

routes.use('/api', api);
routes.get('/health', (_req, res) => {
  res.sendStatus(200);
});

export default routes;
