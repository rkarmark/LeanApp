import { text, sqliteTable } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  userId: text("userId").primaryKey(),
  firstName: text("firstName"),
  lastName: text("lastName"),
  email: text("email"),
});
