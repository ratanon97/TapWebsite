import "./scrollcraft.css";
import "./editorial.css";

import RunningHead from "@/components/editorial/RunningHead";
import Ledger from "@/components/editorial/Ledger";
import LadderSync from "@/components/editorial/LadderSync";
import ScrollCraftMount from "@/components/editorial/ScrollCraftMount";
import {
  ChapterFraud,
  ChapterLedger,
  ChapterPath,
  ChapterRole,
  ChapterWallet,
  TitlePage,
} from "@/components/editorial/chapters";
import { getStoryBySlug } from "@/lib/stories";

// Without JavaScript the engine never runs, so nothing it would reveal must
// start hidden. The engine's own stylesheet hides cued and staggered content
// until it mounts; this restores it.
const NOSCRIPT_CSS = `
  [data-sc-in], [data-sc-stagger] > *, [data-sc-cue] { opacity: 1 !important; transform: none !important; }
  [data-sc-reveal] { clip-path: none !important; }
  .ledger { display: none !important; }
`;

export default function Home() {
  const wallet = getStoryBySlug("omise-wallet-integration");
  const fraud = getStoryBySlug("wallet-blackwatch-integration");

  return (
    <div id="sc-root" className="editorial">
      <noscript>
        <style>{NOSCRIPT_CSS}</style>
      </noscript>
      <div className="sc-grain" aria-hidden="true" />
      <RunningHead />
      <Ledger />
      <main id="top">
        <TitlePage />
        <ChapterWallet readingTime={wallet?.readingTime ?? "5 min read"} />
        <ChapterFraud readingTime={fraud?.readingTime ?? "9 min read"} />
        <ChapterRole />
        <ChapterPath />
        <ChapterLedger />
      </main>
      <LadderSync />
      <ScrollCraftMount />
    </div>
  );
}
