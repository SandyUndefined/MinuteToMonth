import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type EmptyStateProps = {
  title: string;
  description?: string;
  icon?: ReactNode;
  action?: ReactNode;
  className?: string;
};

export function EmptyState({ title, description, icon, action, className }: EmptyStateProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center gap-3 rounded-lg border bg-card p-10 text-center", className)}>
      {icon ? <div className="text-primary">{icon}</div> : null}
      <h2 className="text-h3">{title}</h2>
      {description ? <p className="max-w-prose text-sm text-muted-foreground">{description}</p> : null}
      {action ? <div className="pt-1">{action}</div> : null}
    </div>
  );
}

export function EmptyStateInline({ title, description }: { title: string; description?: string }) {
  return (
    <div className="rounded-md border bg-card p-4">
      <div className="text-sm font-medium">{title}</div>
      {description ? <div className="text-sm text-muted-foreground">{description}</div> : null}
    </div>
  );
}
