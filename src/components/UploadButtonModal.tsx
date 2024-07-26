import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "../@/components/ui/dialog";
/* import { Input } from "../@/components/ui/input";
import { Label } from "../@/components/ui/label"; */
import { Button } from "../@/components/ui/button";
import Dropzone from '../@/components/ui/dropzone'; 


const UploadModal = () => {
    const [files, setFiles] = useState<File[]>([]);

    const handleDrop = (acceptedFiles: File[]) => {
        setFiles(acceptedFiles);
    };
    return(
<Dialog>
<DialogTrigger>
    <Button className="bg-[#FFAF8A] rounded-lg hover:bg-[#F88D5B] duration-500">
        Upload
    </Button>
</DialogTrigger>
<DialogContent>
    <h1 className="text-[35px] text-center font-mono font-bold">Drop an image</h1>
    <Dropzone onDrop={handleDrop} />
    <div className="mt-4">
        {files.map((file) => (
            <div key={file.name}>{file.name}</div>
        ))}
    </div>
</DialogContent>
</Dialog>
    );
};

export default UploadModal;
    