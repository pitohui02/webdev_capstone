import React from 'react';
import { Button } from "../@/components/ui/button";
import { Avatar } from "../@/components/ui/avatar";
import { AvatarImage } from "../@/components/ui/avatar";
import { AvatarFallback } from "../@/components/ui/avatar";
import { Card } from "../@/components/ui/card";

import { Separator } from '../@/components/ui/separator';
import SettingsModal from "../components/SettingsModal";

export default function ProfilePage() {
    return (
<div className="max-w-4xl mx-auto p-4">
    <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
            <Avatar className="w-24 h-24">
                <AvatarImage src="src/assets/profileicon.png" alt="Profile Picture" />
                <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <div className="flex flex-col space-y-1">
                <h1 className="text-2xl font-bold">Mocha</h1>
                <div className="flex space-x-4 mb-4">
                    <div className="text-center">
                        <h3 className="text-lg font-bold">Uploads</h3>
                        <p>5</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-lg font-bold">Followers</h3>
                        <p>1.5K</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex items-center space-x-2">
        <Button variant="outline" size="sm" className= "bg-[#FFAF8A] rounded-lg hover:bg-[#F88D5B] duration-500 ">Edit Profile</Button>
        <SettingsModal />
    </div>
    </div>
            <div className="mb-4">
                <p className="text-sm font-bold">I like samurai things</p>
            </div>
            <Separator className="my-4 bg-gray-300" />
            <div className="grid grid-cols-3 gap-2 w-fit">
             <Card className="w-210 h-210 bg-gray-200 drop-shadow-2xl">
                <img src="src/assets/ppost1.jpg" alt="Post 1" className="object-cover w-full h-full" />
            </Card>
            <Card className="w-210 h-48 bg-gray-200 drop-shadow-2xl">
                <img src="src/assets/ppost2.jpg" alt="Post 2" className="object-cover w-full h-full" />
            </Card>
            <Card className="w-210 h-48 bg-gray-200 drop-shadow-2xl">
                <img src="src/assets/ppost3.jpg" alt="Post 3" className="object-cover w-full h-full" />
            </Card>
            </div>
        </div>
    );
};


