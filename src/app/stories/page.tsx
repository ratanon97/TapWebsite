import type { Metadata } from "next";
import Link from "next/link";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { getAllStories } from "@/lib/stories";

export const metadata: Metadata = {
  title: "Stories — Tap Suksumrun",
  description:
    "Long-form field notes on fintech, product management, and bridging business and engineering.",
};

function formatDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function StoriesIndexPage() {
  const stories = getAllStories();

  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <section className="relative px-8 pt-40 pb-20 sm:pt-48 md:px-12">
          <div
            className="pointer-events-none absolute left-[-5%] top-[15%] h-96 w-96 rounded-full blur-3xl"
            style={{ backgroundColor: "color-mix(in oklab, var(--color-accent-warm) 7%, transparent)" }}
            aria-hidden
          />
          <div className="relative mx-auto max-w-4xl">
            <p className="text-sm font-medium uppercase tracking-widest text-[var(--color-muted)]">
              <span className="text-[var(--color-accent-warm)]">All</span> / Stories
            </p>
            <h1
              className="mt-6 text-5xl font-[family-name:var(--font-playfair)] tracking-tight sm:text-6xl md:text-7xl"
              style={{ lineHeight: 1.05, letterSpacing: "-0.02em" }}
            >
              Field notes.
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-[var(--color-muted)]">
              Long-form pieces from the middle of the work — fintech integrations, stakeholder alignment, and the process of turning complexity into clarity.
            </p>
          </div>
        </section>

        <section className="px-8 pb-32 md:px-12">
          <div className="mx-auto max-w-4xl">
            {stories.length === 0 ? (
              <p className="text-[var(--color-muted)]">No stories yet — check back soon.</p>
            ) : (
              <ul className="divide-y divide-[var(--color-border)]">
                {stories.map((story) => (
                  <li key={story.slug}>
                    <Link
                      href={`/stories/${story.slug}`}
                      className="group flex flex-col gap-3 py-8 transition-colors sm:flex-row sm:items-baseline sm:gap-8"
                    >
                      <div className="flex w-40 shrink-0 items-baseline gap-3 text-xs font-medium uppercase tracking-wider text-[var(--color-muted)]">
                        <span>{formatDate(story.date)}</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-medium uppercase tracking-wider text-[var(--color-accent-warm)]">
                          {story.project} · {story.readingTime}
                        </p>
                        <h2
                          className="mt-2 font-[family-name:var(--font-playfair)] text-2xl tracking-tight text-[var(--color-fg)] transition-colors group-hover:text-[var(--color-accent-warm)] sm:text-3xl"
                          style={{ lineHeight: 1.15 }}
                        >
                          {story.title}
                        </h2>
                        <p className="mt-3 text-base font-light leading-relaxed text-[var(--color-muted)]">
                          {story.summary}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
