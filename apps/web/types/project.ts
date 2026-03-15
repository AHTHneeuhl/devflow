export type Project = {
  id: string;
  name: string;
  description?: string;
};

export type ProjectsResponse = {
  data: Project[];
};
