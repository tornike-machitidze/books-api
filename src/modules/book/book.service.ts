import { getRepository } from '../../database';
import { BookEntity } from './book.entity';
import { CreateBookInterface } from './interfaces/create-book.interface';
import { UpdateBookInterface } from './interfaces/update-book.interface';

export class BookService {
  constructor() {}

  async getBooks(take: number, skip: number) {
    return await getRepository(BookEntity).findAndCount({ take, skip });
  }

  async getBook(id: string) {
    try {
      const book = await getRepository(BookEntity).findOneBy({ id });
      return book;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async createBook(bookData: CreateBookInterface) {
    const { title, author, content } = bookData;
    return await getRepository(BookEntity).save({ title, author, lastPage: 0, content });
  }

  async updateBook(id: string, bookData: UpdateBookInterface) {
    const book = await getRepository(BookEntity).findOneBy({ id });
    if (!book) return;
    Object.assign(book, bookData);
    return await getRepository(BookEntity).save(book);
  }

  async deleteBook(id: string) {
    const book = await getRepository(BookEntity).findOneBy({ id });
    if (!book) return;
    return await getRepository(BookEntity).remove(book);
  }
}

export default new BookService();
