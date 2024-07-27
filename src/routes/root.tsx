import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SignUpPage from "../pages/register";
import LoginPage from "../pages/login";
import ProfilePage from "../pages/profile";

export default function Root() {
	return (
		<>
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
