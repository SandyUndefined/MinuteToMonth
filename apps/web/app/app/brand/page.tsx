import Link from "next/link";
import { BRANDS } from "@/lib/brands";
import { EmptyState } from "@/components/states/empty-state";

export default async function BrandsIndexPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = await searchParams;
  if (sp?.error === "1") {
    throw new Error("Failed to load brands (demo)");
  }
  if (sp?.delay === "1") {
    await new Promise((r) => setTimeout(r, 800));
  }
  const isEmpty = sp?.empty === "1";

  return (
    <section className="space-y-4">
      <div>
        <h1 className="text-h1">Brands</h1>
        <p className="text-muted-foreground">Pick a brand to manage.</p>
      </div>
      {isEmpty ? (
        <EmptyState title="No brands yet" description="Create your first brand to get started." />
      ) : (
        <ul className="grid gap-3 sm:grid-cols-2">
          {BRANDS.map((b) => (
            <li key={b.id}>
              <Link
                href={`/app/brand/${b.id}`}
                className="block rounded-lg border bg-card p-4 hover:bg-muted"
              >
                <div className="font-medium">{b.name}</div>
                <div className="text-sm text-muted-foreground">/{b.id}</div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
