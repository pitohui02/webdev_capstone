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
        email: z.string().min(1, "Email is required").email("Invalid email"),
        newPassword: z.string().min(6, "Password must be at least 6 characters long"),
        confirmPassword: z.string().min(6, "Confirm password must be at least 6 characters long"),
    })
    .refine((data) => data.newPassword === data.confirmPassword, {
        message: "Passwords don't match",
        path: ["confirmPassword"],
    });

const ForgotPasswordModal = () => {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
            newPassword: "",
            confirmPassword: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof FormSchema>) => {
        try {
            const response = await fetch('/api/change-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: values.email, newPassword: values.newPassword }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Network response was not ok');
            }

            alert('Password successfully changed.');
        } catch (error) {
            console.error('Failed to change password:', error);
            alert('Failed to change password. Please try again.');
        }
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
                            You can reset your password by entering your email and a new password.
                        </DialogDescription>
                    </DialogHeader>

                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="flex flex-col space-y-4 items-center"
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

                            <FormField
                                control={form.control}
                                name="newPassword"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-sm">New Password</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="New Password"
                                                type="password"
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
                            >
                                Change Password
                            </Button>
                        </form>
                    </Form>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default ForgotPasswordModal;
