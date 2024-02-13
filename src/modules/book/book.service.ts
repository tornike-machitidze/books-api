export class BookService {
  constructor() {}

  async getBooks() {
    return [{ book: 1 }, { book: 2 }];
  }
}

export default new BookService();
