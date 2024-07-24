<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/login";
import SignUpPage from "./pages/register/register";
import Navbar from "./components/Navbar";
import ForgotPassword  from "./pages/forgot-password/forgot-password";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/login" element={<LoginPage />} />
				<Route path="/register" element={<SignUpPage />} />
				<Route path="/" element={<Navbar />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
			</Routes>
		</Router>
	);
=======

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login/login';
import SignUpPage from './pages/register/register';
import ForgotPassword from './pages/forgot-password/forgot-password';

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
>>>>>>> 6343d0a031ed3efb78a448c55b218fc2edd45b27
}

export default App;
