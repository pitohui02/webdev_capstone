import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<nav className="bg-[#0B0B0C] flex items-center justify-evenly gap-5 px-8 py-6">
			<div className="flex items-center">
				<img src="" alt="Your Logo" className="h-8 w-8 mr-4" />
				<span className="text-[#F88D5B] text-xl font-bold">OnlyImages</span>
			</div>

			<input
				type="text"
				className="rounded-md flex-grow px-3 py-2 border-gray-700 bg-white-900 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				placeholder="Search images..."
			/>
			<div className="flex space-x-5 min-w-[150px] min-h-[40px]">
				<Link to="/login"
					type="button"
					className="rounded-md bg-[#262627] hover:bg-white text-[#FFAF8A] duration-500 px-3 py-2 font-small font-bold text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFAF8A]"
				>
					Login
				</Link>
				<Link to="/register"
					type="button"
					className="rounded-md bg-[#FFAF8A] hover:bg-white text-[#262627] duration-500 text-sm font-bold px-3 py-2 font-small focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				>
					Sign Up
				</Link>
			</div>
		</nav>
	);
}
