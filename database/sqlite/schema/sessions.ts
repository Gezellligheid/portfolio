import "dotenv/config";
import { db } from "../db";

const client = db();

client.exec(`CREATE TABLE IF NOT EXISTS sessions (
    id TEXT NOT NULL PRIMARY KEY,
    user_email TEXT NOT NULL,
    user_name TEXT NOT NULL,
    user_picture TEXT,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    expires_at TEXT NOT NULL
)`);

console.log("Sessions table migrated.");
