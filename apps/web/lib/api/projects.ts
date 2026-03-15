import { apiFetch } from '@/services/api-client';
import { CreateProjectInput, Project, ProjectsResponse } from '@/types/project';
import { TasksResponse } from '@/types/task';

export async function fetchProject(
  orgId: string,
  projectId: string,
  token: string,
) {
  return apiFetch<Project>(`/org/${orgId}/projects/${projectId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function fetchProjectTasks(
  orgId: string,
  projectId: string,
  token: string,
) {
  return apiFetch<TasksResponse>(`/org/${orgId}/projects/${projectId}/tasks`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function fetchProjects(
  orgId: string,
  token: string,
): Promise<ProjectsResponse> {
  return apiFetch(`/org/${orgId}/projects`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function createProjectApi(
  orgId: string,
  token: string,
  data: CreateProjectInput,
) {
  return apiFetch(`/org/${orgId}/projects`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
}
