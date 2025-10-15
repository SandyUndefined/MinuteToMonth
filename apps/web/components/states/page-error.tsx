"use client";

import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PageError({
  error,
  onRetry,
  title = "Something went wrong",
  description,
}: {
  error?: unknown;
  onRetry?: () => void;
  title?: string;
  description?: string;
}) {
  const message = description || (error instanceof Error ? error.message : undefined);
  return (
    <div className="mx-auto max-w-2xl rounded-lg border bg-card p-6">
      <div className="flex items-start gap-3">
        <AlertTriangle className="mt-0.5 size-5 text-destructive" />
        <div className="space-y-1">
          <h2 className="text-h3">{title}</h2>
          {message ? <p className="text-sm text-muted-foreground">{message}</p> : null}
          {onRetry ? (
            <div className="pt-2">
              <Button onClick={onRetry} variant="outline">Try again</Button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

