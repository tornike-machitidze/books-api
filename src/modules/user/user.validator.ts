import Joi from 'joi';

const schema = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2 }).required(),
  password: Joi.string().min(1).max(15).required(),
});

export default schema;
