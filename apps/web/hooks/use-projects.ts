'use client';

import { useQuery } from '@tanstack/react-query';
import { useAuthStore } from '@/store/auth-store';
import { useOrgStore } from '@/store/org-store';
import { getProjects } from '@/services/project-service';

export function useProjects() {
  const { token } = useAuthStore();
  const { orgId } = useOrgStore();

  return useQuery({
    queryKey: ['projects', orgId],
    queryFn: () => getProjects(orgId!, token!),
    enabled: !!orgId && !!token,
  });
}
