import React from 'react'

export default function QuestionData({ questionData }) {
    return (
        <div className="question-data">
            <h1>{questionData.id}. {questionData.title}</h1>
            <br />
            <p className="desc-label">Description</p>
            <p className="description">{questionData.description}</p>
            <br />
            <p className="test-case">Test cases: </p>
            <ol>
            {questionData.testCases.map(function(data) {
                return (
                <li>
                    <p>Input: {data.input}</p>
                    <p>Output: {data.output}</p>
                </li>
                )
            })}
            </ol>
        </div>
        )      
    }
