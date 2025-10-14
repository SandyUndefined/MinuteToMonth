import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const metadata = {
  title: "Playground",
};

export default function PlaygroundPage() {
  return (
    <main className="container mx-auto py-12">
      <h1 className="mb-6 text-2xl font-semibold">UI Playground</h1>
      <div className="grid gap-6 max-w-md">
        <div className="grid gap-2">
          <label htmlFor="text" className="text-sm text-muted-foreground">
            Text Field
          </label>
          <Input id="text" placeholder="Type here" />
        </div>
        <div className="flex items-center gap-3">
          <Button>
            <Search className="h-4 w-4" />
            Button
          </Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
        </div>
      </div>
    </main>
  );
}

