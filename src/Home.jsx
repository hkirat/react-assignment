import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from './AuthContext';

function Home() {
  const navigate = useNavigate();
  const { isLoggedIn, setAuthState } = useContext(AuthContext);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  const handleLogout = () => {
    // Perform logout logic here (e.g. make API call to backend)
    // ...
    // Update auth state
    setAuthState({ isLoggedIn: false, token: null });
    console.log("User log out successful")
    // Navigate to login page
    navigate('/login');
  };

  return isLoggedIn ? (
    <div>
      <div>Welcome to the home page!</div>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  ) : null;
}

export default Home;