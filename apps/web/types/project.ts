export type Project = {
  id: string;
  name: string;
  description?: string;
};

export type ProjectsResponse = {
  data: Project[];
};

export type CreateProjectInput = {
  name: string;
  description?: string;
};
