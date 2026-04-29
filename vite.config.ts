import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import vike from "vike/plugin";
import { defineConfig, type Plugin } from "vite";
import { readdirSync } from "fs";
import path from "path";

function sitemapPlugin(): Plugin {
  const BASE_URL = "https://gezelligheid.dev";

  return {
    name: "vite-plugin-sitemap",
    generateBundle() {
      let slugs: string[] = [];
      try {
        const workDir = path.resolve(process.cwd(), "work");
        slugs = readdirSync(workDir)
          .filter((f) => f.endsWith(".md"))
          .map((f) => f.replace(/\.md$/, ""));
      } catch {
        // work dir not present, skip dynamic pages
      }

      const pages = [
        { loc: `${BASE_URL}/`, priority: "1.0", changefreq: "monthly" },
        { loc: `${BASE_URL}/work`, priority: "0.8", changefreq: "monthly" },
        ...slugs.map((slug) => ({
          loc: `${BASE_URL}/work/${slug}`,
          priority: "0.7",
          changefreq: "monthly",
        })),
      ];

      const xml = [
        `<?xml version="1.0" encoding="UTF-8"?>`,
        `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
        ...pages.map(
          (p) =>
            `  <url>\n    <loc>${p.loc}</loc>\n    <changefreq>${p.changefreq}</changefreq>\n    <priority>${p.priority}</priority>\n  </url>`
        ),
        `</urlset>`,
      ].join("\n");

      this.emitFile({ type: "asset", fileName: "sitemap.xml", source: xml });
    },
  };
}

export default defineConfig({
  plugins: [vike(), tailwindcss(), vue(), sitemapPlugin()],
});
