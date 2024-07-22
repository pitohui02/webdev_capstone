import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import NavMenu from "../components/NavMenu";
import HomePage from "../pages/Home/HomePage";

export default function Root() {
	return (
		<>
			<Navbar />
			<NavMenu />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/photos" element={<div>This is the photo page</div>} />
				<Route
					path="/illustrations"
					element={<div>This is the illustrations page</div>}
				/>
			</Routes>
		</>
	);
}
