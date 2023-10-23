import { text, sqliteTable, integer } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";


export const users = sqliteTable("users", {
  userId: text("userId").primaryKey(),
  firstName: text("firstName").notNull(),
  lastName: text("lastName").notNull(),
  email: text("email").notNull(),
  imageUrl: text("imageUrl").notNull()
});

export const messages = sqliteTable("messages", {
  id: integer('id',{ mode: 'number' }).primaryKey({ autoIncrement: true }),
  userId: text("userId").notNull(),
  message: text("message").notNull(),
  timestamp: text("timestamp").default(sql`CURRENT_TIMESTAMP`).notNull(),
})