"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

/**
 * The running head. Not a nav bar: a line of small type at the top of the
 * page, the way a printed feature carries the publication name and the
 * current chapter in its margin. The chapter folio updates as `[data-chapter]`
 * sections cross the middle of the viewport.
 */
export default function RunningHead() {
  const [folio, setFolio] = useState<string>("");

  useEffect(() => {
    const chapters = Array.from(document.querySelectorAll<HTMLElement>("[data-chapter]"));
    if (chapters.length === 0 || !("IntersectionObserver" in window)) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setFolio(e.target.getAttribute("data-chapter") ?? "");
        }
      },
      // A one-line band across the middle of the viewport: whichever chapter
      // owns that line is the current one.
      { rootMargin: "-48% 0px -50% 0px", threshold: 0 },
    );
    chapters.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  return (
    <header className="folio" aria-label="Running head">
      <a className="folio__name" href="#top">
        Tap Suksumrun
      </a>
      <div className="folio__right">
        <span className="folio__chapter" aria-live="polite" data-empty={folio === "" ? "1" : undefined}>
          {folio}
        </span>
        <ThemeToggle />
      </div>
    </header>
  );
}
