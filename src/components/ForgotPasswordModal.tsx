import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "../@/components/ui/dialog";
import { Input } from "../@/components/ui/input";
import { Label } from "../@/components/ui/label";
import { Button } from "../@/components/ui/button";

const ForgotPasswordDialog = () => {
    // first state
    const [FirstStateOpen, setFirstStateOpen] = useState(false);
    // second state
    const [SecondStateOpen, setSecondStateOpen] = useState(false);

    // open first state by setting it true
    const handleOpenFirstState = () => setFirstStateOpen(true);
    // clove first state by setting it false
    const handleCloseFirstState = () => setFirstStateOpen(false);
    // on click function to close first state and open second state
    const handleOpenSecondState = () => {
        handleCloseFirstState; // Close the first dialog
        setSecondStateOpen(true);
    };
    // close second state by setting it to false
    const handleCloseSecondState = () => {
        setSecondStateOpen(false);
        setFirstStateOpen(false); 
    }

    return (
        <div>
			{/* Forgot password first on state */}
            <Dialog open={FirstStateOpen} onOpenChange={setFirstStateOpen}>
            <DialogTrigger onClick ={handleOpenFirstState} className="text-sm">Forgot Password</DialogTrigger>
            <DialogContent className="flex flex-col text-center justify-start items-center bg-white min-w-[450px] rounded-[24px] p-8 shadow-lg shadow-black">
                <div>
                    <h1 className=" text-[35px] text-center font-mono font-bold">Forgot your password?</h1>
                    <h2 className ="text-lg">You can reset your password with your email</h2>
                </div>
                <form className="flex flex-col space-y-4 w-fit">
                    <div className="flex flex-col justify-start items-start">
                        <Label className= "text-lg ml-5">Email</Label>
                    </div>
                    <div className="flex flex-row justify-center items-center">
                        <Input id="loginUsername" placeholder="Email" className="rounded-full min-w-[200px] ml-4"/>
                        {/* //Verification on click 2nd state*/}
                        <Dialog open={SecondStateOpen} onOpenChange={setSecondStateOpen}>
                            <DialogTrigger className="bg-[#FFAF8A] rounded-lg hover:bg-[#F88D5B] duration-500 ml-5 mr-4 min-w-[180px] min-h-[36px] font-medium" 
                                onClick = {handleOpenSecondState}>
                                Send Verification Code
                            </DialogTrigger>
                                <DialogContent className="flex flex-col text-center justify-start items-center  bg-white min-w-[450px] rounded-[24px] p-8 shadow-lg shadow-black">
                                    <div>
                                        <h1 className=" text-[35px] text-center font-mono font-bold">Forgot your password?</h1>
                                        <h2 className ="text-lg">Enter your new password</h2>
                                    </div>
                                    <div className = "space-y-6">
                                        <div className = "flex flex-row space">    
                                            <form className="flex flex-col space-y-2 w-fit mr-2">
                                                <div className="flex flex-col justify-start items-start">
                                                    <Label className= "text-lg">New Password</Label>
                                                <div className="justify-center items-center">
                                                    <Input id="loginUsername" placeholder="Email" className="rounded-full min-w-[200px]"/>
                                                </div>
                                                </div>
                                            </form>

                                            <form className="flex flex-col space-y-2 w-fit ml-2">
                                                <div className="flex flex-col justify-start items-start">
                                                    <Label className= "text-lg">Confirm Password</Label>
                                                    <div className="justify-center items-center">
                                                        <Input id="loginUsername" placeholder="Email" className="rounded-full min-w-[200px]"/>
                                                    </div>
                                                </div>
                                            </form>
                                    </div>
                                    <div className="flex flex-col items-center ">
                                        <Button variant="outline" className="bg-[#FFAF8A] rounded-lg hover:bg-[#F88D5B] duration-500 min-w-[400px]" 
                                        onClick ={handleCloseSecondState}>
                                        Change Password
                                        </Button>
                                    </div>
                                    </div>
                                </DialogContent>
                        </Dialog>
                    </div>
                </form>
            </DialogContent>
            </Dialog>
        </div>
        
    );
};

export default ForgotPasswordDialog;
