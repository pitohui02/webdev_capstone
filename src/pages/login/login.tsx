import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";


export default function LoginPage() {
    return (
       <>
        <div className="bg-signupBg grid place-items-center h-screen no-repeat bg-cover">
            <div className="flex-col justify-items-center bg-white min-w-[582px] min-h-[776px] rounded-md p-8">
                <h1 className="uppercase text-[35px] text-center font-mono font-medium">onlyimages</h1>
                    
                    <form className="grid gap-y-4 justify-items-center items-center w-auto">
                        
                        <div className="flex-row justify-items-start">
                            <Label htmlFor="loginEmail" className= "text-lg">Username</Label>
                            <Input id="loginUsername" placeholder="Username" className="rounded-full min-w-[300px]"/>
                        </div>

                        <div className="flex-row justify-items-start">
                            <Label htmlFor="passwordEmail" className= "text-lg">Password</Label>
                            <Input id="passwordEmail" type="password" placeholder="Password" className="rounded-full min-w-[300px]"/>
                        </div>

                        <Button variant="outline" className="bg-[#FFAF8A] min-w-[300px] rounded-full hover:bg-[#F88D5B] ">Login</Button>
                    </form>

                    
                    

                <div className=""></div>
            </div>


        </div>


       </>
    );
}