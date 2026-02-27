import type { db as sqliteDb } from "../database/sqlite/db";
import * as sqliteQueries from "../database/sqlite/queries/todos";
import { enhance, type UniversalHandler } from "@universal-middleware/core";

// Note: You can directly define a server middleware instead of defining a universal middleware. (Vike's scaffolder uses https://github.com/magne4000/universal-middleware to simplify its internal logic.)
export const createTodoHandler: UniversalHandler<Universal.Context & { db: ReturnType<typeof sqliteDb> }> = enhance(
  async (request, _context, _runtime) => {
    // In a real case, user-provided data should ALWAYS be validated with tools like zod
    const newTodo = (await request.json()) as { text: string };

    sqliteQueries.insertTodo(_context.db, newTodo.text);

    return new Response(JSON.stringify({ status: "OK" }), {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    });
  },
  { name: "my-app:todo-handler", path: `/api/todo/create`, method: ["GET", "POST"], immutable: false },
);
