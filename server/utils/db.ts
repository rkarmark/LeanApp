import { drizzle, LibSQLDatabase } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

let db: LibSQLDatabase

try {
  if(process.env.DATABASE_URL && process.env.DATABASE_TOKEN){
    db = drizzle(createClient({
    url: process.env.DATABASE_URL,
    authToken: process.env.DATABASE_TOKEN,
    }
  ))};
} catch {
  throw new Error("DATABASE_URL and DATABASE_TOKEN must be set in .env");
}

export * as tables from "~/server/db/schema";
export const useDB = () => db
