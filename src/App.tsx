import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/login";
import SignUpPage from "./pages/register/register";
import Navbar from "./components/Navbar";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/login" element={<LoginPage />} />
				<Route path="/register" element={<SignUpPage />} />
				<Route path="/" element={<Navbar />} />
			</Routes>
		</Router>
	);
}

export default App;
