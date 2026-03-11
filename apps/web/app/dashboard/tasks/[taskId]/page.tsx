'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useAuthStore } from '@/store/auth-store';
import { useOrgStore } from '@/store/org-store';

type Task = {
  id: string;
  title: string;
  description?: string;
};

export default function TaskDetailsPage() {
  const [task, setTask] = useState<Task | null>(null);
  const { taskId } = useParams();
  const { token } = useAuthStore();
  const { orgId } = useOrgStore();

  useEffect(() => {
    async function loadTask() {
      const res = await fetch(
        `http://localhost:4000/org/${orgId}/tasks/${taskId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const data = await res.json();
      setTask(data);
    }

    loadTask();
  }, []);

  if (!task) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold">{task.title}</h1>
      <p className="text-gray-500 mt-2">{task.description}</p>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Comments</h2>

        <div className="space-y-3">
          <div className="border rounded p-3 text-sm">Example comment...</div>
        </div>
      </div>
    </div>
  );
}
