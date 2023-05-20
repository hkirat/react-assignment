import React from "react";
import PROBLEMS from './data/problems.json';
import { useParams } from "react-router-dom";
import './problems.css';
function Problems(){
    const {id} = useParams();
    const currentProblem = PROBLEMS.find((problem) => problem.id === id);
    return(

        <div className="container">
                <div className="Problem_Description">
                    <h1>{currentProblem.title}</h1>
                    <h4>Problem Description: </h4>
                    <p>{currentProblem.description}</p>
                    <h4>Input & Output: </h4>
                    <p>{currentProblem.example}</p>
                    <h4>Explanations: </h4>
                    <p>{currentProblem.note}</p>
                </div>
                <div className="CodeBox">
                    <div className="CodeEditor">
                        <h4>Code Editor: </h4>
                        <input className="input"  type="text" placeholder="Enter your code here" required />
                    </div>
                      <div className="Buttons">
                        <button type="submit">Submit</button>
                        <button type="submit">Run</button>      
                    </div>
                </div>

        </div>

    )
}
export default Problems;
