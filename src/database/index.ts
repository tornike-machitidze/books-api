import { DataSource, EntityTarget, ObjectLiteral } from 'typeorm';
import { BookEntity } from '../modules/book/book.entity';
import { UserEntity } from '../modules/user/user.entity';
import config from '../config';

let dataSource: DataSource;
let AppDataSource: DataSource;

/**
 * Database connection
 */
export const connectToPostgresDB = async () => {
  try {
    AppDataSource = new DataSource({
      type: 'postgres',
      host: config.PGSQL_HOST,
      port: Number(config.PGSQL_DOCKER_PORT),
      username: config.PGSQL_USERNAME,
      password: config.PGSQL_PASSWORD,
      database: config.PGSQL_DB,
      entities: [BookEntity, UserEntity],
      synchronize: true,
    });

    // opens connection to the database
    dataSource = await AppDataSource.initialize();

    console.log('Successfuly connected to the database!');
  } catch (error) {
    console.log(error);
    // breakes the app if not connected
    throw new Error('Can not connect to database');
  }
};

export const closeConnection = async () => {
  try {
    await AppDataSource.destroy();
    return true;
  } catch (err) {
    console.log('Connection was not closed');
  }
};

/**
 * Takes the entity and returns the repository
 * @param entity entity ( Book )
 * @returns postgresql respository ( books repo)
 */
export const getRepository = (entity: EntityTarget<ObjectLiteral>) => dataSource && dataSource.getRepository(entity);
