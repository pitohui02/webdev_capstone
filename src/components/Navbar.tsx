import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../client";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "../@/components/ui/button";
import { useToast } from "../@/components/ui/use-toast";

async function getCurrentUser() {
	const { data, error } = await supabase.auth.getUser();
	if (error) throw error;

	return data;
}

export default function Navbar() {
	const queryClient = useQueryClient();
	const navigate = useNavigate();
	const { toast } = useToast();

	const { data, isLoading } = useQuery({
		queryKey: ["currentUser"],
		queryFn: getCurrentUser,
	});

	if (isLoading) {
		return <div>Loading...</div>;
	}

	const handleLogout = async () => {
		try {
			await supabase.auth.signOut();
			queryClient.setQueryData(["currentUser"], null);
			queryClient.invalidateQueries({ queryKey: ["currentUser"] });
			navigate("/");
		} catch (error) {
			console.error("Error logging out", error);
			toast({
				title: "Error in logging out",
				description: "Something went wrong",
			});
		}
	};

	return (
		<nav className="bg-[#0B0B0C] flex items-center justify-evenly gap-5 px-8 py-6">
			<div className="flex items-center">
				<Link to={"/"}>
					<span className="text-[#F88D5B] text-xl font-bold">OnlyImages</span>
				</Link>
			</div>

			<div className="flex space-x-5 min-w-[150px] min-h-[40px]">
				{data ? (
					<>
						<Link
							type="button"
							to={"/upload"}
							className="rounded-md bg-[#262627] hover:bg-white text-[#FFAF8A] duration-500 px-3 py-2 font-small font-bold text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFAF8A]"
						>
							Upload
						</Link>
						<Link
							to={`/profile/${data.user.id}`}
							className="flex justify-center"
						>
							<span className="text-slate-200 self-center">
								Hello, {data.user.user_metadata.name || data.user.email}
							</span>
						</Link>
						<Button variant={"destructive"} onClick={handleLogout}>
							Logout
						</Button>
					</>
				) : (
					<>
						<Link
							to="/login"
							type="button"
							className="rounded-md bg-[#262627] hover:bg-white text-[#FFAF8A] duration-500 px-3 py-2 font-small font-bold text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFAF8A]"
						>
							Login
						</Link>
						<Link
							to="/register"
							type="button"
							className="rounded-md bg-[#FFAF8A] hover:bg-white text-[#262627] duration-500 text-sm font-bold px-3 py-2 font-small focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						>
							Sign Up
						</Link>
					</>
				)}
			</div>
		</nav>
	);
}
