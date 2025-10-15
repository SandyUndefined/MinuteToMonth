import Link from "next/link";
import { Zap, Clock, BarChart, Shield, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Skip link for accessibility */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-card focus:px-3 focus:py-2 focus:text-sm focus:shadow"
      >
        Skip to main content
      </a>

      <header className="border-b border-border">
        <div className="container mx-auto flex items-center justify-between py-4">
          <Link href="/" className="text-h3 font-semibold">
            MinuteToMonth
          </Link>
          <nav aria-label="Primary" className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:underline underline-offset-4">
              Features
            </a>
            <a href="#faq" className="hover:underline underline-offset-4">
              FAQ
            </a>
            <Link
              href="/app"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-primary-foreground shadow-sm transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Launch App
            </Link>
          </nav>
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section className="container mx-auto grid grid-cols-1 items-center gap-10 py-16 md:grid-cols-2 md:py-24">
          <div>
            <h1 className="font-headline text-display tracking-tight">
              Turn minutes into monthly momentum
            </h1>
            <p className="mt-4 max-w-prose text-muted-foreground text-body">
              MinuteToMonth helps you convert small, focused efforts into sustained growth. Plan fast, execute clearly, and measure what matters.
            </p>
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row">
              <Link
                href="/app"
                className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Get started
              </Link>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-md border border-border bg-background px-5 py-3 text-sm font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                See features
              </a>
            </div>
            <ul className="mt-6 grid max-w-lg grid-cols-1 gap-3 text-sm text-muted-foreground sm:grid-cols-2">
              {[
                "No credit card required",
                "Accessible by design",
                "Fast, lightweight UI",
                "Dark mode supported",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 aria-hidden className="h-4 w-4 text-secondary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Simple illustration placeholder to avoid CLS */}
          <div className="relative h-56 w-full overflow-hidden rounded-lg border border-border bg-muted/40 shadow-sm md:h-80">
            <div className="absolute inset-0 grid grid-cols-6 gap-2 p-4 opacity-70">
              <div className="col-span-4 rounded-md bg-card"></div>
              <div className="col-span-2 rounded-md bg-card"></div>
              <div className="col-span-6 mt-2 rounded-md bg-card"></div>
              <div className="col-span-3 mt-2 rounded-md bg-card"></div>
              <div className="col-span-3 mt-2 rounded-md bg-card"></div>
            </div>
            <span className="sr-only">Product preview placeholder</span>
          </div>
        </section>

        {/* Features */}
        <section id="features" aria-labelledby="features-title" className="border-t border-border bg-muted/20 py-16 md:py-20">
          <div className="container mx-auto">
            <h2 id="features-title" className="text-title font-headline">Features that compound</h2>
            <p className="mt-2 max-w-prose text-muted-foreground">
              The essentials you need to turn consistent minutes into meaningful monthly outcomes.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon={<Clock aria-hidden className="h-6 w-6 text-primary" />}
                title="Plan in minutes"
                description="Create tight, focused plans without the overhead. Templates keep you moving."
              />
              <FeatureCard
                icon={<Zap aria-hidden className="h-6 w-6 text-primary" />}
                title="Clear execution"
                description="Prioritize what matters most and cut noise with simple daily focuses."
              />
              <FeatureCard
                icon={<BarChart aria-hidden className="h-6 w-6 text-primary" />}
                title="Measure momentum"
                description="See trendlines and leading indicators—track progress, not just outcomes."
              />
              <FeatureCard
                icon={<Shield aria-hidden className="h-6 w-6 text-primary" />}
                title="Privacy first"
                description="Your data stays yours. Export anytime and control what’s shared."
              />
              <FeatureCard
                icon={<CheckCircle2 aria-hidden className="h-6 w-6 text-primary" />}
                title="Built-in a11y"
                description="Keyboard-friendly and screen reader tested to keep everyone moving."
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" aria-labelledby="faq-title" className="container mx-auto py-16 md:py-20">
          <h2 id="faq-title" className="text-title font-headline">Frequently asked questions</h2>
          <div className="mt-6 divide-y divide-border rounded-md border border-border bg-card">
            <FaqItem
              question="What is MinuteToMonth?"
              answer="A simple way to turn small, consistent efforts into month-over-month progress by focusing on clear actions and meaningful trends."
            />
            <FaqItem
              question="Is there a free trial?"
              answer="Yes. You can explore the core features without a credit card."
            />
            <FaqItem
              question="Will it work for teams?"
              answer="Teams can align on shared goals while individuals keep personal focus. Shared dashboards are on the roadmap."
            />
            <FaqItem
              question="Can I export my data?"
              answer="Absolutely. Your data is portable so you can back it up or analyze it elsewhere."
            />
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-8 text-sm text-muted-foreground md:flex-row">
          <p>
            © {new Date().getFullYear()} MinuteToMonth. All rights reserved.
          </p>
          <nav aria-label="Legal" className="flex items-center gap-6">
            <Link href="#" className="hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="#" className="hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="#" className="hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex h-full flex-col rounded-lg border border-border bg-card p-5 shadow-sm transition-colors">
      <div className="flex items-center gap-3">
        {icon}
        <h3 className="text-h3 font-semibold">{title}</h3>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group open:bg-muted/20">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-2 px-4 py-3 font-medium">
        <span className="text-body">{question}</span>
        <svg
          className="h-4 w-4 shrink-0 transition-transform group-open:rotate-180"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </summary>
      <div className="px-4 pb-4 text-sm text-muted-foreground">{answer}</div>
    </details>
  );
}
