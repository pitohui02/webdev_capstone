import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<nav className="bg-gray-800 flex items-center justify-evenly gap-5 px-8 py-6">
			<div className="flex items-center">
				<img src="" alt="Your Logo" className="h-8 w-8 mr-4" />
				<span className="text-white text-xl font-bold">OnlyImages</span>
			</div>

			<input
				type="text"
				className="rounded-md flex-grow px-3 py-2 border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				placeholder="Search images..."
			/>
			<div className="flex space-x-5 min-w-[150px] min-h-[40px]">
				<Link to="/login"
					type="button"
					className="rounded-md bg-slate-700 hover:bg-slate-900 text-yellow-500 px-3 py-2 font-small font-bold text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				>
					Login
				</Link>
				<Link to="/register"
					type="button"
					className="rounded-md bg-transparent border  bg-yellow-500 hover:bg-yellow-700 text-slate-800 text-sm font-bold px-3 py-2 font-small focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				
				>
					Sign Up
				</Link>
			</div>
		</nav>
	);
}
