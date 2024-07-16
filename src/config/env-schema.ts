import * as Joi from 'joi';

export const envSchema = Joi.object({
  PORT: Joi.string().default(3000),
  API_VERSION: Joi.string().required(),
});
