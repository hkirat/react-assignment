import React, {useState, useEffect} from "react";
import axios from 'axios';
import {BACKEND_URL} from '../constants';

const ProblemSolution = (props) => {
    const {problemId} = props;
    const [submissions, setSubmissions] = useState([]);
    const init = async () => {
        const headers = {
            "Authorization": localStorage.getItem('token'),
            "Content-Type": "application/json",
        }
        const resp = await axios.get(`${BACKEND_URL}submissions?questionId=${problemId}`, {headers});
        setSubmissions(resp.data.submissions);
    }
    useEffect(()=>{
        init()
    }, [])

    return (
        <div>
            <div>
                Your Submissions
            </div>
            <div>
                <ul>
                    {submissions.map((submission, index)=> {
                        return <li key = {index}>{submission.status}</li>
                    })}
                </ul>
            </div>
        </div>
    );
}
export default ProblemSolution;