'use client';

import { getProjects } from '@/services/project-service';
import { useAuthStore } from '@/store/auth-store';
import { useOrgStore } from '@/store/org-store';
import { useQuery } from '@tanstack/react-query';
import { ProjectCard } from './project-card';

export function ProjectsGrid() {
  const { token } = useAuthStore();
  const { orgId } = useOrgStore();

  const {
    data: projects,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['projects', orgId],
    queryFn: () => getProjects(orgId as string, token as string),
    enabled: !!orgId && !!token,
  });

  if (isLoading) {
    return <div className="mt-6">Loading projects...</div>;
  }

  if (error) {
    return <div className="mt-6 text-red-500">Failed to load projects</div>;
  }

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projects?.map((p) => (
        <ProjectCard
          key={p.id}
          id={p.id}
          name={p.name}
          description={p.description}
        />
      ))}
    </div>
  );
}
