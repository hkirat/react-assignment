import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProblemDetails.css";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript"; // Import the mode for the programming language you want to support
import "ace-builds/src-noconflict/mode-python"; // Import mode for Python
import "ace-builds/src-noconflict/mode-java"; // Import mode for Java
import "ace-builds/src-noconflict/mode-csharp"; // Import mode for C#
import "ace-builds/src-noconflict/theme-monokai"; // Import the theme for the code editor

export default function ProblemDetails({ problems }) {
  const { problemId } = useParams();
  const problem = getProblemById(problemId);

  const [code, setCode] = useState("");

  // console.log(code);
  const [language, setLanguage] = useState("javascript");

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleCodeChange = (value) => {
    // Handle code change
    setCode(value);
  };

  const navigate = useNavigate();

  const handleClick = () => {
    alert(`Your response has been Submitted`);
    navigate("/problems");
  };

  function getProblemById(problemId) {
    return problems.find((problem) => problem.id.toString() === problemId);
  }

  // console.log(problems);
  return (
    <div className="problem-details">
      <h1 className="problem-details__title">Problem Details</h1>
      <h2 className="problem-details__subtitle">
        Problem Title: {problem.title}
      </h2>
      <p className="problem-details__description">
        Problem Description: {problem.problemStatement}
      </p>
      <p className="problem-details__description">Input: {problem.input}</p>
      <p className="problem-details__description">Output: {problem.output}</p>
      <p className="problem-details__description">
        Explanation: {problem.explanation}
      </p>
      <div>
        <select value={language} onChange={handleLanguageChange}>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="csharp">C#</option>
        </select>
      </div>

      <AceEditor
        mode={language}
        theme="monokai"
        value={code}
        onChange={handleCodeChange}
        name="code-editor"
        editorProps={{ $blockScrolling: Infinity }}
        style={{ width: "100%", height: "500px" }}
      />

      <div className="button-container">
        <button>Run</button>
        <button onClick={handleClick}>Submit</button>
      </div>
    </div>
  );
}
