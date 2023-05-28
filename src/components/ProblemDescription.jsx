import React, { useState } from "react";
import axios from 'axios';
import {BACKEND_URL} from '../constants';

const ProblemDescription = (props) => {
    let {title, description, exampleIn, exampleOut, acceptance, constraints, problemId} = props.problem;
    const [submissions, setSubmissions] = useState([]);
    const handleViewSubmissions = async () => {
        const headers = {
            "Authorization": localStorage.getItem('token'),
            "Content-Type": "application/json",
        }
        const resp = await axios.get(`${BACKEND_URL}submissions?questionId=${problemId}`, {headers})
        setSubmissions(resp.data.submissions);
    }
    return (
        <div className="problem-area">
            <h2>{title}</h2>
            <div className='description'>
                <h3>Description</h3>
                <p>{description}</p>
            </div>
            <div className='descitption'>
                <h3>Examples</h3>
                <p>Sample Input</p>
                <div>{exampleIn}</div>
                <p>Sample Output</p>
                <div>{exampleOut}</div>
            </div>
            <div className='descitption'>
                <h3>Constraints</h3>
                <div>{constraints}</div>
            </div>
            <div>
                <button onClick={handleViewSubmissions}>
                    View Submissions
                </button>
                <div>
                    <ul>
                        {submissions.map(submission=> {
                            return <li>{submission.status}</li>
                        })}
                    </ul>
                    
                </div>
            </div>
        </div>
    );
}

export default ProblemDescription;