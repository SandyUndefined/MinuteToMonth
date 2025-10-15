export default async function BrandSettingsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <section className="space-y-2">
      <h1 className="text-h1">Settings · {decodeURIComponent(id)}</h1>
      <p className="text-muted-foreground">Brand-level settings.</p>
    </section>
  );
}
