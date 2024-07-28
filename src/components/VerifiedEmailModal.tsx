import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "../@/components/ui/dialog"

  import { Button } from "../@/components/ui/button";
  import { Input } from "../@/components/ui/input";
  import { Label } from "../@/components/ui/label";

export default function VerifiedEmailModal() {
    return (
        <>
            <Dialog>
                <DialogTrigger>
                    <Button 
                        variant="outline"
                        className="bg-[#FFAF8A] w-[200px]rounded-lg hover:bg-[#F88D5B] duration-500">
                        Verification Code
                    </Button>
                </DialogTrigger>

                <DialogContent className="min-w-[600px] flex flex-col">
                    <div className="flex flex-col items-center space-y-2 mb-5">
                        <DialogTitle>
                            <h1 className="text-4xl font-bold">Forgot Password</h1>
                        </DialogTitle>

                        <DialogDescription>
                            <p>Enter your new password</p>
                        </DialogDescription>
                    </div>

                    <div className="flex flex-col space-y-3 items-center">
                        <div className="flex flex-row space-x-5">
                           <div>
                            <Label htmlFor="FPEmail" className="text-xs"> New Password</Label>
                            <Input className="w-64"id="FPEmail"type="email" placeholder="Email" />
                           </div>

                            <div>
                                <Label htmlFor="FPEmail" className="text-xs"> Confirm Password</Label>
                                <Input className="w-64"id="FPEmail"type="email" placeholder="Email" />
                            </div>

                        </div>

                        <Button
                            variant="outline"
                            className="bg-[#FFAF8A] w-full rounded-lg hover:bg-[#F88D5B] duration-500">
                            Change Password
						</Button>

                    </div>


                </DialogContent>
            </Dialog>   

        </>
    );
}