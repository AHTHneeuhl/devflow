import { Notification } from '@/types/notification';

export async function fetchNotifications(): Promise<Notification[]> {
  const res = await fetch('/api/notifications');

  if (!res.ok) {
    throw new Error('Failed to fetch notifications');
  }

  return res.json();
}
