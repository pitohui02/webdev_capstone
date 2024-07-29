import "dotenv/config";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const connectionString = import.meta.env.VITE_DATABASE_URL;

export const client = postgres(connectionString, { prepare: false });
export const db = drizzle(client);
