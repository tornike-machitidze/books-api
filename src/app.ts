/* eslint-disable prettier/prettier */
import express, { Express } from 'express';
import cors from 'cors';

import routes from './routes';
import { connectToPostgresDB } from './database';

function createApp() {
  const app: Express = express();

  (async () => {
    await connectToPostgresDB();
  })();

  app.use(express.json());
  app.use(cors());

  // register routes
  app.use('/api', routes);

  return app;
}

export default createApp;
