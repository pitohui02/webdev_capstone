import React from "react";
import { Button } from "../../@/components/ui//button";
import { Avatar } from "../../@/components/ui//avatar";
import { AvatarImage } from "../../@/components/ui//avatar";
import { AvatarFallback } from "../../@/components/ui//avatar";
import { Card } from "../../@/components/ui//card";

import { Separator } from "../../@/components/ui/separator";
import SettingsModal from "../../components/SettingsModal";
import { supabase } from "../../client";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "../../@/components/ui/skeleton";
import { ProfileImageGallery } from "../../components/ProfileImageGallery";

async function getCurrentUser() {
	const { data, error } = await supabase.auth.getUser();
	if (error) throw error;

	return data;
}

export default function ProfilePage() {
	const { data, isLoading } = useQuery({
		queryKey: ["currentUser"],
		queryFn: getCurrentUser,
	});

	return (
		<div className="max-w-4xl mx-auto p-4">
			<div className="flex items-center justify-between mb-6">
				<div className="flex items-center space-x-4">
					<Avatar className="w-24 h-24">
						<AvatarImage
							src="src/assets/profileicon.png"
							alt="Profile Picture"
						/>
						<AvatarFallback>U</AvatarFallback>
					</Avatar>
					<div className="flex flex-col space-y-1">
						{data ? (
							<h1>{data.user.user_metadata.name}</h1>
						) : (
							<Skeleton className="h-1 w-4 rounded-md" />
						)}
					</div>
				</div>
				<SettingsModal />
			</div>
			<Separator className="my-4 bg-gray-300" />
			<div className="grid grid-cols-3 gap-2 w-fit">{}</div>
			<ProfileImageGallery />
		</div>
	);
}
