import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import NavMenu from "../components/NavMenu";
import HomePage from "../pages/Home/HomePage";
import ProfilePage from "../pages/profile/profile";
import { ImageUpload } from "../components/FileUpload";

export default function Root() {
	const location = useLocation();

	const showNavMenuPaths = ["/", "/photos", "/illustrations"];

	const shouldShowNavMenu = showNavMenuPaths.includes(location.pathname);

	return (
		<>
			<Navbar />
			{shouldShowNavMenu && <NavMenu />}
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/photos" element={<div>This is the photo page</div>} />
				<Route
					path="/illustrations"
					element={<div>This is the illustrations page</div>}
				/>
				<Route path="/upload" element={<ImageUpload />} />
				<Route path="/profile/:userId" element={<ProfilePage />} />
			</Routes>
		</>
	);
}
