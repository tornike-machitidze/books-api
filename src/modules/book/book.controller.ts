import { Request, Response } from 'express';
import { CreateBookInterface } from './interfaces/create-book.interface';
import bookService, { BookService } from './book.service';

export class BookController {
  readonly bookService: BookService;

  constructor(bookService: BookService) {
    this.bookService = bookService;
  }

  async getBooks(req: Request, res: Response) {
    try {
      const books = await bookService.getBooks();
      res.status(200).json(books);
    } catch (err) {
      console.log(err);
    }
  }
}

export default new BookController(bookService);
