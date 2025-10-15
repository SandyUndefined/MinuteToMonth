"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Crumb = {
  label: string;
  href: string;
};

const LABEL_MAP: Record<string, string> = {
  app: "App",
  brand: "Brands",
  overview: "Overview",
  content: "Content",
  settings: "Settings",
};

function titleize(segment: string) {
  return segment
    .replaceAll("-", " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export function Breadcrumbs() {
  const pathname = usePathname();
  // Build cumulative links for each segment
  const segments = pathname.split("/").filter(Boolean);

  const crumbs: Crumb[] = [];
  let pathAcc = "";
  for (const seg of segments) {
    pathAcc += `/${seg}`;
    const label = LABEL_MAP[seg] ?? titleize(decodeURIComponent(seg));
    crumbs.push({ label, href: pathAcc });
  }

  if (crumbs.length === 0) return null;

  return (
    <div className="flex items-center gap-1 text-sm text-muted-foreground">
      <Link href="/" className="hover:text-foreground">Home</Link>
      {crumbs.map((c, i) => (
        <span key={c.href} className="flex items-center gap-1">
          <span className="text-muted-foreground">/</span>
          {i === crumbs.length - 1 ? (
            <span className="text-foreground" aria-current="page">{c.label}</span>
          ) : (
            <Link href={c.href} className="hover:text-foreground">{c.label}</Link>
          )}
        </span>
      ))}
    </div>
  );
}

