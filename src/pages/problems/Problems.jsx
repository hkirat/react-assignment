import "./Problems.css";
import { useParams } from 'react-router-dom'; 
  
function searchQuestion(id) {
  const problems = [
    {
      id: 1,
      title: "Bitwise AND of Numbers Range",
      difficulty: "Medium",
      acceptance: "42%",
      content: "Given a number, find another number",
      testCase: "[1, 2, 3, 4]",
      output: "3"
    },
    {
      id: 2,
      title: "Bitwise AND of Numbers Range",
      difficulty: "Medium",
      acceptance: "41%",
      content: "Given a number, find another number",
      testCase: "[1, 2, 3, 4]",
      output: "3"
    },
    { 
      id: 3,
      title: "Happy Number",
      difficulty: "Easy",
      acceptance: "54.9%",
      content: "Given a number, find another number",
      testCase: "[1, 2, 3, 4]",
      output: "3"
    },
    {
      id: 4, 
      title: "Remove Linked List Elements",
      difficulty: "Hard",
      acceptance: "42%",
      content: "Given a number, find another number",
      testCase: "[1, 2, 3, 4]",
      output: "3"
    }
  ];
  
  for(let i = 0; i < problems.length; i++) {
    let problem = problems[i]
    if(problem.id == id) {
      return problem;
    }
  }
}

export default function Problems() {
  let { id } = useParams();

  let question = searchQuestion(id);

  return (
    <div className="container">
      <div className="wrapper"> 
        <div className="question-info half">
        <h1>{id}. {question.title}</h1>
        <br />
        <p className="desc-label">Description</p>
        <br /><br />
        <p className="description">{question.content}</p>
        <p className="test-case">Test case: {question.testCase}</p>
        <p className="output">Output: {question.output}</p>
        </div>
        <div className="input-box half">
          <textarea type="text" className="code-area" />
          <button type="submit" className="code-submit">Submit</button>
        </div>
      </div>
    </div>
  )  
}

