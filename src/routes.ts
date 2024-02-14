/* eslint-disable prettier/prettier */
import { Router } from 'express';

import users from './modules/user/routes';
import books from './modules/book/routes';
import { UserInterface } from './modules/user/user.interface';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace, no-unused-vars
  namespace Express {
    // eslint-disable-next-line no-unused-vars
    interface Request {
      user: UserInterface;
    }
  }
}

const router = Router();

router.use('/users', users);

router.use('/books', books);

export default router;
