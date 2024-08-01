import { z } from "zod";

export const UserFormSchema = z.object({
	username: z
		.string()
		.min(3, "Username is required")
		.max(32)
		.regex(/^[a-zA-Z0-9_]+$/),

	email: z.string().min(8, "Email is required").email("Invalid email"),

	password: z
		.string()
		.min(8, "Minimum of 8 characters are required")
		.min(1, "Password is required"),
});
