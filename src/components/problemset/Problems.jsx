import React, { useContext, useState,useEffect } from 'react';
import "./Problems.css"

import {useDispatch} from 'react-redux'
import { updateId } from '../../redux/Action';
import Twosum from '../examples/Twosum';
import { useNavigate } from 'react-router';
function Problems() {
 
  const problems = [
    {
      questionId: '1',
      title: '201. Two Sum',
      difficulty: 'easy',
      acceptance: '49.8%%'
    },
    {
      questionId: '2',
      title: '201. Add Two Numbers',
      difficulty: 'Medium',
      acceptance: '40.4%'
    },
    {
      questionId: '3',
      title: '202. Zigzag Conversion',
      difficulty: 'medium',
      acceptance: '45.9%'
    },
    {
      questionId: '4',
      title: '203.  Reverse Integer',
      difficulty: 'medium',
      acceptance: '27.5%'
    }
  ];

  return (
    <div className='table-container'>
      <table className='problems-table'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Difficulty</th>
            <th>Acceptance</th>
          </tr>
        </thead>
        <tbody>
          {problems.map((problem, index) => (
            <ProblemStatement
              key={index}
              title={problem.title}
              difficulty={problem.difficulty}
              acceptance={problem.acceptance}
              questionId={problem.questionId}
              
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ProblemStatement(props) {
  const [id, setId] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { title, acceptance, difficulty, questionId } = props;

  let difficultyColor;
  if (difficulty.toLowerCase() === 'easy') {
    difficultyColor = 'green';
  } else if (difficulty.toLowerCase() === 'medium') {
    difficultyColor = 'yellow';
  } else {
    difficultyColor = 'red';
  }

  const handleClick = () => {
    setId(questionId);
  };

  useEffect(() => {
    if (id) {
      dispatch(updateId(id));
      const problemName=props.title.replace(/\s+/g, '-');
      navigate(`/problem/${problemName}/${questionId}`)
      console.log(id)
    }
  }, [id, dispatch, navigate]);

  return (
    <tr>
      <td>
        <h4 className='data' onClick={handleClick}>
          {title}
        </h4>
      </td>
      <td style={{ color: difficultyColor }}>{difficulty}</td>
      <td style={{color: '#0b0b0d99'}}>{acceptance}</td>
    </tr>
  );
}



export default Problems
