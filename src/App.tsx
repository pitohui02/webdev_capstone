
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login/login';
import SignUpPage from './pages/register/register';
import HomePage from './pages/Home/HomePage';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} /> 
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<SignUpPage />} />
            </Routes>
        </Router>
    );
}

export default App;
