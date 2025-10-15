import type { ReactNode } from "react";
import { TopNav } from "@/components/navigation/top-nav";
import { Sidebar } from "@/components/navigation/sidebar";
import { Breadcrumbs } from "@/components/navigation/breadcrumbs";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <TopNav />
      <div className="mx-auto flex w-full max-w-screen-2xl flex-1 gap-0 px-4 sm:px-6">
        <Sidebar />
        <main className="flex-1">
          <div className="mx-auto max-w-5xl space-y-4 py-6">
            <Breadcrumbs />
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

