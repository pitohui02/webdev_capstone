import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import NavMenu from "../components/NavMenu";
import HomePage from "../pages/Home/HomePage";
import SignUpPage from "../pages/register/register";
import LoginPage from "../pages/login/login";
import ProfilePage from "../pages/profile/profile";

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
				<Route path ="/register" element={<SignUpPage />} />
				<Route path ="/login" element={<LoginPage />} />
				<Route path ="/profile" element={<ProfilePage />} />
			</Routes>
		</>
	);
}
