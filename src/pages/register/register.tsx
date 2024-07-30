import { Link } from "react-router-dom";
import { Button } from "../../@/components/ui/button";
import { Input } from "../../@/components/ui/input";
import { Checkbox } from "../../@/components/ui/checkbox";
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

const FormSchema = z
	.object({
		username: z.string().min(1, "Username is required").max(100),
		email: z.string().min(1, "Email is required").email("Invalid email"),
		password: z
			.string()
			.min(1, "Password is required")
			.min(8, "Password must have atleast 8 characters"),
		confirmPassword: z.string(),
		tac: z.boolean().refine(value => value === true, {
			message: "Must agree to terms and conditions",
		}),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords don't match",
		path: ["confirm"],
	});

const onSubmit = async (values: z.infer<typeof FormSchema>) => {
	console.log(values);
};

export default function SignUpPage() {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			username: "",
			email: "",
			password: "",
			confirmPassword: "",
			tac: false,

		},
	});
	return (
		<>
			<div className="bg-loginBg grid place-items-center h-screen no-repeat bg-cover">
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="flex flex-col space-y-3 bg-slate-100 py-4 px-6 rounded-lg shadow-sm min-w-80"
					>
						<div className="flex flex-col items-center">
							<h1 className="font-bold text-xl">OnlyImages</h1>
							<p className="font-bold text-l">SIGN UP</p>
						</div>
						<FormField
							control={form.control}
							name="username"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Username</FormLabel>
									<FormControl>
										<Input placeholder="Username" className="rounded-lg"/>
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
										<Input placeholder="johndoe@email.com" type="email" className="rounded-lg"/>
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
										<Input placeholder="" type="password" className="rounded-lg"/>
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
										<Input placeholder="" type="password" className="rounded-lg"/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
						control={form.control}
						name="tac"
						render={({ field }) => (
							<FormItem className="flex flex-row space-x-2 items-end justify-center">
								<FormControl>
									<Checkbox
									checked={field.value}
									onCheckedChange={field.onChange} />
								</FormControl>

								<FormLabel className="text-xs">
									I agree to Terms and Conditions
								</FormLabel>
								<FormMessage className="text-xs"/>
							</FormItem>
							
						)} />
						
						<div className="flex flex-col items-center space-y-2">
							<Button type="submit" variant="outline" className="bg-[#FFAF8A] hover:bg-[#ffa880] w-full">Register</Button>

							<Link to="/login" className="text-sm text-[#FFAF8A] underline justify-self-center">
								Login
							</Link>
						</div>
					</form>
				</Form>
				
				
				
			</div>
		</>
	);
}
