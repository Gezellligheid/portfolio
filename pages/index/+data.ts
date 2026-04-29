import yaml from "js-yaml";

const markdownFiles = import.meta.glob<string>("/work/*.md", { as: "raw", eager: true });

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
  const posts = Object.entries(markdownFiles).map(([filePath, raw]): WorkPost => {
    const slug = filePath.replace("/work/", "").replace(".md", "");
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
