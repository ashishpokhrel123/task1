import Joi from "joi";
import { CreateTaskDTO, UpdateTaskDTO } from "../dto/task.dto";

export const createTaskSchemaValidation = Joi.object<CreateTaskDTO>({
  task: Joi.string().required(),
  description: Joi.string().required(),
  user: Joi.string().required(),
});

export const updateTaskSchemaValidation = Joi.object<UpdateTaskDTO>({
  _id: Joi.string().required(),
  task: Joi.string().required(),
  description: Joi.string().required(),
  isCompleted: Joi.bool(),
  user: Joi.string().required(),
});

