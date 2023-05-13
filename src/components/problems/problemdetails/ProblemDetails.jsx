import React, { useEffect, useState } from "react";
import problems from "../problems.json";
import "./ProblemDetails.css";
import { useParams } from "react-router-dom";

export default function ProblemDetails() {
  const { id } = useParams();
  const [problem, setProblem] = useState(null);

  useEffect(() => {
    const problem = problems.find((problem) => problem.id == id);
    setProblem(problem);
  }, []);

  if (problem === null) {
    return <div>Loading...</div>;
  }

  const { title, description, difficulty, testCases } = problem;

  return (
    <div id="problempage" className="flex-row">
      <div className="ques">
        <h1>{title}</h1>
        <h4>Description</h4>
        <p>{description}</p>
        <h4>Difficulty Level : {difficulty.level}</h4>
        {testCases.map((item) => {
          return (
            <>
              <code>Input : {item.input}</code>
              <code>Output : {item.output}</code>
              <br />
            </>
          );
        })}
      </div>
      <div className="code">
        <h1>Code Here</h1>
        <form className="code-form" method="post" action="/runprogram">
          <textarea name="SolvedCode"></textarea>
          <button type="submit" id="test">
            TestCode
          </button>
          <button type="submit" id="submit">
            SubmitCode
          </button>
        </form>
      </div>
    </div>
  );
}
