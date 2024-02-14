/* eslint-disable prettier/prettier */
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { UserInterface } from '../modules/user/user.interface';

export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  const authHeaders = req.headers.authorization;

  if (!authHeaders) {
    return res.status(401).json({ message: 'Token is required' });
  }

  const [tokenType, token] = authHeaders.split(' ');

  if (tokenType !== 'Bearer') {
    return res.status(403).json({ message: 'Invalid token' });
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET_OR_KEY!) as UserInterface;

    req.user = user;
  } catch (error) {
    return res.status(401).send('Unauthorized');
  }

  return next();
};
