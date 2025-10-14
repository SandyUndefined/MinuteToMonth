"use client";

import { Button } from "@/components/ui/button";
import * as Sentry from "@sentry/nextjs";

export function SentryDemo() {
  return (
    <div className="grid gap-2">
      <p className="text-sm text-muted-foreground">
        Click to capture a handled error to Sentry.
      </p>
      <Button
        variant="destructive"
        onClick={() => {
          try {
            throw new Error("Sentry demo handled error");
          } catch (err) {
            Sentry.captureException(err);
          }
        }}
      >
        Send handled error
      </Button>
    </div>
  );
}

