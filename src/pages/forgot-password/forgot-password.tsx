import {
	Dialog,
	DialogContent,
	DialogTrigger,
} from "../../@/components/ui/dialog";
import React, { useState } from "react";
// import { useDropzone } from 'react-dropzone';
import { Link } from "react-router-dom";
import { Input } from "../../@/components/ui/input";
import { Label } from "../../@/components/ui/label";
import { Button } from "../../@/components/ui//button";
// import { Checkbox } from "../../@/components/ui/checkbox";
import { GearIcon } from "@radix-ui/react-icons";

import Dropzone from "../../@/components/ui/dropzone";
import { Separator } from "@radix-ui/react-context-menu";

//PANG TESTING KO LANG NG UI ng mga kung ano anong page
export default function ForgotPassword() {
	const [files, setFiles] = useState<File[]>([]);

	const handleDrop = (acceptedFiles: File[]) => {
		setFiles(acceptedFiles);
	};
	return (
		<>
			<div className="bg-signupBg grid place-items-center h-screen no-repeat bg-cover">
				<div className="w-full h-screen flex justify-center items-center bg-black bg-opacity-50">
					<div className="flex flex-col justify-center items-center space-y-6 bg-white min-w-[450px] min-h-[450px] rounded-[24px] p-8 shadow-lg shadow-black">
						<h1 className=" text-[35px] text-center font-mono font-bold">
							Forgot your password?
						</h1>
						<h2 className="text-lg">
							You can reset your password with your email
						</h2>
						<div className="flex flex-row">
							<form className="flex flex-col space-y-4 w-fit mr-2">
								<div className="flex flex-col justify-start items-start">
									<Label className="text-lg">New Password</Label>
								</div>
								<div className="flex flex-row justify-center items-center">
									<Input
										id="newPassword"
										placeholder="New Password"
										className="rounded-full min-w-[200px]"
									/>
								</div>
							</form>

							<form className="flex flex-col space-y-4 w-fit ml-2">
								<div className="flex flex-col justify-start items-start">
									<Label className="text-lg">Confirm Password</Label>
								</div>
								<div className="flex flex-row justify-center items-center">
									<Input
										id="confirmPassword"
										placeholder="Confirm Password"
										className="rounded-full min-w-[200px]"
									/>
								</div>
							</form>
						</div>
						<Dialog>
							<DialogTrigger>
								<Button className="bg-[#FFAF8A] rounded-lg hover:bg-[#F88D5B] duration-500">
									Upload
								</Button>
							</DialogTrigger>
							<DialogContent>
								<h1 className="text-[35px] text-center font-mono font-bold">
									Drop an image
								</h1>
								<Dropzone onDrop={handleDrop} />
								<div className="mt-4">
									{files.map((file) => (
										<div key={file.name}>{file.name}</div>
									))}
								</div>
							</DialogContent>
						</Dialog>
						<Dialog>
							<DialogTrigger>
								<Button variant="outline" size="icon">
									<GearIcon className="h-4 w-4" />
								</Button>
							</DialogTrigger>
							<DialogContent className="bg-[#262627] rounded-[24px]">
								<p className="text-center text-white font-mono hover:underline">
									Manage Your Account
									<br />
								</p>
								<Separator className="bg-[#565656] h-0.5" />

								<p className="text-center text-white font-mono hover:underline">
									Terms and Services
									<br />
								</p>
								<Separator className="bg-[#565656] h-0.5" />

								<p className="text-center text-white font-mono hover:underline">
									Help
									<br />
								</p>
								<Separator className="bg-[#565656] h-0.5" />

								<Link
									to="/login"
									className="text-center text-white font-mono hover:underline"
								>
									Logout
								</Link>
							</DialogContent>
						</Dialog>
					</div>
				</div>
			</div>
		</>
	);
}
