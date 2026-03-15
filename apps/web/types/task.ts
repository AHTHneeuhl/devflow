export type Task = {
  id: string;
  title: string;
  status: 'todo' | 'in_progress' | 'done';
};

export type TasksResponse = {
  data: Task[];
};
