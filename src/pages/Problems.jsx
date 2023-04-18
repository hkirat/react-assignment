import React, { useState } from 'react';
import ProblemStatement from '../components/Problems';
import {problems1, problems2} from '../data/problemList';
import "../App.css";

const Problems = () => {
    
    const [problems, setProblems] = useState(problems1)
    
    
  return (
    <div className="problems-container">
        
      <table className="problems-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Acceptance</th>
            <th>Difficulty</th>
          </tr>
        </thead>
        <tbody>
          {problems.map((problem) => {
            return (
              <ProblemStatement
                key={problem.id}
                title={problem.title}
                difficulty={problem.difficulty}
                acceptance={problem.acceptance}
              />
            );
          })}
        </tbody>
      </table>
      <button className='button' onClick={() => {
            setProblems(problems1);
        }}>1</button>
        <button className='button' onClick={() => {
            setProblems(problems2)
        }}>2</button>
    </div>
  );
};

export default Problems;
