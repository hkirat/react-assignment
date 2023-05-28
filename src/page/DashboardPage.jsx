import React, {useEffect, useState } from "react";
import ProblemTile from "../components/ProblemTile";
import axios from 'axios';
import {BACKEND_URL} from '../constants';
const DashboardPage = () => {
    const [problems, setProblems] = useState([]);

    const init = async () => {
        const resp = await axios.get(`${BACKEND_URL}questions`);
        setProblems(resp.data.questions);
    }
    useEffect(()=>{
        init();
    }, [])
    return (
        <div className="dashboard-page">
            <h1>Problem Set</h1>
            <ul>
                {problems && problems.map((item, i) => (
                    <ProblemTile  key={i} problemId={item.questionId} title={item.title} difficulty={item.difficulty} acceptance={item.acceptance} />
                ))}
            </ul>
        </div>

    )
}

export default DashboardPage;

