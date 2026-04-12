import "server-only";

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

export type Story = {
  slug: string;
  title: string;
  date: string;
  project: string;
  tags: string[];
  summary: string;
  lesson: string;
  heroQuote?: string;
  featured: boolean;
  readingTime: string;
  content: string;
};

const CONTENT_DIR = path.join(process.cwd(), "src", "content", "stories");

function isStoryFile(filename: string): boolean {
  return filename.endsWith(".mdx") && !filename.startsWith("_");
}

function parseStory(filename: string): Story {
  const filePath = path.join(CONTENT_DIR, filename);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  const slug = (data.slug as string) ?? filename.replace(/\.mdx$/, "");

  return {
    slug,
    title: data.title ?? "Untitled",
    date: data.date ?? "",
    project: data.project ?? "Other",
    tags: Array.isArray(data.tags) ? data.tags : [],
    summary: data.summary ?? "",
    lesson: data.lesson ?? "",
    heroQuote: data.heroQuote,
    featured: Boolean(data.featured),
    readingTime: readingTime(content).text,
    content,
  };
}

export function getAllStories(): Story[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter(isStoryFile)
    .map(parseStory)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getStoryBySlug(slug: string): Story | null {
  const stories = getAllStories();
  return stories.find((s) => s.slug === slug) ?? null;
}

export function getFeaturedStories(limit = 3): Story[] {
  const all = getAllStories();
  const featured = all.filter((s) => s.featured);
  return (featured.length > 0 ? featured : all).slice(0, limit);
}

export function getRelatedStories(story: Story, limit = 2): Story[] {
  return getAllStories()
    .filter((s) => s.slug !== story.slug)
    .map((s) => {
      let score = 0;
      if (s.project === story.project) score += 3;
      for (const tag of s.tags) if (story.tags.includes(tag)) score += 1;
      return { story: s, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ story }) => story);
}
