import express from 'express';
import 'express-async-errors';
import * as middlewares from './middlewares';
import routes from './routes';

const api = express();
api.use(middlewares.bodyParser);
api.use(middlewares.cors);
api.use(middlewares.logger);
api.use(middlewares.security);
api.use(routes);
api.use(middlewares.errorHandler);

export default api;
