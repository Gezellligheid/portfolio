import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import { marked } from "marked";
import type { PageContextServer } from "vike/types";

export type Data = {
  title: string;
  description: string;
  tags: string[];
  client?: string;
  image?: string;
  html: string;
  slug: string;
};

function parseFrontmatter(raw: string): { data: Record<string, unknown>; content: string } {
  const normalized = raw.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  const match = normalized.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) return { data: {}, content: normalized };
  return {
    data: (yaml.load(match[1]) ?? {}) as Record<string, unknown>,
    content: match[2],
  };
}

export async function data(pageContext: PageContextServer): Promise<Data> {
  const slug = pageContext.routeParams?.slug ?? "";
  const filePath = path.resolve(process.cwd(), "work", `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Project not found: ${slug}`);
  }

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data: fm, content } = parseFrontmatter(raw);
  const html = await marked(content);

  return {
    slug,
    title: String(fm.title ?? slug),
    description: String(fm.description ?? ""),
    tags: Array.isArray(fm.tags) ? (fm.tags as string[]) : [],
    client: fm.client ? String(fm.client) : undefined,
    image: fm.image ? String(fm.image) : undefined,
    html,
  };
}
