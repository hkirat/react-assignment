import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../AuthContext';
import axios from 'axios';

function Home() {
  const navigate = useNavigate();
  const { isLoggedIn,token } = useContext(AuthContext);
  const [problems, setProblems] = useState([]);
  const handleProblemClick = (problem) => {
    navigate(`/questions/${problem.id}`);
  };

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
    else {
        console.log(token+ " priniting token")
        const config = {
          headers: { Authorization: `Bearer ${token}` }
        };
        axios.get('http://localhost:3001/questions', config
        ).then(response => {
            setProblems(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      }
    }, [isLoggedIn, navigate, token]);

  return isLoggedIn ? (
    <div className='container'>
      <div className='container mt-5'>
        <div className='row justify-content-center'>
          <div className='col-md-10'>
            <div>
              <table className='table'>
                <thead>
                  <tr>
                    <th className='col'>#</th>
                    <th className='col'>Title</th>
                    <th className='col'>Description</th>
                    <th className='col'>Solution</th>
                    <th className='col'>Acceptance</th>
                    <th className='col'>Difficulty</th>
                  </tr>
                </thead>
                <tbody>
                  {problems.map((problem, index) => (
                    <tr key={problem.id} onClick={() => handleProblemClick(problem)}>
                      <th scope='row'>{index + 1}</th>
                      <td>{problem.title}</td>
                      <td>{problem.description}</td>
                      <td>{problem.solution}</td>
                      <td>{problem.acceptance}</td>
                      <td>{problem.difficulty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export default Home;
