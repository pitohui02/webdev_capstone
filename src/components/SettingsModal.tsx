import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "../@/components/ui/dialog";
import { Button } from "../@/components/ui/button";
import { Link } from 'react-router-dom';
import { Separator } from "@radix-ui/react-context-menu";
import { GearIcon } from "@radix-ui/react-icons"

const SettingsModal = () => {
    return(

<Dialog>
<DialogTrigger>
    <Button variant="outline" size="icon">
        <GearIcon className="h-4 w-4" />
    </Button>
</DialogTrigger>
    <DialogContent className ="bg-[#262627] rounded-[24px]">

    <p className="text-center text-white font-mono hover:underline">
        Manage Your Account<br/>
    </p>
    <Separator className="bg-[#565656] h-0.5" />

    <p className="text-center text-white font-mono hover:underline">
        Terms and Services<br/>
    </p>
    <Separator className="bg-[#565656] h-0.5" />

    <p className="text-center text-white font-mono hover:underline">
        Help<br/>
    </p>
    <Separator className="bg-[#565656] h-0.5" />

    <Link to="/login" className="text-center text-white font-mono hover:underline">Logout</Link>

    </DialogContent>
</Dialog>
    );
};

export default SettingsModal;