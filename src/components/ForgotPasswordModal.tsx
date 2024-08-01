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

const FormSchema = z.object({
	email: z.string().min(1, "Email is required").email("Invalid email"),
});

const onSubmit = async (values: z.infer<typeof FormSchema>) => {
	console.log(values);
};

export default function ForgotPasswordModal() {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			email: "",
		},
	});

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
							>
								Send Verification Code
							</Button>
						</form>
					</Form>
				</DialogContent>
			</Dialog>
		</>
	);
}
