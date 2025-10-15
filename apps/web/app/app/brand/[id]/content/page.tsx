export default async function BrandContentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <section className="space-y-2">
      <h1 className="text-h1">Content · {decodeURIComponent(id)}</h1>
      <p className="text-muted-foreground">Manage content for this brand.</p>
    </section>
  );
}
