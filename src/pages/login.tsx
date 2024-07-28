
import ForgotPassword from "../components/ForgotPasswordModal";
import { Link } from "react-router-dom";
import { Input } from "../@/components/ui/input";
import { Label } from "../@/components/ui/label";
import { Button } from "../@/components/ui/button";
import { Checkbox } from "../@/components/ui/checkbox";



export default function LoginPage() {
    return (
       <>
       <div>
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
								<Label htmlFor="passwordEmail" className="text-lg">
									Password
								</Label>
								<Input
									id="passwordEmail"
									type="password"
									placeholder="Password"
									className="rounded-full min-w-[300px]"
								/>
							</div>

							<div className="flex flex-row space-x-1.5 items-center">
								<Checkbox id="rememberMe" />
								<Label htmlFor="rememberMe">Remember Me</Label>
							</div>

							<Button
								variant="outline"
								className="bg-[#FFAF8A] min-w-[300px] rounded-lg hover:bg-[#F88D5B] duration-500 ">
								Login
							</Button>
						</form>

                            <div className="flex flex-col items-center w-full space-y-2">
                                <ForgotPassword/>
                                <Link to="/register" className="text-sm text-[#FFAF8A] underline">Create a New Account</Link>
                            </div>

                            <Link to="/home" className="text-sm text-[#FFAF8A] underline">Log in as Guest</Link>
                        </div>
                </div>
            </div>
        </div>


       </>
    );
}
