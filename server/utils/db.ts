import { drizzle, LibSQLDatabase } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

export * as tables from "~/server/db/schema";
export const useDB = () =>
  drizzle(
    createClient({
      url: process.env.DATABASE_URL,
      authToken: process.env.DATABASE_TOKEN,
    }),
  );
