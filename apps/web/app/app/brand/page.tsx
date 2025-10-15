import Link from "next/link";
import { BRANDS } from "@/lib/brands";

export default function BrandsIndexPage() {
  return (
    <section className="space-y-4">
      <div>
        <h1 className="text-h1">Brands</h1>
        <p className="text-muted-foreground">Pick a brand to manage.</p>
      </div>
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
    </section>
  );
}
