import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "../@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../@/components/ui/form";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../@/components/ui/select";
import { supabase } from "../client";
import { v4 as uuidv4 } from "uuid";

const formSchema = z.object({
	imageType: z.string({
		required_error: "Please select an email to display.",
	}),
	file: z.any().refine((file) => file?.length > 0, "Please select a file."),
});

export function ImageUpload() {
	const [preview, setPreview] = useState("");
	const form = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			imageType: "",
			file: null,
		},
	});

	const uploadFile = async (values: z.infer<typeof formSchema>) => {
		const code = uuidv4();
		const file = values.file[0];
		const {
			data: { user },
		} = await supabase.auth.getUser();
		const { data, error } = await supabase.storage
			.from("images")
			.upload(`${user?.id}/${code}`, file, {
				contentType: values.imageType,
				upsert: false,
			});

		await supabase.from("images").insert([
			{
				file_path: `${user?.id}/${code}`,
				type: values.imageType,
				user_id: user?.id,
			},
		]);

		if (error) throw error;
		return { ...data, type: values.imageType };
	};

	const mutation = useMutation({
		mutationFn: uploadFile,
		onSuccess: (data) => {
			console.log("File uploaded successfully", data);
			form.reset();
			setPreview("");
			// Handle success (e.g., display the uploaded image)
		},
		onError: (error) => {
			console.error("Error uploading file:", error);
			// Handle error (e.g., show error message to user)
		},
	});

	const onDrop = useCallback(
		(acceptedFiles) => {
			form.setValue("file", acceptedFiles, { shouldValidate: true });

			const file = acceptedFiles[0];
			const objectUrl = URL.createObjectURL(file);

			setPreview(objectUrl);

			return () => URL.revokeObjectURL(objectUrl);
		},
		[form],
	);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

	function onSubmit(values: z.infer<typeof formSchema>) {
		mutation.mutate(values);
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-8 px-14 py-10"
			>
				<FormField
					control={form.control}
					name="imageType"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Image Type</FormLabel>
							<Select onValueChange={field.onChange} defaultValue={field.value}>
								<FormControl>
									<SelectTrigger>
										<SelectValue placeholder="Select image type" />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									<SelectItem value="photos">Photos</SelectItem>
									<SelectItem value="illustrations">Illustrations</SelectItem>
									<SelectItem value="vectors">Vectors</SelectItem>
								</SelectContent>
							</Select>
							<FormDescription>
								Select the type of image you're uploading.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="file"
					render={() => (
						<FormItem>
							<FormLabel>Image File</FormLabel>
							<FormControl>
								<div
									{...getRootProps()}
									className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center"
								>
									<input {...getInputProps()} />
									{isDragActive ? (
										<p>Drop the files here ...</p>
									) : (
										<p>
											Drag 'n' drop some files here, or click to select files
										</p>
									)}
								</div>
							</FormControl>
							<FormDescription>
								Upload your image file here. (Max upload size: 2MB)
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit" disabled={mutation.isPending}>
					{mutation.isPending ? "Uploading..." : "Upload"}
				</Button>
			</form>
		</Form>
	);
}
