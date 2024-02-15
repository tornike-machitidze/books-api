import { Router } from 'express';

import bookController from './book.controller';
import { verifyToken } from '../../middlewares/auth.middleware';
import { SUPPORTED_SOURCES, validateMiddleware } from '../../middlewares/validate.middleware';
import createBookValidator from './book.validator';

const router = Router();

router.get('/', bookController.getBooks.bind(bookController));

router.get('/:id', bookController.getBook.bind(bookController));

router.post(
  '/',
  verifyToken,
  validateMiddleware(createBookValidator, SUPPORTED_SOURCES.BODY),
  bookController.createBook.bind(bookController),
);

router.patch('/:id', bookController.updateBook.bind(bookController));

router.delete('/:id', bookController.deleteBook.bind(bookController));

export default router;
