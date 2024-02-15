/* eslint-disable prettier/prettier */
import express, { Express } from 'express';
import cors from 'cors';
import 'reflect-metadata';

import { connectToPostgresDB } from './database';
import routes from './routes';

import 'dotenv/config';
const PORT: number = Number(process.env.API_PORT) || 3000;

const app: Express = express();

app.use(express.json());
app.use(cors());

(async () => {
  await connectToPostgresDB();
})();

// register routes
app.use('/api', routes);

process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err);
});

process.on('unhandledRejection', (reason) => {
  console.error('Unhandled rejection:', reason);
});

// start listening
const server = app.listen(PORT, async () => {
  console.log(`Server started on port ${PORT}`);
});

export default server;
