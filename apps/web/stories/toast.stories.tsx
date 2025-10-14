"use client";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

const meta: Meta = {
  title: "UI/Toast",
};
export default meta;

export const Default: StoryObj = {
  render: () => (
    <div className="space-y-4">
      <Button onClick={() => toast.success("Brand toast example")}>Show Toast</Button>
      <Toaster />
    </div>
  ),
};

