import { Dialog, DialogContent, DialogTrigger } from "../@/components/ui/dialog";
import {Input} from "../@/components/ui/input";
import {Label} from "../@/components/ui/label";
import { Button } from "../@/components/ui/button";

export default function ForgotPassword() {
    return(
        <>
            <Dialog>
                <DialogTrigger>
                    <p>Forgot Password</p>
                </DialogTrigger>

                <DialogContent className="w-[500px]">
                    <div className="flex flex-col items-center space-y-2 mb-5">
                        <h1 className="text-4xl font-bold">Forgot Password</h1>
                        <p>You can reset your password by your email</p>
                    </div>

                    <div className="flex flex-row items-end space-x-5 justify-center">
                        <div  className="flex flex-col space-y-1.5">
                            <Label htmlFor="FPEmail" className="text-xs">Enter your email address to receive your <br/> verification code</Label>
                            <Input className="w-64"id="FPEmail"type="email" placeholder="Email" />
                        </div>

                    <Button 
                    variant="outline"
					className="bg-[#FFAF8A] w-[200px]rounded-lg hover:bg-[#F88D5B] duration-500">
            
                    Verification Code
                    </Button>

                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}