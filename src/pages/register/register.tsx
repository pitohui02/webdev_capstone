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
		},
	});
	return (
		<>
			<div className="bg-loginBg grid place-items-center h-screen no-repeat bg-cover">
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-8 bg-slate-100 py-4 px-6 rounded-sm shadow-sm min-w-80"
					>
						<h1 className="font-bold text-xl">Log In</h1>
						<FormField
							control={form.control}
							name="username"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Username</FormLabel>
									<FormControl>
										<Input placeholder="Shadcn..." />
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
										<Input placeholder="johndoe@email.com..." type="email" />
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
										<Input placeholder="" type="password" />
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
										<Input placeholder="" type="password" />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type="submit">Submit</Button>
					</form>
				</Form>
				{/* <div className="w-full h-screen flex justify-center items-center bg-black bg-opacity-50">
					<div className="flex flex-col justify-center items-center space-y-6 bg-white min-w-[450px] min-h-[450px] rounded-[24px] p-8 shadow-lg shadow-black">
						<h1 className="uppercase text-[35px] text-center font-mono font-medium">
							onlyimages
						</h1>

						<form className="flex flex-col space-y-4 w-fit">
							<div className="flex-row justify-items-start">
								<Label htmlFor="regUsername" className="text-lg">
									Username
								</Label>
								<Input
									id="regUsername"
									placeholder="Username"
									className="rounded-full min-w-[300px]"
								/>
							</div>

							<div className="flex-row justify-items-start">
								<Label htmlFor="regEmail" className="text-lg">
									Email
								</Label>
								<Input
									type="email"
									id="regEmail"
									placeholder="Email"
									className="rounded-full min-w-[300px]"
								/>
							</div>

							<div className="flex-row justify-items-start">
								<Label htmlFor="regPW" className="text-lg">
									Password
								</Label>
								<Input
									id="regPW"
									type="password"
									placeholder="Password"
									className="rounded-full min-w-[300px]"
								/>
							</div>

							<div className="flex-row justify-items-start">
								<Label htmlFor="regCPW" className="text-lg">
									Confirm Password
								</Label>
								<Input
									id="regCPW"
									type="password"
									placeholder="Confirm Password"
									className="rounded-full min-w-[300px]"
								/>
							</div>

							<div className="flex flex-row space-x-1.5 items-center">
								<Checkbox id="tac" />
								<Label htmlFor="tac">Accept Terms & Conditions</Label>
							</div>

							<Button
								variant="outline"
								className="bg-[#FFAF8A] min-w-[300px] rounded-lg hover:bg-[#F88D5B] duration-500 "
                                onClick={onSubmit}
							>
								Register
							</Button>
						</form>

						<div className="flex flex-row space-x-1 items-center mt-[20px]">
							<p>Already have an account?</p>{" "}
							<Link to="/login" className="text-sm text-[#FFAF8A] underline">
								Login
							</Link>
						</div>
					</div>
				</div> */}
			</div>
		</>
	);
}
