# Fingerprints

Every site you build with **scroll-craft** gets one row here, appended after it
ships. The registry exists so your next build can prove it is a different page
rather than a re-skin of one you already made.

This file is **yours**. It starts empty on purpose: the gate is about not
repeating *yourself*, so it has nothing to say until you have built something.

The rules and the gate live in the skill's
`references/uniqueness.md`. Short version:

**A new build must differ from EVERY row below on at least 4 of the 6
dimensions.** Four against each row individually, not four on average across the
table. If a planned build fails, change the plan. Never edit a row to make room
for it.

The six dimensions are: **grammar**, **nav treatment**, **hero device**,
**act-sequence shape**, **close pattern**, **signature move**.

Dimension 6 is free, because a signature move is unique by definition. So the
gate really asks for three more out of the remaining five, and a build that
changes only grammar and world will fail it.

---

## The registry

| Build | Grammar | Nav treatment | Hero device | Act-sequence shape | Close pattern | Signature move | World | Port |
|---|---|---|---|---|---|---|---|---|
| tap-editorial (2026-10-11) | Chaptered editorial | Running head: name at left, chapter folio at right, theme toggle; no bar, no CTA | Title page: type on paper, staggered three-line h1, contents list in the right margin | flow/in > reveal (own act) > state ladder > count > flow/in > pin; 6 chapters, 2 engine acts, 12.4vh desktop / 13.7vh phone | Colophon inside the pinned peak: record totals, belief line, CTA as running text, holds | Decision ledger: fixed margin panel of ruled lines that stamps a real decision as each is passed, then hands off to a full-page record | None (typographic, paper and off-black, one amber at two lightnesses) | Next.js (React markup, engine untouched in public/) |


---

## What is taken

Add a bullet here whenever a build claims something a later build should avoid
reusing: a grammar, a nav treatment, a close pattern, a signature move, an
act-count-and-length band. The shared columns are what the next build inherits
as a constraint, so writing them down is the whole point.

Nothing is taken yet.

---

## Appending a row

After shipping, add one line to the table and one bullet to **What is taken** if
the build claimed something new. Fill every column. Say what the build shares
with existing rows.

Rows are append-only. A build that has been superseded stays in the table,
because the space it occupies is still occupied.

---

## Worked example

The skill's author kept a registry of twelve builds across eight page grammars.
If you want to see what a filled-in table looks like, and which shapes tend to
collide, read `EXAMPLES.md` in the scroll-craft repository. Treat it as
illustration only: those rows are somebody else's builds and they do **not**
constrain yours.
- tap-editorial claims: chaptered editorial grammar; a running head with a
  chapter folio as the only chrome; a type-only title page with the contents
  in the margin; a colophon close inside the pinned peak; the decision ledger
  (margin panel that stamps as you pass, then fills the page); an inverted
  ground at the peak.
- tap-editorial's inner pages (`/stories`, `/stories/<slug>`, 2026-10-12)
  extend the same row: same running head (name links to the front page),
  ruled index rows with a reveal per row, a sticky facts-and-lesson margin on
  each story, a colophon close. No new row; see the brief's last section.
