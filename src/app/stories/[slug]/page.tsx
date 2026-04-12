import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import {
  getAllStories,
  getRelatedStories,
  getStoryBySlug,
} from "@/lib/stories";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllStories().map((story) => ({ slug: story.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<Params> },
): Promise<Metadata> {
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  if (!story) return { title: "Story not found" };
  return {
    title: `${story.title} — Tap Suksumrun`,
    description: story.summary,
    openGraph: {
      title: story.title,
      description: story.summary,
      type: "article",
      publishedTime: story.date,
      tags: story.tags,
    },
  };
}

function formatDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function StoryPage(
  { params }: { params: Promise<Params> },
) {
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  if (!story) notFound();

  const related = getRelatedStories(story, 2);

  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <article className="relative px-8 pt-40 pb-24 sm:pt-48 md:px-12">
          <div
            className="pointer-events-none absolute right-[-5%] top-[10%] h-96 w-96 rounded-full blur-3xl"
            style={{ backgroundColor: "color-mix(in oklab, var(--color-accent-warm) 7%, transparent)" }}
            aria-hidden
          />
          <div className="relative mx-auto max-w-3xl">
            <Link
              href="/stories"
              className="text-sm font-medium uppercase tracking-widest text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent-warm)]"
            >
              ← All stories
            </Link>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-wider text-[var(--color-accent-warm)]">
              <span>{story.project}</span>
              <span className="text-[var(--color-muted)]">·</span>
              <span className="text-[var(--color-muted)]">{formatDate(story.date)}</span>
              <span className="text-[var(--color-muted)]">·</span>
              <span className="text-[var(--color-muted)]">{story.readingTime}</span>
            </div>

            <h1
              className="mt-5 text-4xl font-[family-name:var(--font-playfair)] tracking-tight sm:text-5xl md:text-6xl"
              style={{ lineHeight: 1.05, letterSpacing: "-0.02em" }}
            >
              {story.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-[var(--color-muted)]">
              {story.summary}
            </p>

            {story.heroQuote && (
              <blockquote className="mt-10 border-l-2 border-[var(--color-accent-warm)] pl-6 font-[family-name:var(--font-playfair)] text-2xl italic leading-snug text-[var(--color-fg)]">
                “{story.heroQuote}”
              </blockquote>
            )}

            <div className="mt-14 story-prose">
              <MDXRemote source={story.content} />
            </div>

            <div className="mt-16 flex flex-wrap gap-2 border-t border-[var(--color-border)] pt-8">
              {story.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full px-3 py-1 text-xs font-medium text-[var(--color-accent-warm)]"
                  style={{ backgroundColor: "color-mix(in oklab, var(--color-accent-warm) 15%, transparent)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>

        {related.length > 0 && (
          <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)] px-8 py-20 md:px-12">
            <div className="mx-auto max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-widest text-[var(--color-muted)]">
                <span className="text-[var(--color-accent-warm)]">Related</span> / Keep reading
              </p>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/stories/${r.slug}`}
                    className="card-ring group block rounded-2xl bg-[var(--color-card)] p-7 transition-transform duration-300 hover:-translate-y-1"
                  >
                    <p className="text-xs font-medium uppercase tracking-wider text-[var(--color-accent-warm)]">
                      {r.project} · {r.readingTime}
                    </p>
                    <h3
                      className="mt-3 font-[family-name:var(--font-playfair)] text-2xl tracking-tight"
                      style={{ lineHeight: 1.15 }}
                    >
                      {r.title}
                    </h3>
                    <p className="mt-3 text-sm font-light leading-relaxed text-[var(--color-muted)]">
                      {r.summary}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

      </main>
      <Footer />
    </>
  );
}
