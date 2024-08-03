import { useQueryClient, useQuery } from "@tanstack/react-query";
import { supabase } from "../client";
import { Card, CardDescription } from "../@/components/ui/card";
import { Button } from "../@/components/ui/button";
import { DownloadIcon } from "@radix-ui/react-icons";

const CDNURL =
	"https://zwjftropdormthafmzlp.supabase.co/storage/v1/object/public/images/";

async function getCurrentUser() {
	const { data, error } = await supabase.auth.getUser();
	if (error) throw error;

	return data;
}
function useAuthorName(userId: string) {
	return useQuery({
		queryKey: ["author", userId],
		queryFn: () => identifyAuthor(userId),
	});
}

function ImageCard({ image }) {
	const { data: authorName, isLoading: isAuthorLoading } = useAuthorName(
		image.user_id,
	);

	const handleDownload = async () => {
		try {
			const { data, error } = await supabase.storage
				.from("images")
				.download(image.file_path);

			if (error) {
				throw error;
			}

			// Create a URL for the downloaded data
			const url = URL.createObjectURL(data);

			// Create a temporary anchor element and trigger download
			const link = document.createElement("a");
			link.href = url;
			link.download = image.file_path.split("/").pop(); // Set the filename
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);

			// Clean up the URL object
			URL.revokeObjectURL(url);
		} catch (error) {
			console.error("Download failed:", error);
			// Handle the error (e.g., show a notification to the user)
		}
	};

	return (
		<Card key={image.id} className="flex flex-col gap-2 py-5 px-3 ">
			<img
				className="h-72 max-w-50 object-cover"
				src={`${CDNURL}${image.file_path}`}
				alt=""
			/>
			<Button onClick={handleDownload}>
				<DownloadIcon />
			</Button>
		</Card>
	);
}

export default function ImageGallery({ type = "" }) {
	const queryClient = useQueryClient();
	const { data, isLoading } = useQuery({
		queryKey: ["allImages"],
		queryFn: async () => {
			const { user } = await getCurrentUser();
			let query = supabase
				.from("images")
				.select("file_path, user_id, id, type");

			if (type !== "") {
				query = query.eq("type", type);
			}
			const { data, error } = await query;
			if (error) throw error;
			return { data, user };
		},
	});

	if (isLoading) return <p>Loading...</p>;

	return (
		<div className="grid grid-cols-3 gap-4 min-w-full justify-items-center items-center py-7 px-20">
			{data?.data.map((image) => (
				<ImageCard key={image.id} image={image} />
			))}
		</div>
	);
}
