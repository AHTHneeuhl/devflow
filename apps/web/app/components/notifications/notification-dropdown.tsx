'use client';

import { useNotificationStore } from '@/store/notification-store';
import { NotificationItem } from './notification-item';

export function NotificationDropdown() {
  const notifications = useNotificationStore((s) => s.notifications);

  return (
    <div className="absolute right-0 mt-2 w-80 bg-white border rounded-lg shadow-lg">
      <div className="p-3 border-b font-medium">Notifications</div>

      <div className="max-h-96 overflow-y-auto">
        {notifications.length === 0 ? (
          <p className="p-4 text-sm text-gray-500">No notifications</p>
        ) : (
          notifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              notification={notification}
            />
          ))
        )}
      </div>
    </div>
  );
}
