import React from 'react';
import { useState } from "react";
import './homepage.css';
import { useNavigate} from "react-router-dom";



const problems1 = [{
    title: "6. Zigzag Conversion",
    difficulty: "Medium",
    acceptance: "32.5%",
  },
  {
    title: "7. Reverse Integer",
    difficulty: "Easy",
    acceptance: "25.5%",
  },
  {
    title: "8. String to Integer (atoi)",
    difficulty: "Medium",
    acceptance: "15.5%",
  },
  {
    title: "9. Palindrome Number",
    difficulty: "Easy",
    acceptance: "45.5%",
  }]
  
  const problems2 = [{
    title: "10. Regular Expression Matching",
    difficulty: "Hard",
    acceptance: "32.5%",
  },
  {
    title: "11. Container With Most Water",
    difficulty: "Medium",
    acceptance: "25.5%",
  },
  {
    title: "12. Integer to Roman",
    difficulty: "Medium",
    acceptance: "15.5%",
  },
  {
    title: "13. Roman to Integer",
    difficulty: "Easy",
    acceptance: "45.5%",
  }]
function homepage() {
const [problems, setProblems] = useState([]);
const navigate = useNavigate();
const navigateToSignup= () => {
    // 👇️ navigate to /contacts
    navigate('/signup');
  };

  const navigateToProblem = (title) => {
    navigate(`/${title}`);
  };


  return (
    <div>

         <div>
                <button id='Signup button' onClick={navigateToSignup}>Signup</button>
            </div>
        <div>
              <button onClick={() => {
                setProblems(problems => problems1);
              }}> 1</button>
              <button onClick={() => {
                setProblems(problems => problems2);
              }}> 2</button>
            </div>
           
            <div>
                <ColumnTitle />
              {problems.map((problem) => {
                return <ProblemStatement
                  title={problem.title}
                  difficulty={problem.difficulty}
                  acceptance={problem.acceptance}
                  navigateToProblem={navigateToProblem}
                />
              })}
            </div>
    </div>
  );
}
function ColumnTitle(){
    return(
        <div>
            <table id='column-headings'>
                <tr>
                    <th>Problem</th>
                    <th>Acceptance</th>
                    <th>Difficulty</th>
                </tr>
            </table>
        </div>
    )
}

function ProblemStatement(props) {
    const title = props.title;
    const acceptance = props.acceptance;
    const difficulty = props.difficulty;
    const navigateToProblem = props.navigateToProblem;
    const trimmed_title = title.split(" ").join("");

    return (
      <div>
        <table id='questions'>
          <tr >
            <td onClick = {()=>navigateToProblem(trimmed_title)}>{title}</td>
            <td>{acceptance}</td>
            <td style={{ color: difficulty === "Easy" ? "green" : difficulty === "Medium" ? "blue" : "red" }}>{difficulty}</td>
          </tr>
        </table>
      </div>
    )
  
  
  }

export default homepage;