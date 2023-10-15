import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from './../assets/logo/logo.jpg';

const ProblemDetails = (props) => {
  const { pid } = useParams();
  const cleanId = pid.substring(1);
  const [problem, setProblem] = useState('');
  const [submission, setSubmission] = useState('');
  const [result, setResult] = useState('');
  const [showResult, setShowResult] = useState(false); // New state for result visibility
  const [submissions, setSubmissions] = useState([]);
  const [showSubmissions, setShowSubmissions] = useState(false); // state for Getsubmission visibility
  const { userId } = props;

  const init = async () => {
    const response = await fetch('http://localhost:3000/question/' + cleanId, {
      method: 'GET',
    });
    const json = await response.json();
    setProblem(json.question);
  };

  const handleSubmit = () => {
    postSubmit();
    getSubmit();
  };

  useEffect(() => {
    init();
  }, []);

  const postSubmit = async () => {
    const response = await fetch('http://localhost:3000/submissions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('Token'),
      },
      body: JSON.stringify({
        problemId: cleanId,
        submission: submission,
        userId: userId,
      }),
    });

    const json = await response.json();
    console.log(json);
  };

  const getSubmit = async () => {
    const response = await fetch(
      'http://localhost:3000/submission/' + cleanId,
      {
        method: 'GET',
        headers: {
          authorization: localStorage.getItem('Token'),
        },
      }
    );
    const json = await response.json();
    console.log(json);
  };

  const handleRun = async () => {
    const response = await fetch('http://localhost:3000/run', {
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
    setResult(json.status);
    setShowResult(true);
    console.log(result);
    console.log(json);
  };

  const difficultyColor = (value) => {
    if (value === 'Easy') {
      return 'text-success';
    } else if (value === 'Medium') {
      return 'text-warning';
    } else return 'text-danger';
  };

  const generateResult = (result) => {
    if (result === 'WA') {
      return <span className="text-danger">Wrong Answer</span>;
    } else {
      return <span className="text-success">Accepted</span>;
    }
  };

  if (!problem) {
    return <h1>Problem Not found!</h1>;
  }
  return (
    <>
      <div className="row container">
        <div className="row">
          <div className="col-2">
            <Link className="navbar-brand" to="/">
              <img
                src={logo} // Replace with the actual path to your logo image
                alt="Your Logo"
                className="logo"
              />
            </Link>
          </div>
          <div className="col-2" style={{ marginTop: '.5rem' }}>
            <Link className="nav-link" to="/problems">
              <h4>All Problems</h4>
            </Link>
          </div>
        </div>
        <div>
          <h1>
            {problem.id}. {problem.title}
          </h1>
        </div>
        <section className="col-md-8">
          <div>
            <h4 className={`${difficultyColor(problem.difficulty)}`}>
              {problem.difficulty}
            </h4>
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
          <div>
            {showResult && <div>Result : {generateResult(result)}</div>}
          </div>
        </section>
        <section className="col-md-4">
          <div>
            <textarea
              name="code"
              onChange={(e) => setSubmission(e.target.value)}
              cols="69"
              rows="20"
              // style={{ maxWidth: '100%' }} // Limit the width of the textarea
              placeholder="Write your code here ..."
            ></textarea>
          </div>
          <div className="d-grid gap-1 d-md-flex">
            <button
              type="button"
              onClick={handleRun}
              className="btn btn-success"
            >
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
