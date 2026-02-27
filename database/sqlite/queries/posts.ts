import type { Database } from "better-sqlite3";

export interface Post {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  tags: string;
  published: number;
  created_at: string;
  updated_at: string;
}

export interface PostInput {
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  tags?: string;
  published?: number;
}

export function getAllPosts(db: Database): Post[] {
  return db.prepare<[], Post>("SELECT * FROM posts ORDER BY created_at DESC").all();
}

export function getPublishedPosts(db: Database): Post[] {
  return db.prepare<[], Post>("SELECT * FROM posts WHERE published = 1 ORDER BY created_at DESC").all();
}

export function getPostBySlug(db: Database, slug: string): Post | undefined {
  return db.prepare<[string], Post>("SELECT * FROM posts WHERE slug = ?").get(slug);
}

export function getPostById(db: Database, id: number): Post | undefined {
  return db.prepare<[number], Post>("SELECT * FROM posts WHERE id = ?").get(id);
}

export function insertPost(db: Database, post: PostInput) {
  const tags = post.tags ?? "[]";
  const published = post.published ?? 0;
  return db
    .prepare("INSERT INTO posts (title, slug, excerpt, content, tags, published) VALUES (?, ?, ?, ?, ?, ?)")
    .run(post.title, post.slug, post.excerpt ?? null, post.content, tags, published);
}

export function updatePost(db: Database, id: number, post: Partial<PostInput>) {
  const fields: string[] = [];
  const values: unknown[] = [];

  if (post.title !== undefined) {
    fields.push("title = ?");
    values.push(post.title);
  }
  if (post.slug !== undefined) {
    fields.push("slug = ?");
    values.push(post.slug);
  }
  if (post.excerpt !== undefined) {
    fields.push("excerpt = ?");
    values.push(post.excerpt);
  }
  if (post.content !== undefined) {
    fields.push("content = ?");
    values.push(post.content);
  }
  if (post.tags !== undefined) {
    fields.push("tags = ?");
    values.push(post.tags);
  }
  if (post.published !== undefined) {
    fields.push("published = ?");
    values.push(post.published);
  }

  fields.push("updated_at = datetime('now')");
  values.push(id);

  return db.prepare(`UPDATE posts SET ${fields.join(", ")} WHERE id = ?`).run(...values);
}

export function deletePost(db: Database, id: number) {
  return db.prepare("DELETE FROM posts WHERE id = ?").run(id);
}
