import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../AuthContext';
import axios from 'axios';

function Question() {
  const navigate = useNavigate();
  const { isLoggedIn, token } = useContext(AuthContext);
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      axios
        .get('http://localhost:3001/questions/1', config)
        .then((response) => {
          setQuestion(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [isLoggedIn, navigate, token]);

  return (
    <div className='container'>
      {question && (
        <div className='row justify-content-center'>
          <div className='col-md-10'>
            <div>
              <h2>{question.title}</h2>
              <p>{question.description}</p>
              <p>{question.solution}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Question;
