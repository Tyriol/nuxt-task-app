import "dotenv/config";
import { defineConfig } from "drizzle-kit";
export default defineConfig({
  out: "./lib/db/migrations",
  schema: "./lib/db/schema.ts",
  casing: "snake_case",
  dialect: "turso",
  dbCredentials: {
    url: process.env.TURSO_DATABASE_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN,
  },
});
