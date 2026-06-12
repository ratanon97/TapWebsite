"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import { slideIn, cardVariants, easeOutExpo } from "@/lib/motion";

export type SignatureStoryCard = {
  slug: string;
  title: string;
  project: string;
  summary: string;
  lesson: string;
  readingTime: string;
};

export default function SignatureStories({ stories }: { stories: SignatureStoryCard[] }) {
  if (stories.length === 0) return null;

  return (
    <section
      id="stories"
      className="relative overflow-hidden px-8 py-24 sm:py-32 md:px-12 border-t border-[var(--color-border)]"
    >
      <div className="relative mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-6">
          <SectionLabel number="03" label="Signature Stories" />
          <Link
            href="/stories"
            className="hidden text-sm font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent-warm)] sm:inline"
          >
            View all →
          </Link>
        </div>

        <motion.h2
          className="mt-8 max-w-2xl text-3xl font-[family-name:var(--font-playfair)] tracking-tight sm:text-4xl md:text-5xl"
          style={{ lineHeight: 1.1, letterSpacing: "-0.02em" }}
          variants={slideIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: easeOutExpo }}
        >
          The process behind the work.
        </motion.h2>
        <motion.p
          className="mt-4 max-w-xl text-base font-light leading-relaxed text-[var(--color-muted)]"
          variants={slideIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Long-form pieces on the projects, tensions, and lessons that a line on a CV can&apos;t carry.
        </motion.p>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stories.map((story, i) => (
            <motion.div
              key={story.slug}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: easeOutExpo,
              }}
            >
              <Link
                href={`/stories/${story.slug}`}
                className="card-ring group relative flex h-full flex-col overflow-hidden rounded-2xl bg-[var(--color-card)] p-7 sm:p-9 transition-transform duration-300 hover:-translate-y-1.5"
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-transparent transition-all duration-300 group-hover:bg-[var(--color-accent-warm)]" />

                <p className="text-xs font-medium uppercase tracking-wider text-[var(--color-accent-warm)]">
                  {story.project} · {story.readingTime}
                </p>
                <h3
                  className="mt-3 font-[family-name:var(--font-playfair)] text-2xl tracking-tight sm:text-3xl"
                  style={{ lineHeight: 1.15, letterSpacing: "-0.01em" }}
                >
                  {story.title}
                </h3>
                <p className="mt-4 text-sm font-light leading-relaxed text-[var(--color-muted)]">
                  {story.summary}
                </p>

                <div className="mt-auto pt-6">
                  <div className="translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-xs font-medium uppercase tracking-wider text-[var(--color-muted)]">
                      Takeaway
                    </p>
                    <p className="mt-1 text-sm font-light italic text-[var(--color-fg)]">
                      {story.lesson}
                    </p>
                  </div>
                  <p className="mt-4 text-sm font-medium text-[var(--color-accent-warm)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Read the story →
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 sm:hidden">
          <Link
            href="/stories"
            className="text-sm font-medium text-[var(--color-accent-warm)]"
          >
            View all stories →
          </Link>
        </div>
      </div>
    </section>
  );
}
