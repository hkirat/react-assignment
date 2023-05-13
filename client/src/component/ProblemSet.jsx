import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from "react-router-dom"
import axios from 'axios';

const ProblemSet = () => {
  const {id} = useParams();
  // const { state } = useLocation();
  // const { problem } = state;

  // const [problem,setProblem]=useState('');
  const [problem,setProblem]=useState({});

  const problemAPI=async()=>{
    const response=await axios.get(`http://127.0.0.1:5000/problem/${id}`);
    setProblem(response.data.problem)
  }

  useEffect(()=>{
    problemAPI();
    console.log(id)
  },[])

  return (
    <div className="problem_set">
      <div className="problem_set_header">
        <div className="problem_set_title">{problem.question}</div>
        <div className="problem_set_stats">
          <div>{problem.author}</div>
          <div>{problem.hints}</div>
        </div>
      </div>
      <div className="code_editor">
        <div className="editor_header">Write your code here:</div>
        <textarea className="code_area"></textarea>
      </div>
    </div>
  )
}

export default ProblemSet
