import type { Config } from "drizzle-kit";

const config: Config = {
  schema: "./server/db/schema.ts",
  out: "./drizzle",
  driver: "turso",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
    authToken: process.env.DATABASE_TOKEN!,
  },
};

export default config;
