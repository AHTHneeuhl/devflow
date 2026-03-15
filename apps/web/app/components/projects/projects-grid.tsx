'use client';

import { useProjects } from '@/hooks/use-projects';
import { ProjectCard } from './project-card';

export function ProjectsGrid() {
  const { data: projects, isLoading, error } = useProjects();

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
