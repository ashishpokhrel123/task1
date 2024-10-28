import mongoose from "mongoose";
const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    unique: true,
  },

  isCompleted: {
    type: Boolean,
    default: false,
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
  },
});

export const Task = mongoose.model("Task", taskSchema);

