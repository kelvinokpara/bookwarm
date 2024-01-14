import Joi from "joi";

export const CreateBookSchema = Joi.object({
  title: Joi.string().required(),
  subtitle: Joi.string().required(),
  authors: Joi.string().required(),
  image: Joi.string().required(),
  url: Joi.string().required(),
  category: Joi.string()
    .required()
    .valid("action", "romance", "horror", "slice of life", "general"),
});
