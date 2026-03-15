import {
  fetchProject,
  fetchProjects,
  fetchProjectTasks,
} from '@/lib/api/projects';

export async function getProject(
  orgId: string,
  projectId: string,
  token: string,
) {
  return fetchProject(orgId, projectId, token);
}

export async function getProjectTasks(
  orgId: string,
  projectId: string,
  token: string,
) {
  const data = await fetchProjectTasks(orgId, projectId, token);
  return data.data;
}

export async function getProjects(orgId: string, token: string) {
  const data = await fetchProjects(orgId, token);
  return data.data;
}
