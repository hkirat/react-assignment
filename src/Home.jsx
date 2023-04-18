import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from './AuthContext';

function Home() {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);
  console.log("isLoggedI : " + isLoggedIn)
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  return isLoggedIn ? <div>Welcome to the home page!</div> : null;
}

export default Home;