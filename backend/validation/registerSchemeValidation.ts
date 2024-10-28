import { LoginDTO, RegisterDTO } from "../dto/auth.dto";
import Joi from "joi";

export const registerSchemaValidation = Joi.object<RegisterDTO>({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

export const loginSchemaValidation = Joi.object<LoginDTO>({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
