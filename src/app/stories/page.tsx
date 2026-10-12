import type { Metadata } from "next";
import Link from "next/link";

import EditorialShell from "@/components/editorial/EditorialShell";
import Colophon from "@/components/editorial/Colophon";
import { COUNT_WORDS } from "@/lib/ledger";
import { getAllStories } from "@/lib/stories";

export const metadata: Metadata = {
  title: "Stories · Tap Suksumrun",
  description:
    "Long-form field notes from the middle of fintech product work: integrations, stakeholder alignment, and the decisions that held.",
};

const READ_LABEL = "Read the story";

function formatDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-GB", { year: "numeric", month: "short", day: "numeric" });
}

function capitalise(s: string): string {
  return s.replace(/^./, (c) => c.toUpperCase());
}

export default function StoriesIndexPage() {
  const stories = getAllStories();
  const count = COUNT_WORDS[stories.length] ?? String(stories.length);

  return (
    <EditorialShell>
      <section className="title title--page ground--canvas" data-chapter="" aria-labelledby="stories-h1">
        <div className="ed-wrap ed-grid title__grid">
          <p className="title__mast" data-sc-in>
            Tap Suksumrun. Stories.
          </p>
          <h1 id="stories-h1" className="title__h1 sc-display sc-display--xl" data-sc-in>
            Field notes.
          </h1>
          <p className="title__deck sc-lede" data-sc-in>
            Long-form pieces from the middle of the work: fintech integrations, stakeholder
            alignment, and turning regulated complexity into decisions that hold. {capitalise(count)}{" "}
            so far, newest first.
          </p>
        </div>
      </section>

      <section className="chapter index ground--surface" data-chapter={`${capitalise(count)} stories`} aria-label="All stories">
        <div className="ed-wrap">
          {stories.length === 0 ? (
            <p className="index__summary">No stories yet.</p>
          ) : (
            <ol className="index__list">
              {stories.map((story) => (
                <li className="index__row" key={story.slug}>
                  <p className="index__when" data-sc-in>
                    <span className="sc-nums">{formatDate(story.date)}</span>
                    <br />
                    <span>{story.project}</span>
                  </p>
                  <div className="index__main">
                    <div className="index__head" data-sc-in data-sc-stagger="70">
                      <h2 className="index__title sc-display sc-display--md">
                        <Link href={`/stories/${story.slug}`}>{story.title}</Link>
                      </h2>
                      <p className="index__summary">{story.summary}</p>
                    </div>
                    {story.heroQuote && (
                      <div className="pull pull--index" data-sc-act="flow">
                        <div data-sc-reveal="left" data-sc-reveal-at="0.08 0.38">
                          <blockquote className="pull__quote sc-display">{story.heroQuote}</blockquote>
                        </div>
                      </div>
                    )}
                    <p className="index__meta" data-sc-in>
                      {story.readingTime}
                      {" · "}
                      <Link href={`/stories/${story.slug}`} className="running__link">
                        {READ_LABEL}
                      </Link>
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          )}
        </div>
      </section>

      <footer className="chapter close ground--canvas" data-chapter="Colophon">
        <div className="ed-wrap close__grid">
          <Colophon
            lead={
              <Link href="/" className="running__link">
                Back to the front page
              </Link>
            }
          />
        </div>
      </footer>
    </EditorialShell>
  );
}
