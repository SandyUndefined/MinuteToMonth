import { EmptyState } from "@/components/states/empty-state";

export default async function BrandSettingsPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { id } = await params;
  const sp = await searchParams;
  if (sp?.error === "1") {
    throw new Error("Brand settings failed (demo)");
  }
  if (sp?.delay === "1") {
    await new Promise((r) => setTimeout(r, 800));
  }
  const isEmpty = sp?.empty === "1";

  return (
    <section className="space-y-4">
      <div>
        <h1 className="text-h1">Settings · {decodeURIComponent(id)}</h1>
        <p className="text-muted-foreground">Brand-level settings.</p>
      </div>
      {isEmpty ? (
        <EmptyState title="Nothing to configure" description="This brand is using defaults." />
      ) : null}
    </section>
  );
}
