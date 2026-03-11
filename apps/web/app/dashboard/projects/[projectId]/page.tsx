'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useAuthStore } from '@/store/auth-store';

type Project = {
  id: string;
  name: string;
  description?: string;
};

export default function ProjectDetailsPage() {
  const { projectId } = useParams();
  const { token } = useAuthStore();
  const [project, setProject] = useState<Project | null>(null);

  const orgId = localStorage.getItem('orgId');

  useEffect(() => {
    async function loadProject() {
      const res = await fetch(
        `http://localhost:4000/org/${orgId}/projects/${projectId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const data = await res.json();
      setProject(data);
    }

    loadProject();
  }, []);

  if (!project) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold">{project.name}</h1>
      <p className="text-gray-500 mt-2">{project.description}</p>
    </div>
  );
}
