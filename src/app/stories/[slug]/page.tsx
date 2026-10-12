import type { Metadata } from "next";
import type { ComponentProps, ReactElement, ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

import EditorialShell from "@/components/editorial/EditorialShell";
import Colophon from "@/components/editorial/Colophon";
import Facts from "@/components/editorial/Facts";
import { getAllStories, getRelatedStories, getStoryBySlug } from "@/lib/stories";

type Params = { slug: string };

const READ_LABEL = "Read the story";

export function generateStaticParams(): Params[] {
  return getAllStories().map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  if (!story) return { title: "Story not found" };
  return {
    title: `${story.title} · Tap Suksumrun`,
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

function formatDate(iso: string, month: "short" | "long" = "long"): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-GB", { year: "numeric", month, day: "numeric" });
}

/** The plain text of a heading's children, for the running head's folio. */
function textOf(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join("");
  if (node && typeof node === "object" && "props" in node) {
    return textOf((node as ReactElement<{ children?: ReactNode }>).props.children);
  }
  return "";
}

/*
 * The story body is Markdown. Each heading becomes a marker for the running
 * head, and each block reveals as it enters the viewport (the engine's flow
 * device), the same way the front page's prose does.
 */
const mdxComponents = {
  h2: ({ children, ...rest }: ComponentProps<"h2">) => (
    <h2 {...rest} data-chapter={textOf(children)} data-sc-in>
      {children}
    </h2>
  ),
  h3: (props: ComponentProps<"h3">) => <h3 {...props} data-sc-in />,
  p: (props: ComponentProps<"p">) => <p {...props} data-sc-in />,
  blockquote: (props: ComponentProps<"blockquote">) => <blockquote {...props} data-sc-in />,
  ul: (props: ComponentProps<"ul">) => <ul {...props} data-sc-in />,
  ol: (props: ComponentProps<"ol">) => <ol {...props} data-sc-in />,
};

export default async function StoryPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  if (!story) notFound();

  const related = getRelatedStories(story, 2);

  return (
    <EditorialShell>
      <article aria-labelledby="story-h1">
        <header className="title title--page ground--canvas" data-chapter="">
          <div className="ed-wrap ed-grid title__grid">
            <p className="title__mast" data-sc-in>
              <Link href="/stories" className="running__link">
                All stories
              </Link>
              <span aria-hidden="true">·</span>
              <span className="title__project">{story.project}</span>
              <span aria-hidden="true">·</span>
              <span className="sc-nums">{formatDate(story.date)}</span>
              <span aria-hidden="true">·</span>
              <span>{story.readingTime}</span>
            </p>
            <h1 id="story-h1" className="title__h1 sc-display sc-display--lg" data-sc-in>
              {story.title}
            </h1>
            <p className="title__deck sc-lede" data-sc-in>
              {story.summary}
            </p>
          </div>
        </header>

        <div className="chapter story ground--surface">
          {story.heroQuote && (
            <div className="ed-wrap">
              <div className="pull" data-sc-act="flow">
                <div data-sc-reveal="left" data-sc-reveal-at="0.08 0.38">
                  <blockquote className="pull__quote sc-display sc-display--md">{story.heroQuote}</blockquote>
                </div>
              </div>
            </div>
          )}

          <div className="ed-wrap ed-grid spread spread--lead">
            <aside className="spread__side spread__side--sticky story__side">
              <Facts
                rows={[
                  ["Project", story.project],
                  ["Published", formatDate(story.date, "short")],
                  ["Reading time", story.readingTime],
                ]}
              />
              {story.lesson && (
                <div data-sc-in>
                  <p className="story__label">The lesson</p>
                  <p className="story__lesson-text">{story.lesson}</p>
                </div>
              )}
              {story.tags.length > 0 && (
                <ul className="tags" aria-label="Tags" data-sc-in>
                  {story.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              )}
            </aside>
            <div className="spread__main article">
              <MDXRemote source={story.content} components={mdxComponents} />
            </div>
          </div>
        </div>
      </article>

      <footer className="chapter close ground--canvas" data-chapter="Keep reading">
        <div className="ed-wrap close__grid">
          {related.length > 0 && (
            <section className="keep" aria-labelledby="keep-title">
              <h2 id="keep-title" className="keep__label" data-sc-in>
                Keep reading
              </h2>
              <ol className="index__list index__list--keep">
                {related.map((r) => (
                  <li className="index__row" key={r.slug}>
                    <p className="index__when" data-sc-in>
                      <span className="sc-nums">{formatDate(r.date, "short")}</span>
                      <br />
                      <span>{r.project}</span>
                    </p>
                    <div className="index__main" data-sc-in data-sc-stagger="70">
                      <h3 className="index__title sc-display sc-display--md">
                        <Link href={`/stories/${r.slug}`}>{r.title}</Link>
                      </h3>
                      <p className="index__summary">{r.summary}</p>
                      <p className="index__meta">
                        {r.readingTime}
                        {" · "}
                        <Link href={`/stories/${r.slug}`} className="running__link">
                          {READ_LABEL}
                        </Link>
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          )}
          <Colophon
            lead={
              <>
                <Link href="/" className="running__link">
                  Back to the front page
                </Link>
                {" · "}
                <Link href="/stories" className="running__link">
                  All stories
                </Link>
              </>
            }
          />
        </div>
      </footer>
    </EditorialShell>
  );
}
