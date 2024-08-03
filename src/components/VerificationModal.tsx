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

const FormSchema = z
	.object({
		verificationCode: z
			.string()
			.min(1, "Enter a 4-digit code")
			.refine((value) => value.length === 4, {
				message: "Invalid Code",
			}),
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

export default function VerificationModal() {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			verificationCode: "",
			password: "",
			confirmPassword: "",
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

				<DialogContent className="max-w-[400px]">
					<DialogHeader className="flex flex-col items-center">
						<DialogTitle>Change your Password</DialogTitle>

						<DialogDescription>Change your password now</DialogDescription>
					</DialogHeader>

					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="flex flex-col space-y-4 items-center justify-items-center"
						>
							<FormField
								control={form.control}
								name="verificationCode"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-sm">Verification Code</FormLabel>
										<FormControl>
											<Input
												placeholder="Enter the 4-digit code"
												type="number"
												className="[&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none max-w-[200px]"
												{...field}
											/>
										</FormControl>{" "}
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="password"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-sm">Password</FormLabel>
										<FormControl>
											<Input
												placeholder="Password"
												type="password"
												className="min-w-[200px]"
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
										<FormLabel className="text-sm">Confirm Password</FormLabel>
										<FormControl>
											<Input
												placeholder="Confirm Password"
												type="password"
												className="min-w-[200px]"
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
								className="bg-[#FFAF8A] hover:bg-[#ffa880] self-center min-w-[250px]"
							>
								Confirm
							</Button>
						</form>
					</Form>
				</DialogContent>
			</Dialog>
		</>
	);
}
