import { createResponse, sucessResponse } from "../utils/response/response";

import {
  createTask,
  fetchTask,
  fetchTaskById,
  searchTask,
  updateTask,
  updateTaskStatus,
} from "../services/task.service";

const addTask = async (data: any) => {
  try {
    const newTask = await createTask(data);
    return createResponse(201, "Task created succesfully", newTask);
  } catch (error: any) {
    return createResponse(400, error.message, null);
  }
};

const fetchAllTask = async () => {
  try {
    const task = await fetchTask();
    return createResponse(200, "Task fetch succesfully", task);
  } catch (error: any) {
    return createResponse(400, error.message, null);
  }
};

const fetchTasksById = async (id: any) => {
  try {
    const task = await fetchTaskById(id);
    return createResponse(200, "Task fetch succesfully", task);
  } catch (error: any) {
    return createResponse(400, error.message, null);
  }
};

const updatedTask = async (data: any) => {
  try {
    const newTask = await updateTask(data);
    return sucessResponse(201, "Task update succesfully", newTask);
  } catch (error: any) {
    return sucessResponse(400, error.message, null);
  }
};

const searchTasks = async (req, res) => {
  const { query } = req.body;
  try {
    const tasks = await searchTask(query);
    return res.status(200).json(tasks);
  } catch (error) {
    console.error("Error searching tasks:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const updateStatus = async (data: any) => {
  try {
    const updateTask = await updateTaskStatus(data);
    return sucessResponse(201, "Task updated succesfully", updateTask);
  } catch (error: any) {
    return sucessResponse(400, error.message, null);
  }
};

const deleteTasks = async (data: any) => {
  try {
    const task = await deleteTasks(data);
    return sucessResponse(200, "Task delete succesfully", task);
  } catch (error: any) {
    return sucessResponse(400, error.message, null);
  }
};

export default {
  addTask,
  updatedTask,
  updateStatus,
  searchTasks,
  deleteTasks,
  fetchAllTask,
  fetchTasksById,
};
