"use client";

import { useEffect } from "react";
import posthog from "posthog-js";
import { usePathname, useSearchParams } from "next/navigation";

export function PostHogProvider() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    if (!key) return;
    posthog.init(key, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
      capture_pageview: false,
    });
  }, []);

  useEffect(() => {
    // Fire a page view on route updates
    const url = typeof window !== "undefined" ? window.location.href : pathname || "/";
    posthog?.capture?.("$pageview", {
      $current_url: url,
      pathname,
      search: searchParams?.toString() || "",
    });
  }, [pathname, searchParams]);

  return null;
}

