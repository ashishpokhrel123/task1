export interface CreateTaskDTO {
  task: string;
  description: string;
  user: string;
}

export interface UpdateTaskDTO {
  id: string
  task: string;
  description: string;
  isCompleted:boolean;
  user: string;
}