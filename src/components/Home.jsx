import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../AuthContext';

function Home() {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  

  return isLoggedIn ? (
    <div>
      <div>Welcome to the new home page!</div>
      
    </div>
  ) : null;
}

export default Home;