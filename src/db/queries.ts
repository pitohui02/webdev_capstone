import { db } from ".";
import type { InsertUser } from "./schema";
import { usersTable } from "./schema";

async function createUser(data: InsertUser) {
	await db.insert(usersTable).values(data);
}

export { createUser };
