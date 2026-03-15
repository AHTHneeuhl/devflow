'use client';

import { useState } from 'react';
import { useAuthStore } from '@/store/auth-store';
import { useOrgStore } from '@/store/org-store';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createProject } from '@/services/project-service';

export function CreateProjectModal({ onClose }: { onClose: () => void }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const queryClient = useQueryClient();
  const { token } = useAuthStore();
  const { orgId } = useOrgStore();

  const mutation = useMutation({
    mutationFn: (data: { name: string; description?: string }) =>
      createProject(orgId!, token!, data),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['projects'],
      });

      onClose();
    },
  });

  function handleCreate() {
    if (!orgId || !token) return;

    mutation.mutate({
      name,
      description,
    });
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40">
      <div className="relative bg-white p-6 rounded-lg w-[400px]">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        <h2 className="text-lg font-semibold mb-4">Create Project</h2>

        <input
          placeholder="Project name"
          className="w-full border p-2 rounded mb-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          placeholder="Description"
          className="w-full border p-2 rounded mb-4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          className="px-4 py-2 bg-blue-600 text-white rounded"
          onClick={handleCreate}
          disabled={mutation.isPending}
        >
          {mutation.isPending ? 'Creating...' : 'Create'}
        </button>
      </div>
    </div>
  );
}
