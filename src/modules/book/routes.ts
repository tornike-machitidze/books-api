import { Router } from 'express';

import bookController from './book.controller';
import { verifyToken } from '../../middlewares/auth.middleware';

const router = Router();

router.get('/', bookController.getBooks.bind(bookController));

router.get('/:id', bookController.getBook.bind(bookController));

router.post('/', verifyToken, bookController.createBook.bind(bookController));

router.patch('/:id', verifyToken, bookController.updateBook.bind(bookController));

router.delete('/:id', verifyToken, bookController.deleteBook.bind(bookController));

export default router;
