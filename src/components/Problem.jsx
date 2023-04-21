import React, { useEffect } from 'react'
import { useParams } from 'react-router'

const Problem = ({ problems }) => {

    const { id } = useParams()
    const { title, acceptance, difficulty } = problems.find(prob => prob.problemId === id)

    return (
        <div>
            <div style={{ border: '1px solid grey', margin: 10 }}>
                <h2>Title</h2>
                <p>{title}</p>
            </div>
            <div style={{ border: '1px solid grey', margin: 10 }}>
                <h4>Acceptance</h4>
                <p>{acceptance}</p>
            </div>
            <div style={{ border: '1px solid grey', margin: 10 }}>
                <h4>Difficulty</h4>
                <p>{difficulty}</p>
            </div>
        </div>
    )
}

export default Problem