import React from 'react';

const Title = ({ title }) => {
  return <h2>{title}</h2>;
};

const Example = ({ example }) => {
  const { input, output, explanation } = example;

  return (
    <div>
      <h4>Example</h4>
      <p>Input: {input}</p>
      <p>Output: {output}</p>
      <p>Explanation: {explanation}</p>
    </div>
  );
};

const ProblemDetail = ({ problemInfo }) => {
  return (
    <div>
      {problemInfo.map((problem, index) => (
        <div key={index}>
          <Title title={problem.title} />
          <Example example={problem.examples} />
        </div>
      ))}
    </div>
  );
};

export default ProblemDetail;
