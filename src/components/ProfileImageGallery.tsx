import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "../client";
import { Card } from "../@/components/ui/card";
import { Button } from "../@/components/ui/button";

const CDNURL =
	"https://zwjftropdormthafmzlp.supabase.co/storage/v1/object/public/images/";

async function getCurrentUser() {
	const { data, error } = await supabase.auth.getUser();
	if (error) throw error;

	return data;
}

export function ProfileImageGallery() {
	const queryCient = useQueryClient();
	const { data, isLoading } = useQuery({
		queryKey: ["userImages"],
		queryFn: async () => {
			const user = await getCurrentUser();

			const { data, error } = await supabase.storage
				.from("images")
				.list(`${user.user.id}/`, {
					limit: 100,
					offset: 0,
					sortBy: { column: "name", order: "asc" },
				});

			if (error) throw error;

			return { data, user };
		},
	});

	const deleteImageMutation = useMutation({
		mutationFn: async (imageName: string) => {
			const user = await getCurrentUser();
			const { error } = await supabase.storage
				.from("images")
				.remove([`${user.user.id}/${imageName}`]);

			if (error) throw error;

			await supabase
				.from("images")
				.delete()
				.eq("file_path", `${user.user.id}/${imageName}`);
		},
		onSuccess: () => {
			queryCient.invalidateQueries({ queryKey: ["userImages"] });
		},
	});

	if (isLoading) return <p>Loading...</p>;

	return (
		<div className="grid grid-cols-3 gap-5">
			{data?.data?.map((image) => {
				return (
					<Card
						key={image.name}
						className="flex flex-col  gap-4 justify-center items-center px-3 py-4"
					>
						<img
							className="h-72 max-w-50 object-cover"
							key={image.name}
							src={`${CDNURL}${data.user.user.id}/${image.name}`}
							alt=""
						/>
						<Button
							variant={"destructive"}
							onClick={() => deleteImageMutation.mutate(image.name)}
						>
							Delete
						</Button>
					</Card>
				);
			})}
		</div>
	);
}
