import Joi from "joi";

export const createLibSchema = Joi.object({
  user: Joi.string().required(),
});
