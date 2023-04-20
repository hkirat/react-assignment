import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../AuthContext';
import axios from 'axios';
import config from '../config';
import { useParams } from 'react-router-dom';

function Question() {
  const navigate = useNavigate();
  const { isLoggedIn, token } = useContext(AuthContext);
  const [question, setQuestion] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (!isLoggedIn) {                                                                                          
      navigate('/login');
    } else {
      const reqconfig = {
        headers: { Authorization: `Bearer ${token}` },
      };                                                                                        
      const url = config.QUESTIONS_API_URL +"/"+ `${id}`
      axios
        .get(url, reqconfig)
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
