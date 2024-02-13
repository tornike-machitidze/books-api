/* eslint-disable prettier/prettier */
import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send({ status: 'OK', timestamp: 1688612539479 });
});

export default router;
