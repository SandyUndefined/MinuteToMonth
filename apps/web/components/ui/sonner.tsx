"use client";

import * as React from "react";
import { Toaster as Sonner, type ToasterProps } from "sonner";

function useDarkTheme() {
  const [theme, setTheme] = React.useState<"light" | "dark">(() => {
    if (typeof document === "undefined") return "light";
    return document.documentElement.classList.contains("dark") ? "dark" : "light";
  });

  React.useEffect(() => {
    if (typeof document === "undefined") return;
    const el = document.documentElement;
    const observer = new MutationObserver(() => {
      setTheme(el.classList.contains("dark") ? "dark" : "light");
    });
    observer.observe(el, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return theme;
}

export function Toaster(props: ToasterProps) {
  const theme = useDarkTheme();
  return <Sonner theme={theme} richColors closeButton toastOptions={{ classNames: { toast: "bg-card text-foreground border", actionButton: "bg-primary text-primary-foreground" } }} {...props} />;
}

