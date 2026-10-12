"use client";

import { useEffect, useState } from "react";
import { LEDGER } from "@/lib/ledger";

const PEAK_ACT_ID = "ch-5";

/**
 * The decision ledger's fixed margin panel (a bottom strip on phones).
 *
 * Starts empty and hidden. Each `[data-ledger]` marker in the chapters stamps
 * its line into the panel as the reader scrolls past it; stamps persist. When
 * the final chapter's pinned stage comes into view the panel hands off and
 * lets go, and the stage re-sets the record at display size.
 *
 * It also parks the final act at the point where its colophon cues are open
 * whenever keyboard focus lands on one of those links, because the engine's
 * own focus handling cannot do that for a pinned act (see verify.md).
 */
export default function Ledger() {
  const [stamped, setStamped] = useState<number[]>([]);
  const [handoff, setHandoff] = useState(false);

  // Stamp lines as decisions pass the lower third of the viewport.
  useEffect(() => {
    const markers = Array.from(document.querySelectorAll<HTMLElement>("[data-ledger]"));
    if (markers.length === 0 || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const id = Number(e.target.getAttribute("data-ledger"));
          if (!Number.isFinite(id)) continue;
          setStamped((prev) => (prev.includes(id) ? prev : [...prev, id]));
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -38% 0px", threshold: 0 },
    );
    markers.forEach((m) => io.observe(m));
    return () => io.disconnect();
  }, []);

  // Hand off to the stage once the final act is mostly on screen.
  useEffect(() => {
    const act = document.getElementById(PEAK_ACT_ID);
    if (!act) return;
    let ticking = false;
    const check = () => {
      ticking = false;
      const top = act.getBoundingClientRect().top;
      setHandoff(top < window.innerHeight * 0.55);
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(check);
    };
    check();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Keyboard: a link inside the pinned close is only visible once the act has
  // progressed past its cue. Park the act there on focus.
  useEffect(() => {
    const act = document.getElementById(PEAK_ACT_ID);
    if (!act) return;
    const onFocus = (e: FocusEvent) => {
      const el = e.target as HTMLElement | null;
      if (!el || !act.contains(el)) return;
      const cue = el.closest<HTMLElement>("[data-sc-cue]");
      if (!cue) return;
      if (parseFloat(getComputedStyle(cue).opacity || "1") > 0.85) return;
      const travel = Math.max(act.offsetHeight - window.innerHeight, 1);
      window.scrollTo({ top: act.offsetTop + travel * 0.96, behavior: "instant" as ScrollBehavior });
    };
    document.addEventListener("focusin", onFocus);
    return () => document.removeEventListener("focusin", onFocus);
  }, []);

  const count = stamped.length;
  const latest = count > 0 ? LEDGER.find((e) => e.id === stamped[count - 1]) : undefined;

  return (
    <aside
      className="ledger"
      data-count={count}
      data-handoff={handoff ? "1" : undefined}
      aria-label="Decision ledger"
    >
      <p className="ledger__head">
        <span className="ledger__title">Ledger</span>
        <span className="ledger__count sc-nums" aria-label={`${count} decisions on record`}>
          {count}
        </span>
      </p>
      <ol className="ledger__rows">
        {LEDGER.map((entry) => {
          const on = stamped.includes(entry.id);
          return (
            <li key={entry.id} className="ledger__row" data-on={on ? "1" : undefined} aria-hidden={!on}>
              <span className="ledger__num">{entry.chapter}</span>
              <span className="ledger__stamp">{entry.stamp}</span>
            </li>
          );
        })}
      </ol>
      {/* Phone strip: the latest stamp only, read cropped. */}
      <p className="ledger__latest" aria-hidden="true">
        {latest ? (
          <>
            <span className="ledger__num">{latest.chapter}</span> {latest.stamp}
          </>
        ) : null}
      </p>
    </aside>
  );
}
