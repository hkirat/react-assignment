import "./Problemsets.css";
import Problems from "../problems/Problems.jsx";
import { backendURL } from "../../constants/constants.js";
import { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function ProblemsTable( {problems} ) {
  let content = [];

  content.push(
    <tr key={-1}>
      <th>
        Id
      </th>
      <th>
        Title 
      </th>
      <th>
        Difficulty 
      </th>
      <th>
        Acceptance 
      </th>
    </tr>
  )
  problems.forEach((problem) => {
    let difficultyColor;
    if(problem.difficulty === "Hard") {
      difficultyColor = {color: "red"};
    }
    else if(problem.difficulty === "Medium") {
      difficultyColor = {color: "yellow"};
    }
    else {
      difficultyColor = {color: "green"};
    }
    content.push(
      <tr key={problem.id}>
        <td>{problem.id}</td>
        <td><Link to={"/problems/" + problem.id}>{problem.title}</Link></td>
        <td style={difficultyColor}>{problem.difficulty}</td>
        <td>{problem.acceptance}</td>
      </tr> 
    ) 
  })

  return (
    <>
      <div className="container">
        <table className="problemset">
          <tbody> 
          {content}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default function Problemsets() {
  const [ problems, setProblems ] = useState([]);
  useEffect(() => {
    getProblems();
  }, [])

  const getProblems = async () => {
    try {
      const response = await fetch(`${backendURL}/problemsets`, {
          method: "GET",
      })
      const json = await response.json();
      setProblems(json.questions);
    }
    catch(err) {
      console.log(err.message);
    }
  }

  return (
    <>
      <ProblemsTable problems={problems} />
    </>
  )
} 
