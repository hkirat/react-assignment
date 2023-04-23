import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

function ProblemStatement() {
 const id = useParams()
 // console.log(id);
 const location = useLocation()
 const { state } = location
 // console.log(state);
 const { problem } = state;
 return (
  <div className="problem_set">
   <div className="problem_set_header">
    <div className="problem_set_title">{problem.title}</div>
    <div className="problem_set_stats">
     <div>{problem.difficulty}</div>
     <div>{problem.acceptance}</div>
    </div>
   </div>
   <div className="code_editor">
    <div className="editor_header">Write your code here:</div>
    <textarea className="code_area"></textarea>
   </div>
  </div>
 )
}

export default ProblemStatement