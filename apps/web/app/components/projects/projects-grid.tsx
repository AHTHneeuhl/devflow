'use client';

import { getProjects } from '@/services/project-service';
import { useAuthStore } from '@/store/auth-store';
import { useOrgStore } from '@/store/org-store';
import { useEffect, useState } from 'react';
import { ProjectCard } from './project-card';

type Project = {
  id: string;
  name: string;
  description?: string;
};

export function ProjectsGrid({ refreshKey }: { refreshKey: number }) {
  const { token } = useAuthStore();
  const [projects, setProjects] = useState<Project[]>([]);
  const { orgId } = useOrgStore();

  async function loadProjects() {
    const data = await getProjects(orgId as string, token as string);
    setProjects(data);
  }

  useEffect(() => {
    loadProjects();
  }, [refreshKey]);

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((p) => (
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
