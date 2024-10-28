import bcrypt from "bcryptjs";
import { Task } from "../schema/task";
import {
  ForbiddenError,
  NotFoundError,
  UnAuthorizedError,
} from "../utils/erros/CommonError";
import { CreateTaskDTO, UpdateTaskDTO } from "../dto/task.dto";
import { User } from "../schema/user";
import { IUser } from "../type";

export const createTask = async ({
  task,
  description,
  user,
}: CreateTaskDTO) => {
  const newTask = new Task({ task, description, user });
  await newTask.save();
};

export const fetchTask = async (): Promise<any> => {
  const task = await Task.find();
  return task;
};

export const fetchTaskById = async ({ id }): Promise<any> => {
  const task = await Task.findOne({ _id: id });
  return task;
};

export const updateTask = async ({
  id,
  task,
  description,
  user,
}: UpdateTaskDTO): Promise<any> => {
  const isUser: IUser | null = await User.findOne({ _id: user });
  const fetchTask = await Task.findOne({ _id: id });
  if (!fetchTask) throw new NotFoundError("Task not found");
  if (fetchTask?.user !== isUser?._id)
    throw new ForbiddenError("User not authorized to update this task");
  fetchTask.task = task || fetchTask.task;
  fetchTask.description = description || fetchTask.description;
  const updatedTask = await Task.updateOne(fetchTask._id, fetchTask);
  return updatedTask;
};

export const updateTaskStatus = async ({
  id,
  user,
}: UpdateTaskDTO): Promise<any> => {
  const isUser: IUser | null = await User.findOne({ _id: user });
  const fetchTask = await Task.findOne({ _id: id });
  if (!fetchTask) throw new NotFoundError("Task not found");
  if (fetchTask?.user !== isUser?._id)
    throw new ForbiddenError("User not authorized to update this task");
  fetchTask.isCompleted = !!fetchTask.isCompleted;
  const updatedTask = await Task.updateOne(fetchTask._id, fetchTask);
  return updatedTask;
};

export const deleteTask = async ({ id, user }: UpdateTaskDTO): Promise<any> => {
  const isUser: IUser | null = await User.findOne({ _id: user });
  const fetchTask = await Task.findOne({ _id: id });
  if (!fetchTask) throw new NotFoundError("Task not found");
  if (fetchTask?.user !== isUser?._id)
    throw new ForbiddenError("User not authorized to update this task");
  const updatedTask = await Task.deleteOne({ _id: id });
  return updatedTask;
};

export const searchTask = async ({ query }) => {
  const searchTask = await Task.find({
    $or: [{ task: { $regex: query, $options: "i" } }],
  });
  if (searchTask.length === 0) throw new NotFoundError("Task not found");
  return searchTask;
};
