import React from "react";
import { useParams } from "react-router-dom";

const ProblemDetails = ({ problems }) => {
  const { id } = useParams();

  const problem = problems.find((prob) => prob.problemId === id);

  const { problemId, title, difficulty, question, examples } = problem;
  return (
    <main className="problem__set_page">
      <section className="problem__section">
        <h3>
          {problemId}.{title}
        </h3>
        <p className={difficulty}>{difficulty}</p>
        <p>{question}</p>
        {examples.map((example) => (
          <div key={example.title}>
            <h5>{example.title}</h5>
            <div>
              <h4>Input: {example.Input}</h4>
              <h4>Output: {example.Output}</h4>
            </div>
          </div>
        ))}
      </section>
      <section className="solution__section">
        <textarea />
      </section>
    </main>
  );
};

export default ProblemDetails;
