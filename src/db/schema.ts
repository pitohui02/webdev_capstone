import { pgTable, serial, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users_table", {
	id: uuid("id").defaultRandom().primaryKey(),
	username: text("username").notNull().unique(),
	email: text("email").notNull().unique(),
	password: text("password").notNull(),
});

export const postsTable = pgTable("posts_table", {
	id: uuid("id").defaultRandom().primaryKey(),
	imageUrl: text("imageUrl").notNull(),
	description: text("description").notNull(),
	authorId: uuid("authorId")
		.notNull()
		.references(() => usersTable.id, { onDelete: "cascade" }),
	createdAt: timestamp("created_at").notNull().defaultNow(),
	updatedAt: timestamp("updated_at")
		.notNull()
		.$onUpdate(() => new Date()),
});

export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;

export type InsertPost = typeof postsTable.$inferInsert;
export type SelectPost = typeof postsTable.$inferSelect;
