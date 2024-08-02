import { useNavigate } from "react-router-dom";
import { Input } from "../../@/components/ui/input";
import { Button } from "../../@/components/ui/button";

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../../@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "../../@/components/ui/use-toast";
import { supabase } from "../../client";
import { useMutation } from "@tanstack/react-query";

const FormSchema = z
	.object({
		password: z
			.string()
			.min(1, "Password is required")
			.min(8, "Password must have atleast 8 characters"),
		confirmPassword: z.string(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords don't match",
		path: ["confirmPassword"],
	});

export default function ForgotPasswordPage() {
	const { toast } = useToast();
	const navigate = useNavigate();

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			password: "",
			confirmPassword: "",
		},
	});

	const resetPasswordMutation = useMutation({
		mutationFn: async ({ password }: z.infer<typeof FormSchema>) => {
			const { error } = await supabase.auth.updateUser({
				password: password,
			});
			if (error) throw error;

			// Delete the used token
		},
		onSuccess: () => {
			toast({
				title: "Password reset successful",
				description: "Please login with your new password",
			});
			// Handle successful password reset
			navigate("/login");
		},
		onError: (error) => {
			// Handle reset error
			console.error("Password reset failed:", error);
		},
	});

	const onSubmit = (values: z.infer<typeof FormSchema>) => {
		resetPasswordMutation.mutate(values);
	};

	return (
		<>
			<div className="bg-slate-100 flex justify-center items-center min-h-screen">
				<div className="bg-white p-8 rounded-lg shadow-md w-96">
					<h1 className="text-2xl font-bold mb-6">Reset Password</h1>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
							<FormField
								control={form.control}
								name="password"
								render={({ field }) => (
									<FormItem>
										<FormLabel>New Password</FormLabel>
										<FormControl>
											<Input
												type="password"
												placeholder="Enter new password"
												{...field}
											/>
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
										<FormLabel>Confirm New Password</FormLabel>
										<FormControl>
											<Input
												type="password"
												placeholder="Confirm new password"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Button
								type="submit"
								className="w-full"
								disabled={resetPasswordMutation.isPending}
							>
								{resetPasswordMutation.isPending
									? "Resetting..."
									: "Reset Password"}
							</Button>
						</form>
					</Form>
				</div>
			</div>
		</>
	);
}
