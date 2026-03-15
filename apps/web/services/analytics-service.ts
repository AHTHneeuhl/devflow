import { getAnalytics } from '@/lib/api/analytics';

export const analyticsService = {
  metrics: () => getAnalytics(),
};
