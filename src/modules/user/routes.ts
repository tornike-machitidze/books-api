import { Router } from 'express';

import userController from './user.controller';
import { SUPPORTED_SOURCES, validateMiddleware } from '../../middlewares/validate.middleware';
import registerUserValidator from './user.validator';

const router = Router();

router.post(
  '/sign-up',
  validateMiddleware(registerUserValidator, SUPPORTED_SOURCES.BODY),
  userController.registerUser.bind(userController),
);

router.post('/sign-in', userController.loginUser.bind(userController));

export default router;
