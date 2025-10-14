import type { Preview } from "@storybook/react";
import React from "react";
import "../app/globals.css";
import "./preview.css";

const preview: Preview = {
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Global theme for components",
      defaultValue: "light",
      toolbar: {
        icon: "circlehollow",
        items: [
          { value: "light", title: "Light" },
          { value: "dark", title: "Dark" },
        ],
        showName: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const isDark = context.globals.theme === "dark";
      if (typeof document !== "undefined") {
        document.documentElement.classList.toggle("dark", isDark);
      }
      return (
        <div className="min-h-screen bg-background text-foreground font-sans p-8">
          <Story />
        </div>
      );
    },
  ],
  parameters: {
    controls: { expanded: true },
    layout: "centered",
  },
};

export default preview;

