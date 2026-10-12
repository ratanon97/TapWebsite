"use client";

import { useEffect } from "react";

/**
 * Flips the three switches in Chapter II as the paragraphs beside them cross
 * the middle of the viewport: "built" (observe on), "test" (all three on),
 * "live" (observe only). Scrolling back up walks the states back, so the
 * ladder always matches the paragraph the reader is on.
 */
export default function LadderSync() {
  useEffect(() => {
    const ladder = document.querySelector<HTMLElement>(".ladder");
    const paras = Array.from(document.querySelectorAll<HTMLElement>("[data-ladder]"));
    if (!ladder || paras.length === 0 || !("IntersectionObserver" in window)) return;

    const order = ["off", "built", "test", "live"];
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const state = e.target.getAttribute("data-ladder") ?? "off";
          if (e.isIntersecting) {
            ladder.dataset.state = state;
          } else if (e.boundingClientRect.top > 0 && ladder.dataset.state === state) {
            // Left through the bottom of the band: step back one state.
            const i = Math.max(order.indexOf(state) - 1, 0);
            ladder.dataset.state = order[i];
          }
        }
      },
      { rootMargin: "-42% 0px -42% 0px", threshold: 0 },
    );
    paras.forEach((p) => io.observe(p));
    return () => io.disconnect();
  }, []);

  return null;
}
