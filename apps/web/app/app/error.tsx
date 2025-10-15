"use client";

import { PageError } from "@/components/states/page-error";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <PageError error={error} onRetry={reset} />;
}

