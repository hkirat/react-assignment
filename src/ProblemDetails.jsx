import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProblemById } from './utils';
import './ProblemDetails.css';

const ProblemDetails = () => {
  const { id } = useParams();
  const problem = getProblemById(id);
  const [language,setLanguage]= useState('python');

  if (!problem) {
    return <p>Problem not found.</p>;
  }

  return (
    <div className="problem-details-container">
      <div className="problem-details">
        <h1 className="problem-title">{problem.title}</h1>
        <div className="problem-description">
          <h2>Description</h2>
          <p>{problem.description}</p>
        </div>
        <div className="problem-sample-cases">
          <h2>Sample Test Cases</h2>
          {
            problem.sampleTestCases.map((testCase,idx)=>(
                <div key={idx} className="sample-case">
                <h3>Input</h3>
                <pre>{testCase.input}</pre> 
                <h3>Output</h3>
                <pre>{testCase.output}</pre> 
              </div>
            ))
          }
        </div> 
      </div>
      <div className="right-section">
  <div className="language-selection">

    <button className="language-button" onClick={() => setLanguage("cpp")}>C++</button>
    <button className="language-button" onClick={() => setLanguage("python")}>Python</button>
    <button className="language-button" onClick={() => setLanguage("java")}>Java</button>
  </div>
  <div className="problem-ide">
    {language === "cpp" && (
      <pre>
        <code>{`
#include <iostream>

int main() {
  std::cout << "Hello, World!";
  return 0;
}
`}</code>
      </pre>
    )}
    {language === "python" && (
      <pre  >
        <code>{`def main():
    # Your code here
    pass

if __name__ == "__main__":
    main()`}</code>
      </pre>
    )}
    {language === "java" && (
      <pre>
        <code>{`public class Main {
    public static void main(String[] args) {
        // Your code here
    }
}
`}</code>
      </pre>
    )}

  </div>
  <button  className='submitSol'>Submit</button>
</div>

    </div>
  );
};

export default ProblemDetails;
