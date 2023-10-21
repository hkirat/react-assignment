import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Layout from './pages/Layout';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SignupSuccess from './pages/SignupSucess';
import Problems from './pages/Problems';
import ProblemDetails from './pages/ProblemDetails';
import NoPage from './pages/noPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [problemId, setProblemId] = useState(null);
  const [userId, setUserId] = useState(null);

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
        <Route
          path="/"
          element={
            <Layout isAuthenticated={isAuthenticated} onLogout={logout} />
          }
        >
          <Route index element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signupsuccess" element={<SignupSuccess />} />
          <Route
            path="/login"
            element={
              <Login
                onLogin={login}
                setUserId={setUserId}
                problemId={problemId}
              />
            }
          />
          <Route
            path="/problems"
            element={<Problems setProblemId={setProblemId} />}
          />
          <Route path="*" element={<NoPage />} />
        </Route>
        <Route
          path="/problem/:pid/"
          element={requireAuth(<ProblemDetails userId={userId} />)} // Protect this route with requireAuth
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
