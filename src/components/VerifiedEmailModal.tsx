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
            </Dialog>   

        </>
    );
}