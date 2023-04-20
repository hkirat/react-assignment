import { useState } from "react";
import "./../../../index.css"
import ReactDOM, { createRoot } from 'react-dom/client'
import Navbar from "../../navbar/Navbar";
const problems = [
 {
    title: "201. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "42%",
  },

  {
    title: "202. Happy Number",
    difficulty: "Easy",
    acceptance: "54.9%",
  },
  {
    title: "203. Remove Linked List Elements",
    difficulty: "Hard",
    acceptance: "42%",
  },
]


const problems2 = [
 {
    title: "201. Bitwise",
    difficulty: "Medium",
    acceptance: "42%",
  },

  {
    title: "202. Happy N",
    difficulty: "Easy",
    acceptance: "54.9%",
  },
  {
    title: "203. RLied List Elements",
    difficulty: "Hard",
    acceptance: "42%",
  },
]



const Problems = () => {
  const [problems1, setProblems] = useState(problems)
  return (
    <>
    <Navbar/>
      <h2>Problems</h2>
      <br/>
      <button id="problembutton" onClick={() => { console.log('hello'), setProblems(problems) }}>1</button>
      <button id="problembutton" onClick={() => { console.log('Hello'), setProblems(problems2) }}>2</button>
    <hr/>
      {problems1.map(el => <table key={el.title}><tbody><tr>
        <td>{el.title}</td>
        <td>{el.difficulty}</td>
        <td>{el.acceptance}</td>
        </tr></tbody></table>
      )}
    </>
  )

}

export default Problems
