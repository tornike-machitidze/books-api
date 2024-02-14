/* eslint-disable prettier/prettier */
import { Router } from 'express';

import userController from './user.controller';

const router = Router();

router.post('/sign-up', userController.registerUser.bind(userController));

router.post('/sign-in', userController.loginUser.bind(userController));

export default router;
