import {
    Dialog,
    DialogContent,
    DialogTrigger,
  } from "../../@/components/ui/dialog"
  
import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { Input } from "../../@/components/ui/input";
import { Label } from "../../@/components/ui/label";
import { Button } from "../../@/components/ui//button";
import { Checkbox } from "../../@/components/ui/checkbox";



export default function LoginPage() {
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
       <>
        <div className="bg-signupBg grid place-items-center h-screen no-repeat bg-cover">
            <div className="w-full h-screen flex justify-center items-center bg-black bg-opacity-50">
                <div className="flex flex-col justify-center items-center space-y-6 bg-white min-w-[450px] min-h-[450px] rounded-[24px] p-8 shadow-lg shadow-black">
                    <h1 className="uppercase text-[35px] text-center font-mono font-medium">onlyimages</h1>
                        
                        <form className="flex flex-col space-y-4 w-fit">
                            
                            <div className="flex-row justify-items-start">
                                <Label htmlFor="loginEmail" className= "text-lg">Username</Label>
                                <Input id="loginUsername" placeholder="Username" className="rounded-full min-w-[300px]"/>
                            </div>

                            <div className="flex-row justify-items-start">
                                <Label htmlFor="passwordEmail" className= "text-lg">Password</Label>
                                <Input id="passwordEmail" type="password" placeholder="Password" className="rounded-full min-w-[300px]"/>
                            </div>

                            <div className="flex flex-row space-x-1.5 items-center">
                                <Checkbox id="rememberMe"/>
                                <Label htmlFor="rememberMe">Remember Me</Label>
                            </div>

                            <Button variant="outline" className="bg-[#FFAF8A] min-w-[300px] rounded-lg hover:bg-[#F88D5B] duration-500 ">Login</Button>
                        </form>

                        <div className="flex flex-col space-y-2 items-center mt-[20px]">
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

                            <Link to="/register" className="text-sm text-[#FFAF8A] underline">Create a New Account</Link>
                            <Link to="/home" className="text-sm text-[#FFAF8A] underline">Log in as Guest</Link>
                        </div>
                </div>
            </div>
        </div>


       </>
    );
}