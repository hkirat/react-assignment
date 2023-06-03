import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import LoginPage from './page/LoginPage/LoginPage';
import HomePage from './page/HomePage/HomePage';
import SignupPage from './page/SignupPage/SignupPage';
import DashboardPage from './page/DashboardPage/DashboardPage';
import ProblemPage from './page/ProblemPage/ProblemPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/signup" element={<SignupPage/>} />
                <Route path="/problemset/all" element={<DashboardPage/>} />
                <Route path="/problem/:problem_slug" element={<ProblemPage />} />
            </Routes>
        </Router>
  );
}
export default App
