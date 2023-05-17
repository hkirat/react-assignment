import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ProblemPage = ({ problems }) => {
  const { pid } = useParams();
  const [solution, setSolution] = useState('');

  const handleSolutionChange = (event) => {
    setSolution(event.target.value);
  };
  const question = problems.find((prob) => {
    return prob.problemId === pid;
  })
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle submission logic here
    // can send the solution to an API or perform other actions
    // console.log('Submitted solution:', solution);
  };

  return (
    <div className="problem-container">
      <div className="problem-box">
        <h2 className="problem-title">{question.title}</h2>
        <h3 className='problem-sHead'>Description</h3>
        <p className='problem-question'>{question.description}</p>
        <h3 className='problem-sHead'>Examples</h3>
        {/* Render examples here */}

        <code>Input : {question.exampleIn}</code>
        <code>Output : {question.exampleOut}</code>


      </div>
      <div className='code-box'>
        <h3 className='sol'>Solution</h3>
        <form className="solution-form" onSubmit={handleSubmit}>
          <textarea
            value={solution}
            onChange={handleSolutionChange}
            placeholder="Type your solution here"
            className="solution-textarea"
          />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProblemPage;
