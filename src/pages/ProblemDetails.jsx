import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProblemDetails = () => {
  const { pid } = useParams();
  const cleanId = pid.substring(1);
  const [problem, setProblem] = useState('');
  const [submission, setSubmission] = useState('');

  const init = async () => {
    const response = await fetch('http://localhost:3000/question/' + cleanId, {
      method: 'GET',
    });
    const json = await response.json();
    setProblem(json.question);
  };

  useEffect(() => {
    init();
  }, []);
  if (!problem) {
    return <h1>Problem Not found!</h1>;
  }

  const handleSubmit = async () => {
    const response = await fetch('http://localhost:3000/submissions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('Token'),
      },
      body: JSON.stringify({
        problemId: cleanId,
        submission: submission,
      }),
    });

    const json = await response.json();
    console.log(json);
  };

  return (
    <>
      <div className="row container">
        <div>
          <h1>
            {problem.id}. {problem.title}
          </h1>
        </div>
        <section className="col-md-8">
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
        </section>
        <section className="col-md-4">
          <div>
            <textarea
              name="code"
              onChange={(e) => setSubmission(e.target.value)}
              cols="70"
              rows="20"
              // style={{ maxWidth: '100%' }} // Limit the width of the textarea
              placeholder="Write your code here ..."
            ></textarea>
          </div>
          <div className="d-grid gap-1 d-md-flex">
            <button type="button" className="btn btn-success">
              Run
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="btn btn-success"
            >
              Submit
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProblemDetails;
