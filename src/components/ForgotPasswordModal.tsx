import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "../@/components/ui/dialog";
import {Input} from "../@/components/ui/input";
import {Label} from "../@/components/ui/label";
import { Button } from "../@/components/ui/button";
import VerifiedEmailModal from "./VerifiedEmailModal";

export default function ForgotPassword() {

    return(
        <>
            <Dialog>
                <DialogTrigger>
                    <p>Forgot Password</p>
                </DialogTrigger>

                <DialogContent className="w-[500px]">
                    <div className="flex flex-col items-center space-y-2 mb-5">
                        <DialogTitle>
                            <h1 className="text-4xl font-bold">Forgot Password</h1>
                        </DialogTitle>

                        <DialogDescription>
                            <p>You can reset your password by your email</p>
                        </DialogDescription>
                    </div>

                    <div className="flex flex-row items-end space-x-5 justify-center">
                        <div  className="flex flex-col space-y-1.5">
                            <Label htmlFor="FPEmail" className="text-xs">Enter your email address to receive your <br/> verification code</Label>
                            <Input className="w-64"id="FPEmail"type="email" placeholder="Email" />
                        </div>

                    <VerifiedEmailModal/>

                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}

