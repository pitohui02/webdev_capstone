import { Button } from "../@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../@/components/ui/dialog";

import { Input } from "../@/components/ui/input";
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
} from "../@/components/ui/form";
import { useMutation } from "@tanstack/react-query";
import { supabase } from "../client";
import { useToast } from "../@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { ReloadIcon } from "@radix-ui/react-icons";

const FormSchema = z.object({
	email: z.string().min(1, "Email is required").email("Invalid email"),
});

export default function ForgotPasswordModal() {
	const { toast } = useToast();
	const navigate = useNavigate();
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			email: "",
		},
	});

	const mutation = useMutation({
		mutationFn: async (values: z.infer<typeof FormSchema>) => {
			const { data, error } = await supabase.auth.resetPasswordForEmail(
				values.email,
			);

			if (error) throw error;
			return data;
		},
		onSuccess: () => {
			navigate("/reset-password");
		},
		onError: () => {
			toast({
				title: "Error in sending email",
				description: "Email has not been sent",
				variant: "destructive",
			});
		},
	});

	const onSubmit = (values: z.infer<typeof FormSchema>) => {
		mutation.mutate(values);
	};

	return (
		<>
			<Dialog>
				<DialogTrigger asChild>
					<Button variant="ghost" className="text-sm">
						Forgot Password
					</Button>
				</DialogTrigger>

				<DialogContent className="sm:max-w-[550px]">
					<DialogHeader className="flex flex-col items-center">
						<DialogTitle>Forgot Password</DialogTitle>

						<DialogDescription>
							You can reset your password by your email.
						</DialogDescription>
					</DialogHeader>

					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="flex flex-row space-x-2 items-end justify-center"
						>
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<div className="flex flex-row space-x-2 items-end">
											<FormLabel className="text-sm">Email</FormLabel>{" "}
											<FormMessage />
										</div>
										<FormControl>
											<Input
												placeholder="johndoe@email.com..."
												type="email"
												className="min-w-[250px]"
												{...field}
											/>
										</FormControl>
									</FormItem>
								)}
							/>

							<Button
								type="submit"
								variant="outline"
								className="bg-[#FFAF8A] hover:bg-[#ffa880] w-"
								disabled={mutation.isPending}
							>
								{mutation.isPending ? (
									<>
										<ReloadIcon className="mr-2 h-4 w-4 animate-pulse" />
										Sending...
									</>
								) : (
									"Send Verification Code"
								)}
							</Button>

							{/* For UI Purposes, please remove after integrating functionalities on forgotpassword modal -> change password modal */}
							<VerificationModal />
						</form>
					</Form>
				</DialogContent>
			</Dialog>
		</>
	);
}
