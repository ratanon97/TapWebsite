/**
 * The decision ledger: the one bespoke interaction on the home page.
 *
 * Every entry is a real decision taken from a published story or the current
 * role, with a real figure. Chapters place `data-ledger="<id>"` markers on the
 * paragraph where the decision is made; the fixed margin panel stamps the
 * matching line when the reader scrolls past it; the final chapter re-sets the
 * whole record at display size. Nothing here is invented, and nothing here
 * should be added without a source in `src/content/stories` or the role.
 */
export type LedgerEntry = {
  id: number;
  /** Roman numeral of the chapter the decision belongs to. */
  chapter: string;
  /** The decision, as a short verb phrase. Read cropped on phones: keep it short. */
  stamp: string;
  /** The real figure or consequence. Desktop and the final chapter only. */
  detail: string;
};

export const LEDGER: LedgerEntry[] = [
  {
    id: 1,
    chapter: "I",
    stamp: "Aligned the room on the question, not the answer",
    detail: "250,000+ users, two partners, one regulator, one page with no recommendations on it.",
  },
  {
    id: 2,
    chapter: "I",
    stamp: "Traded a month's delay for a two-week slip",
    detail: "Four days of real blockers, three weeks of “we haven't looked at it yet.”",
  },
  {
    id: 3,
    chapter: "II",
    stamp: "Put the check where the money moves",
    detail: "Twenty days of code. Two months on the identity problem underneath it.",
  },
  {
    id: 4,
    chapter: "II",
    stamp: "Block by machine, terminate by human",
    detail: "Fourteen name-only hits that turned out to be a data problem, not fourteen mules.",
  },
  {
    id: 5,
    chapter: "III",
    stamp: "Funded the wallet as a platform, not project by project",
    detail: "Six stakeholder interviews, one workshop, about THB 100M of e-money float protected.",
  },
  {
    id: 6,
    chapter: "III",
    stamp: "Traced the onboarding cost to the code",
    detail: "62 launch tickets, about 30 code sites, 4 of 22 services. Months to weeks, estimated.",
  },
  {
    id: 7,
    chapter: "IV",
    stamp: "Left chemical engineering for software delivery",
    detail: "Six years leading projects across fintech and chemicals.",
  },
];

/** Number words for the record's closing line, so it never reads "7 decisions". */
export const COUNT_WORDS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
