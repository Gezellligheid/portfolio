import { marked } from "marked";

function parseAttrs(str: string): Record<string, string> {
  const attrs: Record<string, string> = {};
  const re = /(\w+)="([^"]*)"/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(str)) !== null) {
    attrs[m[1]] = m[2];
  }
  return attrs;
}

export type ContentBlock =
  | { type: "html"; html: string }
  | { type: "quote"; html: string }
  | { type: "callout"; calloutType: string; html: string }
  | { type: "text-image"; src: string; alt: string; position: "left" | "right"; html: string };

export function parseMarkdown(content: string): ContentBlock[] {
  const containerRe = /^:::(\w[\w-]*)([^\n]*)\n([\s\S]*?)^:::/gm;
  const blocks: ContentBlock[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = containerRe.exec(content)) !== null) {
    if (match.index > lastIndex) {
      const html = marked.parse(content.slice(lastIndex, match.index));
      if (html.trim()) blocks.push({ type: "html", html });
    }

    const [full, name, attrs, inner] = match;
    const a = parseAttrs(attrs.trim());
    const html = marked.parse(inner.trim());

    switch (name) {
      case "quote":
        blocks.push({ type: "quote", html });
        break;
      case "callout":
        blocks.push({ type: "callout", calloutType: a.type ?? "info", html });
        break;
      case "text-image":
        blocks.push({
          type: "text-image",
          src: a.src ?? "",
          alt: a.alt ?? "",
          position: (a.position as "left" | "right") ?? "right",
          html,
        });
        break;
      default:
        blocks.push({ type: "html", html: `<div class="md-container md-container--${name}">${html}</div>` });
    }

    lastIndex = match.index + full.length;
  }

  if (lastIndex < content.length) {
    const html = marked.parse(content.slice(lastIndex));
    if (html.trim()) blocks.push({ type: "html", html });
  }

  return blocks.length ? blocks : [{ type: "html", html: marked.parse(content) }];
}
