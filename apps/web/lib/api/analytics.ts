import { AnalyticsMetrics } from '@/types/analytics';

export async function getAnalytics(): Promise<AnalyticsMetrics> {
  const res = await fetch('/api/analytics', {
    credentials: 'include',
  });

  return res.json();
}
