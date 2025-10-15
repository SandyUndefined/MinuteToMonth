import { EmptyState } from "@/components/states/empty-state";

export default async function BrandContentPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { id } = await params;
  const sp = await searchParams;
  if (sp?.error === "1") {
    throw new Error("Content failed to load (demo)");
  }
  if (sp?.delay === "1") {
    await new Promise((r) => setTimeout(r, 800));
  }
  const isEmpty = sp?.empty === "1";

  return (
    <section className="space-y-4">
      <div>
        <h1 className="text-h1">Content · {decodeURIComponent(id)}</h1>
        <p className="text-muted-foreground">Manage content for this brand.</p>
      </div>
      {isEmpty ? (
        <EmptyState title="No content yet" description="Generate your first month of content for this brand." />
      ) : null}
    </section>
  );
}
