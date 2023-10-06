import React from 'react';
import { useParams, Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import problemlist from '../data';

const ProblemDetails = () => {
  const { pid } = useParams();
  const cleanId = pid.substring(1);
  console.log(cleanId);

  const problem = problemlist.find((problem) => problem.id === cleanId);
  if (!problem) {
    return <h1>Problem Not found!</h1>;
  }

  return (
    <>
      <div>
        <div>
          <div>
            <h1>
              {problem.id}. {problem.title}
            </h1>
          </div>
          <div>
            <h4>{problem.difficulty}</h4>
          </div>
          <div>
            <h4>Acceptance Rate : {problem.acceptanceRate}</h4>
          </div>
          <div>
            <h4>Description :</h4>
            <h5>{problem.description}</h5>
          </div>
          <div>Input : {problem.input}</div>
          <div>Output : {problem.output}</div>
        </div>
      </div>
      <div>
        <div>
          <textarea
            name="code"
            id=""
            cols="70"
            rows="20"
            placeholder="Write your code here ..."
          ></textarea>
        </div>
        <div>
          <button type="button">Run</button>
          <button type="button">Submit</button>
        </div>
      </div>
    </>
  );
};

export default ProblemDetails;
