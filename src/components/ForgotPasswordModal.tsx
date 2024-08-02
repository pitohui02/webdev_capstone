import { Button } from "../@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
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
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../@/components/ui/form";
import { useMutation } from "@tanstack/react-query";
import { supabase } from "../client";
import { useToast } from "../@/components/ui/use-toast";
import { ReloadIcon } from "@radix-ui/react-icons";

const FormSchema = z.object({
	email: z.string().min(1, "Email is required").email("Invalid email"),
});

const ForgotPasswordModal = () => {
	const { toast } = useToast();

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
			toast({
				title: "Reset password email sent",
				description: "Please check your email",
			});
		},
		onError: () => {
			toast({
				title: "Error in sending email",
				description: "Email has not been sent",
				variant: "destructive",
			});
		},
	});

	const onSubmit = async (values: z.infer<typeof FormSchema>) => {
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

				<DialogContent className="sm:max-w-[680px]">
					<DialogHeader className="flex flex-col items-center">
						<DialogTitle>Forgot Password</DialogTitle>
						<DialogDescription>
							You can reset your password by entering your email and a new
							password.
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
										<FormLabel className="text-sm">Email</FormLabel>
										<FormControl>
											<Input
												placeholder="johndoe@email.com"
												type="email"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<Button
								type="submit"
								variant="outline"
								className="bg-[#FFAF8A] hover:bg-[#ffa880]"
								disabled={mutation.isPending}
							>
								{mutation.isPending ? (
									<>
										<ReloadIcon className="mr-2 w-4 h-4 animate-pulse" />
										Sending...
									</>
								) : (
									"Send Reset Password Link"
								)}
							</Button>
						</form>
					</Form>
				</DialogContent>
			</Dialog>
		</>
	);
};

export default ForgotPasswordModal;
