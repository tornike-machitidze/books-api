import { Router } from 'express';

import bookController from './book.controller';

const router = Router();

router.get('/', bookController.getBooks.bind(bookController));

router.get('/:id', bookController.getBook.bind(bookController));

router.post('/', bookController.createBook.bind(bookController));

router.patch('/:id', bookController.updateBook.bind(bookController));

router.delete('/:id', bookController.deleteBook.bind(bookController));

export default router;
