import Joi from 'joi';

const schema = Joi.object({
  title: Joi.string().required(),
  lastpage: Joi.number(),
  content: Joi.string().required(),
  author: Joi.string().required(),
});

export default schema;
