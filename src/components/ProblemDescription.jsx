import React, { useState } from "react";
import axios from 'axios';
import {BACKEND_URL} from '../constants';
import styles from '../page/ProblemPage/styles.module.css';
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
        <div className={styles.problemDescription}>
            <div>{title}</div>
            <div className='description'>
                <div>Description</div>
                <div>{description}</div>
            </div>
            <div className='descitption'>
                <div>Examples</div>
                <div>Sample Input</div>
                <div>{exampleIn}</div>
                <div>Sample Output</div>
                <div>{exampleOut}</div>
            </div>
            
        </div>
    );
}

export default ProblemDescription;