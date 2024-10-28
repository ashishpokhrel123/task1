import express from "express";
import { ValidateRequest } from "../middleware/validator";
import TaskController from "../controller/task.controller";
import {
  createTaskSchemaValidation,
  updateTaskSchemaValidation,
} from "../validation/taskSchemaValidation";
const router = express.Router();
router
  .route("/create-task")
  .post(ValidateRequest(createTaskSchemaValidation), TaskController.addTask);
router
  .route("/update-task")
  .post(
    ValidateRequest(updateTaskSchemaValidation),
    TaskController.updatedTask
  );
router
  .route("/update-task-status")
  .post(
    ValidateRequest(createTaskSchemaValidation),
    TaskController.updateStatus
  );
router
  .route("/search-task")
  .post(
    ValidateRequest(updateTaskSchemaValidation),
    TaskController.searchTasks
  );
router
  .route("/delete-task")
  .post(
    ValidateRequest(updateTaskSchemaValidation),
    TaskController.deleteTasks
  );
router.route("/all-task").get(TaskController.fetchAllTask);
router.route("/get-task/:id").get(TaskController.fetchTasksById);

export default router;
