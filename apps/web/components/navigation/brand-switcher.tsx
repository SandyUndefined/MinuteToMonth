"use client";

import { useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import { BRANDS, getBrandById } from "@/lib/brands";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function getCurrentBrandIdFromPath(pathname: string) {
  const match = pathname.match(/\/app\/brand\/([^/]+)/);
  return match ? decodeURIComponent(match[1]) : undefined;
}

function nextPathForBrand(pathname: string, newId: string) {
  const parts = pathname.split("/");
  const brandIndex = parts.indexOf("brand");
  if (brandIndex !== -1 && parts.length > brandIndex + 1) {
    parts[brandIndex + 1] = encodeURIComponent(newId);
    return parts.join("/");
  }
  return `/app/brand/${encodeURIComponent(newId)}`;
}

export function BrandSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentId = useMemo(() => getCurrentBrandIdFromPath(pathname), [pathname]);
  const current = getBrandById(currentId);

  return (
    <Select
      value={current?.id}
      onValueChange={(val) => {
        const url = nextPathForBrand(pathname, val);
        router.push(url);
      }}
    >
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select brand" />
      </SelectTrigger>
      <SelectContent>
        {BRANDS.map((b) => (
          <SelectItem key={b.id} value={b.id}>
            {b.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

