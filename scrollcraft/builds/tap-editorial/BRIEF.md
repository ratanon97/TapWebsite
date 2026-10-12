# BRIEF: tapwebsite, chaptered editorial rebuild

Interviewed on 2026-10-11. Eight structural decisions answered by Tap via two
four-question passes; the remaining topics are authored from the existing site
and its two published stories, and are labelled as such. Nothing below is a
user quotation unless marked `[Tap]`.

Target: the Next.js home page at `src/app/page.tsx`, deployed to
`https://tapwebsite-eta.vercel.app`. The engine is copied verbatim into
`public/scrollcraft.js` and `src/app/scrollcraft.css`; the markup is React.
The `/stories` routes are untouched.

---

## The eight topics

1. **Vibe.** `[authored]` Printed feature, not a landing page. Quiet, exact,
   figures on the record. References: a Monocle long-read spread; a company
   annual report's notes section (the part with the real numbers); a legal
   decision record (who agreed to what, in writing).
2. **The scroll journey.** `[Tap]` "Story first": title page, one chapter per
   signature story (the wallet, the fraud block), the current role as a ledger
   of decisions, a short record of the path (Indorama and before), colophon.
   Tools and the stat counters are cut.
3. **Energy curve.** `[authored]` Calm open. Rises through the two stories
   (the Friday call, the second QR screen). Settles on the role's figures.
   Nearly silent through the path. One loud moment: the ledger. Quiet close.
4. **Feeling, stage by stage, and the one moment.** See the curve below.
   `[Tap]` The one moment: "The ledger totals itself." Near the end the running
   decision log stops being a sidebar and takes the full page: every line
   stamped on the way down stacks into one record of how Tap decides.
5. **The thing no site does.** `[Tap]` "A running decision log": a small fixed
   ledger that accumulates one line each time the visitor passes a real
   decision on the page.
6. **Range.** `[Tap]` Editorial. Paper, folios, generous measure, restraint.
   Serif stays because the work is long-form; the brand already sets display
   in Playfair Display.
7. **Structure.** `[Tap]` Chapters. Distinct chapters with hard cuts, not one
   unbroken world.
8. **Assets.** `[Tap]` Typographic, no imagery. No photos, no brand kit, no
   generation. Type and real figures are the imagery. Zero spend.

## Step 1 answers

- **What is this, for whom.** `[authored from site]` The personal site of Tap
  Suksumrun, Associate Technical Product Manager at Omise, for hiring managers
  and fintech people who want to know how Tap thinks before they talk.
- **What the visitor must believe.** `[Tap]` Tap turns regulated complexity
  into decisions that hold.
- **What they do next.** `[Tap]` Read a story. One label, used everywhere:
  **Read the story**.
- **Existing assets.** The two MDX stories (verbatim copy is reused, nothing
  invented), the role bullets, the bio, the CV PDF, LinkedIn, email.
- **Art direction.** No world. Paper ground in light, off-black in dark,
  one amber accent at two lightnesses keyed to the ground (the site's existing
  two-stop accent). Playfair Display for display, Geist for text. Inter and
  JetBrains Mono leave the home page.

---

## Grammar: chaptered editorial

Chosen by Tap in question 7 and 6 together. Why the other seven lost:

- Filmic one-shot: needs a continuous film and a scrub hero; there is no
  footage and Tap chose chapters.
- Live surface: the product is Tap, not software. Nothing to operate.
- Continuous world: requires generated photoreal legs; Tap chose no imagery.
- Typographic poster: close, but the page's asset is two long stories and real
  figures, not one sentence. A poster cannot hold a ledger.
- Gallery/catalog: the visitor's question is "should I believe this person",
  not "what are the options".
- Split stage: there is no two-sided argument running the whole page.
- Rhythmic cutlist: the opposite of the energy curve Tap described.

Grammar constraints honoured: no fixed bar (a running head with the chapter
folio instead), title page with no media, hard-cut grounds per chapter (no
drift), no magnet, no spotlight, no scrub, no pinned crossfade type act, CTA
as running text in a colophon.

The one `pin` on the page is the peak, and it is not a crossfade type act:
the content is the ledger stacking, driven from `--sc-p` by page-local code.

## Signature move: the decision ledger

A fixed margin panel (desktop: right margin; phone: a one-line strip at the
bottom edge) that starts empty. Each chapter carries `data-ledger` markers on
its real decisions; passing one stamps a line into the panel (chapter numeral,
a short verb phrase, the real figure). Stamps persist; scrolling back up does
not remove them. At Chapter V the panel hands off: it fades out as the pinned
stage re-typesets every stamped line at display size, one per step, then
closes the record with the count and the belief sentence. Only real figures
appear, all taken from the two stories and the role bullets.

Seven entries, all real:

| # | Chapter | Stamp | Figure |
|---|---|---|---|
| 1 | I | Aligned the room on the question, not the answer | 250,000+ users, 2 partners, 1 regulator |
| 2 | I | Traded a month's delay for a two-week slip | 4 days of real blockers, 3 weeks of "not looked yet" |
| 3 | II | Put the check where the money moves | 20 days of code, 2 months on the identity problem |
| 4 | II | Block by machine, terminate by human | 14 name-only hits that were a data problem |
| 5 | III | Funded the wallet as a platform, not project by project | ~THB 100M e-money float |
| 6 | III | Traced the onboarding cost to the code | 62 tickets, ~30 code sites, 4 of 22 services |
| 7 | IV | Left chemical engineering for software delivery | 6 years, fintech and chemicals |

