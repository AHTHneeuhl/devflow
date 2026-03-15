'use client';

import { MetricCard } from '@/app/components/analytics/metric-card';
import { analyticsService } from '@/services/analytics-service';
import { useAnalyticsStore } from '@/store/analytics-store';
import { useEffect } from 'react';
import { toast } from 'sonner';

export default function AnalyticsPage() {
  const { metrics, setMetrics, loading, setLoading } = useAnalyticsStore();

  useEffect(() => {
    setLoading(true);

    analyticsService
      .metrics()
      .then(setMetrics)
      .catch((err) => {
        console.error('Failed to load analytics', err);
        toast.error('Failed to load analytics');
      })
      .finally(() => setLoading(false));
  }, [setMetrics, setLoading]);

  if (loading) {
    return <p className="text-sm text-gray-500">Loading analytics...</p>;
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Analytics</h1>

      <div className="grid grid-cols-4 gap-4">
        <MetricCard
          title="Total Projects"
          value={metrics?.totalProjects ?? 0}
        />

        <MetricCard title="Total Tasks" value={metrics?.totalTasks ?? 0} />

        <MetricCard
          title="Completed Tasks"
          value={metrics?.completedTasks ?? 0}
        />

        <MetricCard
          title="Active Members"
          value={metrics?.activeMembers ?? 0}
        />
      </div>
    </div>
  );
}
