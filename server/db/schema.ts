import { text, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  userId: varchar("userId", { length: 36 }).primaryKey(),
  firstName: text("firstName"),
  lastName: text("lastName"),
  email: text("email"),
  userImage: text("userImage"),
});
