'use client';

import { useQuery } from '@tanstack/react-query';
import { useAuthStore } from '@/store/auth-store';
import { useOrgStore } from '@/store/org-store';
import { getProjectTasks } from '@/services/project-service';

export function useProjectTasks(projectId: string) {
  const { token } = useAuthStore();
  const { orgId } = useOrgStore();

  return useQuery({
    queryKey: ['tasks', orgId, projectId],
    queryFn: () => getProjectTasks(orgId!, projectId, token!),
    enabled: !!orgId && !!projectId && !!token,
  });
}
