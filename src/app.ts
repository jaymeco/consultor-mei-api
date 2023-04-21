import cors from 'cors';
import express from 'express';

import initializeRouter from './router';
import { applicationConfig, corsConfig, jsonConfig } from '../configs/app';
import errorMiddleware from './middlewares/errors';

const app = express();

app.use(cors(corsConfig));
app.use(express.json(jsonConfig));

app.set('port', applicationConfig.port);
app.set('host', applicationConfig.host);

initializeRouter(app);

app.use(errorMiddleware);

export default app;
