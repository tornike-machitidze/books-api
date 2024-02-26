import { Request, Response } from 'express';
import { CreateBookInterface } from './interfaces/create-book.interface';
import bookService, { BookService } from './book.service';
import { UpdateBookInterface } from './interfaces/update-book.interface';

export class BookController {
  private readonly bookService: BookService;

  constructor(bookService: BookService) {
    this.bookService = bookService;
  }

  async getBooks(req: Request, res: Response) {
    const queries = req.query;

    const take = Number(queries.take) || 10;
    const skip = Number(queries.skip) || 0;

    try {
      const [books, total] = await this.bookService.getBooks(take, skip);
      res.status(200).json({ data: { books, total } });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getBook(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const book = await this.bookService.getBook(id);

      if (!book) return res.status(404).json({ error: 'Book was not found!' });

      res.status(200).json({ data: book });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async createBook(req: Request, res: Response) {
    try {
      const book: CreateBookInterface = req.body;
      const created = await this.bookService.createBook(book);
      res.status(201).json({ data: created });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async updateBook(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const props: UpdateBookInterface = req.body;
      const book = await this.bookService.updateBook(id, props);
      if (!book) return res.status(404).json({ error: 'Book was not found!' });
      res.sendStatus(204);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async deleteBook(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const book = await this.bookService.deleteBook(id);
      if (!book) return res.status(404).json({ error: 'Book was not found!' });
      res.status(200).json({ data: book });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export default new BookController(bookService);
