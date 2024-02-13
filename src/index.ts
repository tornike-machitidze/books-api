import express, { Express } from 'express';
import 'reflect-metadata';

import { connectToPostgresDB } from './database';
import routes from './routes';

import 'dotenv/config';

const app: Express = express();

(async (app: Express) => {
  try {
    // connect to db
    await connectToPostgresDB();

    app.use(express.json());

    // register routes
    app.use('/api', routes);

    const PORT = Number(process.env.API_PORT) || 3000;

    process.on('uncaughtException', (err) => {
      console.error('Uncaught exception:', err);
    });

    process.on('unhandledRejection', (reason) => {
      console.error('Unhandled rejection:', reason);
    });

    // start listening
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (err: unknown) {
    console.log('Server startup failed! ❌.', err);
  }
})(app);
