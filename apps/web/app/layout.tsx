import type { Metadata } from "next";
import { Inter, Sora, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PostHogProvider } from "@/components/providers/posthog-provider";
import { Suspense } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MinuteToMonth — Turn minutes into monthly momentum",
    template: "%s — MinuteToMonth",
  },
  description:
    "Convert small, focused efforts into sustained growth with simple planning, clear execution, and momentum tracking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${inter.variable} ${geistMono.variable} min-h-screen bg-background text-foreground font-sans antialiased`}>
        <Suspense>
          <PostHogProvider />
        </Suspense>
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
