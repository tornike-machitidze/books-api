import 'reflect-metadata';

import 'dotenv/config';
import createApp from './app';
import config from './config';

const PORT = config.PORT;

const app = createApp();

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

export default app;
