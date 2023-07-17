import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

// {
//     "id": 1432,
//     "title": "Maximum Element",
//     "difficulty": "easy",
//     "description": "Given an array, return the maximum of the array",
//     "testCases": [
//       {
//         "input": "[1,2,3,4,5]",
//         "output": "5"
//       }
//     ]
//   },

function SolveProblem() {
  const { id } = useParams();
  const [problem, setProblem] = useState({});

  useEffect(() => {
    async function getProblem() {
      const response = await fetch(
        `http://127.0.0.1:3001/questions?problemId=${id}`
      );
      const problem = await response.json();

      setProblem(problem.question);
    }

    getProblem();
  }, []);

  return (
    <section className="SolveProblem">
      <div className="problem__statement">
        <Link to="/problems/all" className="goBack">
          {"<"} Problems
        </Link>
        <div className="problem__head">
          <p>
            {problem.id}. {problem.title}
          </p>
          <p>{problem.difficulty}</p>
        </div>
        <p className="problem__description">{problem.description}</p>
        <div className="testcases">
          <p>Testcases</p>
          {problem.testCases?.map((testcase, i) => (
            <div className="testcase" key={i}>
              <p>Input: {testcase.input}</p>
              <p>Output: {testcase.output}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="problem__input">
        <textarea placeholder="Enter the code"></textarea>
        <button>Submit</button>
      </div>
    </section>
  );
}

export default SolveProblem;
