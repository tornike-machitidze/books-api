/* eslint-disable no-undef */
import request from 'supertest';
import createApp from '../src/app';
import { closeConnection, connectToPostgresDB } from '../src/database';

const app = createApp();

const bookPayload = {
  title: 'The Idiot',
  content: 'The book content...',
  lastPage: 0,
  author: 'Fyodor Dostoyevsky',
};

const userPayload = {
  email: 'jhon.doe@gmeail.com',
  password: 'password',
};

describe('book', () => {
  beforeEach((done) => {
    (async () => {
      await connectToPostgresDB();
      done();
    })();
  });

  afterEach((done) => {
    (async () => {
      await closeConnection();
      done();
    })();
  });
  describe('get book route', () => {
    describe('GET /api/books/${id} given the book does not exist', () => {
      it('should return a 404', () => {
        const bookId = 'e28992f4-66ef-47ea-803f-e92862a94125';

        return request(app).get(`/api/books/${bookId}`).expect(404);
      });
    });
  });

  describe('try to create book route', () => {
    describe('POST /api/books given the token is not valid', () => {
      it('should return a 201 and create the book', async () => {
        const { statusCode } = await request(app).post('/api/books').send(bookPayload);

        expect(statusCode).toBe(401);
      });
    });

    describe('POST /api/books given the token is not valid', () => {
      it('should return a 201 and create the book', async () => {
        const { statusCode } = await request(app)
          .post('/api/books')
          .set(
            'Authorization',
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsZXIiLCJpYXQiOjE3MDgwMzIyMzcsImV4cCI6MTcwODAzOTQzN30.f6AwzFsgr8nCYgCTGoL3DcnfTtjQ_IR6TutuIrLV9hw',
          )
          .send(bookPayload);

        expect(statusCode).toBe(201);
      });
    });
  });

  describe('create user', () => {
    describe('POST /users/sign-up', () => {
      it('should return 201', async () => {
        const { statusCode } = await request(app).post('/api/users/sign-up').send(userPayload);

        expect(statusCode).toBe(201);
      });
    });
  });

  describe('login user', () => {
    describe('POST /users/sign-in', () => {
      it('should return 200', async () => {
        const { statusCode } = await request(app).post('/api/users/sign-in').send(userPayload);

        expect(statusCode).toBe(200);
      });
    });
  });
});
