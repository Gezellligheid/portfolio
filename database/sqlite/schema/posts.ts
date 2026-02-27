import "dotenv/config";
import { db } from "../db";

const client = db();

client.exec(`CREATE TABLE IF NOT EXISTS posts (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    excerpt TEXT,
    content TEXT NOT NULL,
    tags TEXT DEFAULT '[]',
    published INTEGER NOT NULL DEFAULT 0,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    updated_at TEXT NOT NULL DEFAULT (datetime('now'))
)`);

console.log("Posts table migrated.");