## Fingerprint gate

Registry at `scrollcraft/FINGERPRINTS.md` is empty. First build; nothing to
clear. Row appended after shipping.

---

## The feeling curve

Written before the acts. One line per act: emotion, then the cause.

```
0  Title    Stillness     ink on paper, one claim settling line by line, a contents list, nothing else moving
1  Ch I     Tension       the Friday 3pm call: one pull quote wipes across the page, the facts stand in a column, the first stamp lands in the margin
2  Ch II    Unease        the second QR screen nobody designed; the three switches (observe, enforce, lock) move under the reader's hand and stop at observe, because that is where they really are
3  Ch III   Confidence    the role's real figures bloom in the prose, one by one, the ledger fills fastest here
4  Ch IV    Calm          the path compressed to a few small lines, short stagger, the quietest screen on the page (authored silence before the peak)
5  Ch V     Recognition   the peak: the margin panel lets go and every stamp re-sets at display size, stacking into one record, then the count, then the belief
6  Colophon Resolve       inside the same stage: smallest type on the site, "Read the story" as a line of running text, email, LinkedIn, CV, and it holds
```

Adjacent acts carry different feelings. Ch IV is deliberately the quietest.

## The peak

Chapter V. The sentence a visitor would say:

> "There was this little log in the margin keeping a tally of every decision
> while I read, and at the end it took over the whole page and I was looking
> at all seven of them stacked up."

It gets the largest span on the page (3.4 viewport-heights against flow
chapters of 1.0 to 1.8), the silence before it (Ch IV), and the only pinned
act.

## The tell-someone sentence

It's the site where a ledger in the margin keeps count of every decision as
you read, and at the end it fills the page.

## Authored silence

Chapter IV (the path) is intentionally the quietest act: small type, short
stagger, no figures counting, no reveal. If the harness reports a quiet
stretch there, it is authored. There is no empty viewport anywhere; every
screen has content.

---

## Score table (as built)

| Act | Beat | Primary device | Why this one |
|---|---|---|---|
| 0 Title | Stillness | `flow/in` with a staggered three-line h1 | A claim settling line by line is the quietest possible open. (Planned as `kinetic`; kinetic is keyed to scroll progress, and the title is on screen at load, so the entrance is time-based instead.) |
| 1 Ch I | Tension | `reveal` (left wipe on the pull quote, in its own short flow act) + `flow/in` | A wipe is a change of state; the Friday call is the state change. Its own act so the wipe lands at the same viewport position on every screen size |
| 2 Ch II | Unease | bespoke switch ladder (IntersectionObserver over the three rollout paragraphs; CSS transitions) + `flow/in` | The switches flip as the reader reaches the paragraph that flips them, and settle on observe, because that is the truth |
| 3 Ch III | Confidence | `count` (entry-fired, real figures) + `flow/in` | Numbers that land are the argument of this chapter |
| 4 Ch IV | Calm | `flow/in` at short stagger | Administrative, compressed, the silence before the peak |
| 5 Ch V | Recognition | `pin` (span 3.4) + bespoke ledger hand-off | The peak needs the frame to hold while the record stacks. Ground inverted: the largest visual change on the page |
| 6 Colophon | Resolve | hold cues inside the same pinned stage | The close resolves and holds; it is the last act |

Device families: flow/in, reveal, bespoke state ladder, count, pin. Five.
No family twice in a row. Zero scrub acts. One pin. Measured length: 12.4
viewport-heights at 1440x900, 13.7 at 390x844, across 6 chapters and 2
engine acts.

## Feel check (cold, from the contact sheets, 2026-10-11)

| Act | Intended | Felt | Verdict |
|---|---|---|---|
| Title | Stillness | still | match |
| Ch I | Tension | attention: the wipe, then the facts column, then the first stamp | match |
| Ch II | Unease | curiosity: the switches pull the eye more than the second-screen quote does | **diff** |
| Ch III | Confidence | confident: the figures ticking | match |
| Ch IV | Calm | quiet | match |
| Ch V | Recognition | the page flips to the other ground and the record stacks: the biggest change on the sheet | match |
| Colophon | Resolve | holds, with content on the last screen | match |

Ch II reads as curiosity rather than unease. The switches are an honest
model of the rollout and they are the chapter's device, so this is recorded
as a diff, not rewritten. The second-screen pull quote stays as the unease
beat; the ladder is what the reader remembers.

Peak check: Chapter V is the largest visual change on every sheet (ground
inversion plus the record stacking) and has the most scroll room (3.4
viewport-heights against flow chapters). Chapter IV in front of it is the
quietest screen. The last screen holds with the colophon on it.

## Running head (nav)

Fixed, hairline-thin, two items: the name set small at left (links to top),
the current chapter folio at right ("II · The fraud block"), updated by an
IntersectionObserver over `[data-chapter]`. The theme toggle sits beside the
folio. No CTA in the chrome: the grammar forbids it and the contents list on
the title page is the navigation.
