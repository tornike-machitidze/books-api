/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import supertest from 'supertest';
import app from '../index';
// import bookService from '../modules/book/book.service';

// const bookId = '8ad48acf-3edd-4c74-9c7b-a2c26d5686d8';

export const bookPayload = {
  title: 'The Idiot',
  content: 'The book content...',
  lastPage: 0,
  author: 'Fyodor Dostoyevsky',
};

describe('book', () => {
  describe('get book route', () => {
    describe('given the book does not exist', () => {
      it('should return a 404', async () => {
        const bookId = 'book-123';

        await supertest(app).get(`/api/books/${bookId}`).expect(404);
      });
    });

    // describe('given the book does exist', () => {
    //   it('should return a 200 status and the book', async () => {
    //     // @ts-ignore
    //     const book = await bookService.createBook(bookPayload);

    //     const { body, statusCode } = await supertest(app).get(`/api/books/${book.id}`);

    //     expect(statusCode).toBe(200);

    //     expect(body.data.id).toBe(book.id);
    //   });
    // });
  });

  describe('create book route', () => {
    describe('given the user is auth', () => {
      it('should return a 201 and create the book', async () => {
        const { statusCode, body } = await supertest(app).post('/api/books').send(bookPayload);

        expect(statusCode).toBe(201);

        expect(body).toEqual({
          id: expect.any(String),
          title: 'The Idiot',
          content: 'The book content...',
          lastPage: 0,
          author: 'Fyodor Dostoyevsky',
        });
      });
    });
  });
});
