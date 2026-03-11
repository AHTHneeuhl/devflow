import { NotificationBell } from '@/app/components/notifications/notification-bell';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="h-14 border-b flex items-center justify-between px-6">
        <h1 className="font-semibold">DevFlow</h1>

        <div className="flex items-center gap-4">
          <NotificationBell />
        </div>
      </header>

      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
