import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
// import { ICurrentUser } from '../database/model/user.model';
// import logger from '../logger/logger';

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
    const user = jwt.verify(token, process.env.TOKEN_KEY!) as ICurrentUser;

    req.user = user;
  } catch (error) {
    return res.status(401).send('Invalid Token');
  }

  return next();
};
