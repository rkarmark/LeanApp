import type { Config } from "drizzle-kit";

const config: Config = {
  schema: "./server/db/schema.ts",
  out: "./drizzle",
  driver: "mysql2",
  dbCredentials: {
    connectionString: process.env['CONN_STRING'],
  }
};

export default config;
