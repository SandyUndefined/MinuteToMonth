import Link from "next/link";
import { EmptyState } from "@/components/states/empty-state";
import { Button } from "@/components/ui/button";

export default async function AppHomePage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = await searchParams;
  if (sp?.error === "1") {
    throw new Error("Dashboard failed to load (demo)");
  }
  if (sp?.delay === "1") {
    await new Promise((r) => setTimeout(r, 800));
  }

  const isEmpty = sp?.empty === "1";

  return (
    <section className="space-y-4">
      <div>
        <h1 className="text-h1">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to your workspace.</p>
      </div>
      {isEmpty ? (
        <EmptyState
          title="No activity yet"
          description="Once you create a brand and generate content, your recent activity will appear here."
          action={
            <Button asChild>
              <Link href="/app/brand">Create your first brand</Link>
            </Button>
          }
        />
      ) : null}
    </section>
  );
}
