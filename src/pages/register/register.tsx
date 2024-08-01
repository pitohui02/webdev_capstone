import { Button } from "../../@/components/ui/button";
import { Input } from "../../@/components/ui/input";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../../@/components/ui/form";
import { supabase } from "../../client";
import { useToast } from "../../@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

const FormSchema = z
	.object({
		username: z.string().min(1, "Username is required").max(100),
		email: z.string().min(1, "Email is required").email("Invalid email"),
		password: z
			.string()
			.min(1, "Password is required")
			.min(8, "Password must have atleast 8 characters"),
		confirmPassword: z.string(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords don't match",
		path: ["confirm"],
	});

export default function SignUpPage() {
	const { toast } = useToast();
	const navigate = useNavigate();
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			username: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
	});

	const onSubmit = async (values: z.infer<typeof FormSchema>) => {
		try {
			const { data, error } = await supabase.auth.signUp({
				email: values.email,
				password: values.password,
				options: {
					data: {
						name: values.username,
					},
				},
			});

			if (error) {
				toast({
					title: "Error in registration",
					variant: "destructive",
				});
			}

			toast({
				title: "Account created",
				description: "Verify your email",
			});

			navigate("/login");
		} catch (error) {
			console.error("Something went wrong");
		}
	};

	return (
		<>
			<div className="bg-loginBg grid place-items-center h-screen no-repeat bg-cover">
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-8 bg-slate-100 py-4 px-6 rounded-sm shadow-sm min-w-80"
					>
						<h1 className="font-bold text-xl"> Sign Up</h1>
						<FormField
							control={form.control}
							name="username"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Username</FormLabel>
									<FormControl>
										<Input placeholder="Shadcn..." {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input
											placeholder="johndoe@email.com..."
											type="email"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Password</FormLabel>
									<FormControl>
										<Input placeholder="" type="password" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="confirmPassword"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Confirm Password</FormLabel>
									<FormControl>
										<Input placeholder="" type="password" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type="submit">Submit</Button>
					</form>
				</Form>
			</div>
		</>
	);
}
