import React, {useEffect, useState } from "react";
import ProblemTile from "../../components/ProblemTile";
import Wrapper from "../../components/Wrapper/Wrapper";
import axios from 'axios';
import styles from './styles.module.css';
import {BACKEND_URL} from '../../constants';
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
        <div className="page-content">
            <div className={styles.dashboardPage}>
                <h1 className={styles.pageTitle}>Problem Set</h1>
                <div className={styles.tableDiv}>
                    <table className={styles.problem}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Difficulty</th>
                                <th>Acceptance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {problems && problems.map((item, i) => (
                                <ProblemTile  key={i}  problemId={item.questionId} title={item.title} difficulty={item.difficulty} acceptance={item.acceptance} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Wrapper(DashboardPage);

