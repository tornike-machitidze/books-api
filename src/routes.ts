import { Router } from 'express';

import books from './modules/book/routes';

const router = Router();

router.use('/books', books);

export default router;
