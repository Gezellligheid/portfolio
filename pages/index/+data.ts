import fs from "fs";
import path from "path";
import yaml from "js-yaml";

export type WorkPost = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  client?: string;
};

export type Data = { posts: WorkPost[] };

function parseFrontmatter(raw: string): { data: Record<string, unknown>; content: string } {
  const normalized = raw.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  const match = normalized.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) return { data: {}, content: normalized };
  return {
    data: (yaml.load(match[1]) ?? {}) as Record<string, unknown>,
    content: match[2],
  };
}

export async function data(): Promise<Data> {
  const workDir = path.resolve(process.cwd(), "work");
  if (!fs.existsSync(workDir)) return { posts: [] };

  const files = fs.readdirSync(workDir).filter((f) => f.endsWith(".md"));
  const posts = files.map((file): WorkPost => {
    const slug = path.basename(file, ".md");
    const raw = fs.readFileSync(path.join(workDir, file), "utf-8");
    const { data: fm } = parseFrontmatter(raw);
    return {
      slug,
      title: String(fm.title ?? slug),
      description: String(fm.description ?? ""),
      tags: Array.isArray(fm.tags) ? (fm.tags as string[]) : [],
      client: fm.client ? String(fm.client) : undefined,
    };
  });

  return { posts };
}
