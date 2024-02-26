import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

export enum SUPPORTED_SOURCES {
  BODY = 'body',
  QUERY = 'query',
  PARAMS = 'params',
}

export const validateMiddleware = (schema: Joi.ObjectSchema, source: SUPPORTED_SOURCES) => {
  const validate = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validateAsync(req[source]);
      next();
    } catch (error) {
      console.log(error);
      return res.status(403).json({ error: 'Bad request' });
    }
  };

  return validate;
};
