import { EmptyState } from "@/components/states/empty-state";

export default async function SettingsPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = await searchParams;
  if (sp?.error === "1") {
    throw new Error("Settings failed to load (demo)");
  }
  if (sp?.delay === "1") {
    await new Promise((r) => setTimeout(r, 800));
  }
  const isEmpty = sp?.empty === "1";

  return (
    <section className="space-y-4">
      <div>
        <h1 className="text-h1">Settings</h1>
        <p className="text-muted-foreground">Adjust your preferences here.</p>
      </div>
      {isEmpty ? (
        <EmptyState title="No settings to show" description="Your account is using default settings." />
      ) : null}
    </section>
  );
}
