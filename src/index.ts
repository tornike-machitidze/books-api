/* eslint-disable prettier/prettier */
import express, { Express } from 'express';
import 'reflect-metadata';

import { connectToPostgresDB } from './database';
import routes from './routes';

import 'dotenv/config';
const PORT: number = Number(process.env.API_PORT) || 3000;

export const createServer = () => {
  const server: Express = express();
  server.use(express.json());

  // register routes
  server.use('/api', routes);
  return server;
};

const app = createServer();

process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err);
});

process.on('unhandledRejection', (reason) => {
  console.error('Unhandled rejection:', reason);
});

// start listening
app.listen(PORT, async () => {
  console.log(`Server started on port ${PORT}`);

  await connectToPostgresDB();
});

export default app;
