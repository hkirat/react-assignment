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
    title: "69. Bitwise",
    difficulty: "Medium",
    acceptance: "42%",
  },

  {
    title: "420. Happy N",
    difficulty: "Easy",
    acceptance: "54.9%",
  },
  {
    title: "69420. RLied List Elements",
    difficulty: "Hard",
    acceptance: "42%",
  },
]



const Problems = () => {
  const [problems1, setProblems] = useState(problems)
  
 


  return (
    <>
    <Navbar/>
    <div className="mx-10 mt-10  ">  
    <h1 className="text-5xl text-sans font-medium text-white">Problems</h1>
    <br/>
    <div className="">
    <button className="w-8 h-8 rounded-l-lg border-2  border-white text-white " onClick={() => {  setProblems(problems) }}>1</button>
    <button className="mx-4 w-8 h-8 rounded-r-lg border-2 border-white " onClick={() => { console.log('Hello'), setProblems(problems2) }}>2</button>
    </div>
    <div className="mt-2 text-white">
    
    <table className="table-fixed ">
    <thead>
    <tr >
    <th >Problems</th>
    <th>Difficulty</th>
    <th >Acceptance</th>
    </tr>
    </thead>
    <tbody>

    {
      problems1.map(el => 
     <tr key={el.title}>
      <td >{el.title}</td>
      <td>{el.difficulty}</td>
      <td>{el.acceptance}</td>
    </tr>
    )}

</tbody>
    </table>
    </div>
    </div>
    </>
  )

}

export default Problems
