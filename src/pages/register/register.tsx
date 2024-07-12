import { Link } from "react-router-dom";
import { Button } from "../../@/components/ui/button";
import { Input } from "../../@/components/ui/input";
import { Label } from "../../@/components/ui/label";
import { Checkbox } from "../../@/components/ui/checkbox";

export default function SignUpPage() {
    return (
        <>
           <div className="bg-loginBg grid place-items-center h-screen no-repeat bg-cover">
                <div className="w-full h-screen flex justify-center items-center bg-black bg-opacity-50">
                    <div className="flex flex-col justify-center items-center space-y-6 bg-white min-w-[450px] min-h-[450px] rounded-[24px] p-8 shadow-lg shadow-black">
                        <h1 className="uppercase text-[35px] text-center font-mono font-medium">onlyimages</h1>
                        
                        <form className="flex flex-col space-y-4 w-fit">

                            
                            
                            <div className="flex-row justify-items-start">
                                <Label htmlFor="regUsername" className= "text-lg">Username</Label>
                                <Input id="regUsername" placeholder="Username" className="rounded-full min-w-[300px]"/>
                            </div>

                            <div className="flex-row justify-items-start">
                                <Label htmlFor="regEmail" className= "text-lg">Email</Label>
                                <Input type="email" id="regEmail" placeholder="Email" className="rounded-full min-w-[300px]"/>
                            </div>

                            <div className="flex-row justify-items-start">
                                <Label htmlFor="regPW" className= "text-lg">Password</Label>
                                <Input id="regPW" type="password" placeholder="Password" className="rounded-full min-w-[300px]"/>
                            </div>

                            <div className="flex-row justify-items-start">
                                <Label htmlFor="regCPW" className= "text-lg">Confirm Password</Label>
                                <Input id="regCPW" type="password" placeholder="Confirm Password" className="rounded-full min-w-[300px]"/>
                            </div>


                            <div className="flex flex-row space-x-1.5 items-center">
                                <Checkbox id="tac"/>
                                <Label htmlFor="tac">Accept Terms & Conditions</Label>
                            </div>

                            <Button variant="outline" className="bg-[#FFAF8A] min-w-[300px] rounded-lg hover:bg-[#F88D5B] duration-500 ">Register</Button>
                        </form>

                        <div className="flex flex-row space-x-1 items-center mt-[20px]">
                            
                            <p>Already have an account?</p> <Link to="/" className="text-sm text-[#FFAF8A] underline">Login</Link>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    );
}