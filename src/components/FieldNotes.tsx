"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const slideIn = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const rowVariant = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

export type FieldNoteRow = {
  slug: string;
  title: string;
  date: string;
  project: string;
  readingTime: string;
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

export default function FieldNotes({ notes }: { notes: FieldNoteRow[] }) {
  if (notes.length === 0) return null;

  return (
    <section className="relative overflow-hidden bg-[var(--color-surface)] px-8 py-24 sm:py-32 md:px-12">
      <div
        className="pointer-events-none absolute left-[-5%] bottom-[10%] h-80 w-80 rounded-full blur-3xl"
        style={{ backgroundColor: "color-mix(in oklab, var(--color-accent-warm) 6%, transparent)" }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-6">
          <motion.p
            className="text-sm font-medium uppercase tracking-widest text-[var(--color-muted)]"
            variants={slideIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[var(--color-accent-warm)]">04</span> / Field Notes
          </motion.p>
          <Link
            href="/stories"
            className="text-sm font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent-warm)]"
          >
            Archive →
          </Link>
        </div>

        <motion.p
          className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-[var(--color-muted)]"
          variants={slideIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Shorter pieces, posted as they land. The latest from the middle of the work.
        </motion.p>

        <ul className="mt-12 divide-y divide-[var(--color-border)]">
          {notes.map((note, i) => (
            <motion.li
              key={note.slug}
              variants={rowVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <Link
                href={`/stories/${note.slug}`}
                className="group flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:gap-8"
              >
                <span className="w-28 shrink-0 text-xs font-medium uppercase tracking-wider text-[var(--color-muted)]">
                  {formatDate(note.date)}
                </span>
                <span className="flex-1 font-[family-name:var(--font-playfair)] text-xl tracking-tight text-[var(--color-fg)] transition-colors group-hover:text-[var(--color-accent-warm)] sm:text-2xl">
                  {note.title}
                </span>
                <span className="shrink-0 text-xs font-medium uppercase tracking-wider text-[var(--color-accent-warm)]">
                  {note.project}
                </span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
