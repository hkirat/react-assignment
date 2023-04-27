import { useState } from "react";

const defaultCode = {
  js: `/**
* @param {number[]} nums
* @return {number}
*/
var maxSubArray = function(nums) {
};`,
  java: `/**
* @param {number[]} nums
* @return {number}
*/
public int maxSubArray(int[] nums) {
};`
};

function ProblemPage() {
  const [problem, setProblem] = useState({
    title: "Add Two Numbers",
    description: "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list. You may assume the two numbers do not contain any leading zero, except the number 0 itself.",
    examples: [
      {
        input: "l1 = [2,4,3], l2 = [5,6,4]",
        output: "[7,0,8]",
        explanation: "342 + 465 = 807"
      },
      {
        input: "l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]",
        output: "[8,9,9,9,0,0,0,1]",
        explanation: ""
      }
    ]
  });
  const [language, setLanguage] = useState("js");
  const [code, setCode] = useState(defaultCode[language]);

  const handleLanguageChange = (e) => {
    const newLanguage = e.target.value;
    setLanguage(newLanguage);
    setCode(defaultCode[newLanguage]);
  };

  return (
    <div>
      <h1>{problem.title}</h1>
      <p>{problem.description}</p>
      <br></br>
      {problem.examples.map((example, index) => (
        <Example
          key={index}
          input={example.input}
          output={example.output}
          explanation={example.explanation}
        />
      ))}
      <label htmlFor="language-select">Select Language : </label>
      <select
        id="language-select"
        value={language}
        onChange={handleLanguageChange}
      >
        <option value="js">JavaScript</option>
        <option value="java">Java</option>
      </select>
      <br></br>
      <br></br>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        style={{ width: "100%", minHeight: "200px" }}
      ></textarea>
      <br></br>
      <br></br>
      <button type="button">Submit</button>
    </div>
  );
}

function Example({ input, output, explanation }) {
  return (
    <div>
      <div>
        <strong>Input:</strong> {input}
      </div>
      <div>
        <strong>Output:</strong> {output}
      </div>
      <div>
        <strong>Explanation:</strong> {explanation}
      </div>
      <br></br>
    </div>
  );
}

export default ProblemPage;
