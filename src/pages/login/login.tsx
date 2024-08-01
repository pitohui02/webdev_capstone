import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../@/components/ui/input";
import { Button } from "../../@/components/ui//button";
import { Checkbox } from "../../@/components/ui/checkbox";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../../@/components/ui/form";
import { useToast } from "../../@/components/ui/use-toast";
import { supabase } from "../../client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ReloadIcon } from "@radix-ui/react-icons";

const FormSchema = z.object({
	email: z.string().min(1, "Email is required").max(100),
	password: z.string().min(1, "Password is required"),
	rememberMe: z.boolean().default(false).optional(),
});

export default function LoginPage() {
	const queryClient = useQueryClient();
	const { toast } = useToast();
	const navigate = useNavigate();

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			email: "",
			password: "",
			rememberMe: false,
		},
	});

	const loginMutation = useMutation({
		mutationFn: async (values: z.infer<typeof FormSchema>) => {
			const { data, error } = await supabase.auth.signInWithPassword({
				email: values.email,
				password: values.password,
			});

			if (error) throw error;
			return data;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["currentUser"] });
			navigate("/");
		},
		onError: () => {
			toast({
				title: "Error in logging in",
				description: "Invalid login credentials",
				variant: "destructive",
			});
		},
	});

	const onSubmit = (values: z.infer<typeof FormSchema>) => {
		loginMutation.mutate(values);
	};

	return (
		<>
			<div className="bg-signupBg grid place-items-center h-screen no-repeat bg-cover">
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="flex flex-col space-y-3 bg-slate-100 py-4 px-6 rounded-lg shadow-sm min-w-80"
					>
						<div className="flex flex-col items-center">
							<h1 className="font-bold text-xl">OnlyImages</h1>
							<p className="font-bold text-l">LOGIN</p>
						</div>

						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Username</FormLabel>
									<FormControl>
										<Input
											placeholder="Enter use email..."
											className="rounded-lg"
											{...field}
										/>
									</FormControl>
									<FormMessage className="text-xs" />
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
										<Input
											placeholder="Password"
											type="password"
											className="rounded-lg"
											{...field}
										/>
									</FormControl>
									<FormMessage className="text-xs" />
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
											onCheckedChange={field.onChange}
										/>
									</FormControl>

									<FormLabel className="text-xs">Remember Me</FormLabel>
								</FormItem>
							)}
						/>

						<div className="flex flex-col items-center space-y-3">
							<Button
								type="submit"
								variant="outline"
								className="bg-[#FFAF8A] hover:bg-[#ffa880] w-full"
								disabled={loginMutation.isPending}
							>
								{loginMutation.isPending ? (
									<>
										<ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
										Logging in..
									</>
								) : (
									"Login"
								)}
							</Button>

							<Link to="/register" className="text-sm text-[#FFAF8A] underline">
								Create a New Account
							</Link>

							<Link to="/" className="text-sm text-[#FFAF8A] underline">
								Log in as Guest
							</Link>
						</div>
					</form>
				</Form>
			</div>
		</>
	);
}
