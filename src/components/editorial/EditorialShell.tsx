import "@/app/scrollcraft.css";
import "@/app/editorial.css";
import "@/app/stories/stories.css";

import RunningHead from "./RunningHead";
import ScrollCraftMount from "./ScrollCraftMount";

// Without JavaScript the engine never runs, so nothing it would reveal must
// start hidden. The engine's own stylesheet hides cued and staggered content
// until it mounts; this restores it.
const NOSCRIPT_CSS = `
  [data-sc-in], [data-sc-stagger] > *, [data-sc-cue] { opacity: 1 !important; transform: none !important; }
  [data-sc-reveal] { clip-path: none !important; }
`;

/**
 * The shell for the inner pages (the stories index and each story): the same
 * chaptered editorial grammar as the front page, with the running head's name
 * pointing back to the front page instead of the top of the current one.
 */
export default function EditorialShell({ children }: { children: React.ReactNode }) {
  return (
    <div id="sc-root" className="editorial">
      <noscript>
        <style>{NOSCRIPT_CSS}</style>
      </noscript>
      <div className="sc-grain" aria-hidden="true" />
      <RunningHead homeHref="/" />
      <main id="top">{children}</main>
      <ScrollCraftMount />
    </div>
  );
}
