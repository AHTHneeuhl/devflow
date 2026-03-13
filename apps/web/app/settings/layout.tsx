import { ReactNode } from 'react';
import Link from 'next/link';

export default function SettingsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="p-6 max-w-4xl space-y-6">
      <h1 className="text-3xl font-semibold">Settings</h1>

      <nav className="flex gap-4 text-sm">
        <Link href="/settings/billing" className="hover:underline">
          Billing
        </Link>

        <Link href="/settings/workspace" className="hover:underline">
          Workspace
        </Link>

        <Link href="/settings/integrations" className="hover:underline">
          Integrations
        </Link>
      </nav>

      {children}
    </div>
  );
}
