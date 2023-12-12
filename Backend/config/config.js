import Joi from "joi";
import dotenv from "dotenv";
dotenv.config({});

const envValidation = Joi.object()
  .keys({
    NODE_ENV: Joi.string()
      .valid("production", "development", "test")
      .required(),
    PORT: Joi.number().default(9000),
    MONGO_URI: Joi.string().required(),
  })
  .unknown();

const { value: envVar, error } = envValidation
  .prefs({ errors: { label: "key" } })
  .validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

export const config = {
  env: envVar.NODE_ENV,
  port: envVar.PORT,
  mongodb: {
    db_url: envVar.MONGO_URI,
  },
};
