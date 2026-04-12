# Stories

Each `.mdx` file in this folder becomes a story at `/stories/<slug>` and shows up automatically on the homepage (Signature Stories if `featured: true`, Field Notes for the latest 5).

Files prefixed with `_` (like `_template.mdx`) are ignored.

## Adding a story

1. Copy `_template.mdx` to `<slug>.mdx` (the filename becomes the URL by default).
2. Fill in the frontmatter.
3. Write the body in MDX (Markdown + JSX).
4. Commit.

No code edits needed — the homepage grid, field notes list, `/stories` index, and individual story routes update automatically.

## Frontmatter schema

| Field       | Type     | Required | Notes                                                          |
| ----------- | -------- | -------- | -------------------------------------------------------------- |
| `title`     | string   | yes      | The story title (shown on card and as H1 on story page)        |
| `slug`      | string   | no       | URL slug, defaults to filename without extension               |
| `date`      | string   | yes      | ISO date (`YYYY-MM-DD`) — stories are sorted newest first      |
| `project`   | string   | yes      | `Omise`, `Indorama`, or `Other` — used for related stories     |
| `tags`      | string[] | yes      | Short tags used for related-story matching                     |
| `summary`   | string   | yes      | One-sentence hook shown on cards and list rows                 |
| `lesson`    | string   | yes      | The takeaway — shown on card hover                             |
| `heroQuote` | string   | no       | Pull-quote shown at top of the story page                      |
| `featured`  | boolean  | no       | If true, appears in the Signature Stories grid on the homepage |
