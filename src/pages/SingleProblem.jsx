import React from 'react'
import { useParams } from 'react-router-dom'
import problems from '../data/problemList'

const SingleProblem = () => {
    const { problemId }  = useParams();
    const problem = problems.find((x) => x.id === problemId);

    return (
        <div style={{margin: 20}}>
            <h1> Single Problem </h1>
            <h3>Title: {problem.title} </h3>
            <span style={{fontWeight: 'bold',  }}>Difficulty: {problem.difficulty} </span>
            <br />
            <span style={{fontWeight: 'bold'}}>Acceptance: {problem.acceptance} </span>
        </div>
    )
}

export default SingleProblem