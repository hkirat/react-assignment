import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Layout from './pages/Layout';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Problems from './pages/Problems';
import ProblemDetails from './pages/ProblemDetails';
import NoPage from './pages/noPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [problemId, setProblemId] = useState(null);

  // Function to simulate a login
  const login = (token) => {
    localStorage.setItem('Token', token);

    setIsAuthenticated(true);
  };

  // Function to simulate a logout
  const logout = () => {
    localStorage.removeItem('Token');

    setIsAuthenticated(false);
  };

  // A function to handle authentication-based redirection
  const requireAuth = (component) => {
    return isAuthenticated ? component : <Navigate to="/login" />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="signup" element={<Signup />} />
          <Route
            path="login"
            element={<Login onLogin={login} problemId={problemId} />}
          />
          <Route
            path="problems"
            element={<Problems setProblemId={setProblemId} />} // Protect this route with requireAuth
          />
          <Route
            path="/problem/:pid/"
            element={requireAuth(<ProblemDetails />)} // Protect this route with requireAuth
          />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
