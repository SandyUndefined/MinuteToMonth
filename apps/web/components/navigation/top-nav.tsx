"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LayoutGrid } from "lucide-react";

export function TopNav() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-screen-2xl items-center gap-3 px-4 sm:px-6">
        <Link href="/app" className="group flex items-center gap-2 text-foreground">
          <LayoutGrid className="size-5 text-primary group-hover:text-primary-hover transition-colors" />
          <span className="font-semibold">MinuteToMonth</span>
        </Link>
        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

