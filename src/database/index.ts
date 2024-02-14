import { DataSource, EntityTarget, ObjectLiteral } from 'typeorm';
import { BookEntity } from '../modules/book/book.entity';
import { UserEntity } from '../modules/user/user.entity';
// import { PageEntity } from '../modules/page/page.entity';

let dataSource: DataSource;

/**
 * Database connection
 */
export const connectToPostgresDB = async () => {
  try {
    const AppDataSource = new DataSource({
      type: 'postgres',
      host: process.env.PGSQL_HOST,
      port: Number(process.env.PGSQL_PORT),
      username: process.env.PGSQL_USERNAME,
      password: process.env.PGSQL_PASSWORD,
      database: process.env.PGSQL_DB,
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

/**
 * Takes the entity and returns the repository
 * @param entity entity ( Book )
 * @returns postgresql respository ( books repo)
 */
export const getRepository = (entity: EntityTarget<ObjectLiteral>) => dataSource && dataSource.getRepository(entity);
