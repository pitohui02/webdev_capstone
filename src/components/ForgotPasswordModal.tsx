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
import VerificationModal from "./VerificationModal";

const FormSchema = z.object({
    email: z.string().min(1, "Email is required").email("Invalid email"),
});

const ForgotPasswordModal = () => {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof FormSchema>) => {
        try {
            const response = await fetch('/api/send-verification-code', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: values.email }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            alert('Verification code sent to your email.');
        } catch (error) {
            console.error('Failed to send verification code:', error);
            alert('Failed to send verification code. Please try again.');
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
                                            <FormLabel className="text-sm">Email</FormLabel>
                                            <FormMessage />
                                        </div>
                                        <FormControl>
                                            <Input
                                                placeholder="johndoe@email.com"
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
                                className="bg-[#FFAF8A] hover:bg-[#ffa880]"
                            >
                                Send Verification Code
                            </Button>
                            
                            {/* For UI Purposes, please remove after integrating functionalities on forgot password modal -> change password modal */}
                            <VerificationModal />
                        </form>
                    </Form>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default ForgotPasswordModal;
