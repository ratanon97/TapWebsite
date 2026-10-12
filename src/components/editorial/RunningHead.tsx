"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

/**
 * The running head. Not a nav bar: a line of small type at the top of the
 * page, the way a printed feature carries the publication name and the
 * current chapter in its margin.
 *
 * The folio is the `data-chapter` of the last marker whose top has passed a
 * line just under the middle of the viewport. Markers can be whole chapters
 * (the front page) or single headings (a story), and a fast scroll cannot
 * skip one, because the state is read from positions, not from crossings.
 *
 * `homeHref` is where the name goes: the top of the page on the front page,
 * the front page itself everywhere else.
 */
export default function RunningHead({ homeHref = "#top" }: { homeHref?: string }) {
  const [folio, setFolio] = useState<string>("");

  useEffect(() => {
    const marks = Array.from(document.querySelectorAll<HTMLElement>("[data-chapter]"));
    if (marks.length === 0) return;

    let raf = 0;
    const read = () => {
      raf = 0;
      const line = window.innerHeight * 0.48;
      let current = "";
      for (const el of marks) {
        if (el.getBoundingClientRect().top > line) break;
        current = el.getAttribute("data-chapter") ?? "";
      }
      setFolio((prev) => (prev === current ? prev : current));
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(read);
    };

    read();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    // Web fonts move every marker when they land; re-read once they have.
    document.fonts?.ready.then(schedule).catch(() => undefined);

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const name = "Tap Suksumrun";

  return (
    <header className="folio" aria-label="Running head">
      {homeHref.startsWith("/") ? (
        <Link className="folio__name" href={homeHref}>
          {name}
        </Link>
      ) : (
        <a className="folio__name" href={homeHref}>
          {name}
        </a>
      )}
      <div className="folio__right">
        <span className="folio__chapter" aria-live="polite" data-empty={folio === "" ? "1" : undefined}>
          {folio}
        </span>
        <ThemeToggle />
      </div>
    </header>
  );
}
