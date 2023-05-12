import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { useEffect } from 'react';
import axios from 'axios';
const Problem = () => {

  const [problems,setProblems]=useState([]);

  const problemAPI=async()=>{
    const response=await axios.get(`http://127.0.0.1:5000/problems`);
    console.log(response.data.problems);
    setProblems(response.data.problems)
  }

  useEffect(()=>{
    problemAPI();
  },[])

  return (
    <div className="problem-page">
      <div className="problems_all">
        {problems.map((p) => (
          <div key={p._id}>
            <div>
             <Link to={`/problemset/${p._id}`} state={{ problem: p }}>
                <div>{p.question}</div>
                <div>{p.author}</div>
                <div>{p.hints}</div>
              </Link>
            </div>
            <br />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Problem
