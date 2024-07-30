import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/login";
import SignUpPage from "./pages/register/register";
import Navbar from "./components/Navbar";
import ForgotPassword  from "./pages/forgot-password/forgot-password";

function App() {
    return (
        <Router>
            <Routes>
                {/* <Route path="/" element={<HomePage />} />  */}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<SignUpPage />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
			</Routes>
		</Router>
	);
}

export default App;
