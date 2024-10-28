import axios from "axios";

interface ICreateTask {
  name: string;
  description: string;
  user: string;
}

interface IGetTaskById {
  id: string;
}

interface IUpdateTask {
  data: any;
  token: string;
}

interface ISearchTasks {
  query: string;
}

interface IDeleteTask {
  id: string;
  token: string;
}

const TaskService = {
  createTask: async ({ name, description, user }: ICreateTask) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}task/create-task`,
        { name, description, user }
      );
      return response.data;
    } catch (error) {
      console.error("Error creating task:", error);
      throw error;
    }
  },
  getFetchTask: async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}task/all-task`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching tasks:", error);
      throw error;
    }
  },

  getFetchTaskById: async ({ id }: IGetTaskById) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}task/get-task/${id}`
      );
      return response.data;
    } catch (error) {
      console.error(`Error fetching task with ID ${id}:`, error);
      throw error;
    }
  },
  updateTaskById: async ({ data, token }: IUpdateTask) => {
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}task/update-task`,
        data,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error updating task:", error);
      throw error;
    }
  },

  updateTaskStatus: async ({ data, token }: IUpdateTask) => {
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}task/update-task-status`,
        data,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error updating task status:", error);
      throw error;
    }
  },

  searchTasks: async ({ query }: ISearchTasks) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}task/search-task`,
        { query }
      );
      return response.data;
    } catch (error) {
      console.error("Error searching tasks:", error);
      throw error;
    }
  },

  deleteTaskById: async ({ id, token }: IDeleteTask) => {
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}task/delete-task/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` }, 
        }
      );
      return response.data;
    } catch (error) {
      console.error(`Error deleting task with ID ${id}:`, error);
      throw error;
    }
  },
};

export default TaskService;
