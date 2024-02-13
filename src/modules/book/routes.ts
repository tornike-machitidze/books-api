import { Router } from 'express';

import bookController from './book.controller';

const router = Router();

router.get('/', bookController.getBooks.bind(bookController));

export default router;
