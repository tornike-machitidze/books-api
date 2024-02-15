import 'dotenv/config';

const PORT: number = Number(process.env.API_PORT) || 8080;

const PGSQL_HOST = process.env.PGSQL_HOST;
const PGSQL_USERNAME = process.env.PGSQL_USERNAME;
const PGSQL_PASSWORD = process.env.PGSQL_PASSWORD;
const PGSQL_LOCAL_PORT = Number(process.env.PGSQL_LOCAL_PORT!);
const PGSQL_DOCKER_PORT = process.env.PGSQL_DOCKER_PORT;
const PGSQL_DB = process.env.PGSQL_DB;
const SALT = process.env.SALT;
const JWT_SECRET_OR_KEY = process.env.JWT_SECRET_OR_KEY;

export default {
  PORT,
  PGSQL_HOST,
  PGSQL_USERNAME,
  PGSQL_PASSWORD,
  PGSQL_LOCAL_PORT,
  PGSQL_DOCKER_PORT,
  PGSQL_DB,
  SALT,
  JWT_SECRET_OR_KEY,
};
