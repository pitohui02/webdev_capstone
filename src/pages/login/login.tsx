
import { Link } from "react-router-dom";
import { Input } from "../../@/components/ui/input";
import { Label } from "../../@/components/ui/label";
import { Button } from "../../@/components/ui//button";
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
		password: z.string().min(1, "Password is required"),
		rememberMe: z.boolean().default(false).optional(),
	})

const onSubmit = async (values: z.infer<typeof FormSchema>) => {
	console.log(values);
};



export default function LoginPage() {
	
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			username: "",
			password: "",
			rememberMe: false,

		},
	});


	return (
		<>
			<div className="bg-signupBg grid place-items-center h-screen no-repeat bg-cover">
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)}
					className="flex flex-col space-y-3 bg-slate-100 py-4 px-6 rounded-lg shadow-sm min-w-80">
					
					<div className="flex flex-col items-center">
						<h1 className="font-bold text-xl">OnlyImages</h1>
						<p className="font-bold text-l">LOGIN</p>
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
							<FormMessage className="text-xs"/>
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
										<Input placeholder="Password" type="password" className="rounded-lg"/>
									</FormControl>
									<FormMessage className="text-xs"/>
								</FormItem>
							)}
						/>

						<FormField
						control={form.control}
						name="rememberMe"
						render={({ field }) => (
							<FormItem className="flex flex-row space-x-2 items-end justify-start">
								<FormControl>
									<Checkbox
									checked={field.value}
									onCheckedChange={field.onChange} />
								</FormControl>

								<FormLabel className="text-xs">
									Remember Me
								</FormLabel>
							</FormItem>
							
						)} />

						<div className="flex flex-col items-center space-y-3">
							<Button type="submit" variant="outline" className="bg-[#FFAF8A] hover:bg-[#ffa880] w-full">Login</Button>

							<Link to="/register" className="text-sm text-[#FFAF8A] underline">
								Create a New Account
							</Link>
							
							<Link to="/home" className="text-sm text-[#FFAF8A] underline">
								Log in as Guest
							</Link>
						</div>

					</form>
				</Form>
			</div>
		</>
	);
}
