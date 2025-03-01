import { z } from "zod";

export const SignInSchema = z.object({
	name: z.string().min(2, "Name is too short"),
	email: z.string().email("Invalid email"),
	dob: z.string(),
	password: z.string().min(8, "Password is too short"),
});
