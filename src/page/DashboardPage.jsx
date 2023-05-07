import React from "react";
import ProblemTile from "../components/ProblemTile";

const DashboardPage = (props) => {
    const problems = props.problems;
    return (
        <div className="dashboard-page">
            <h1>Problem Set</h1>
            <ul>
                {problems.map((item, i) => (
                    // <li key={i}>
                        <ProblemTile  key={i} title={item.title} difficulty={item.difficulty} acceptance={item.acceptance} />
                    // {/* </li> */}
                ))}
            </ul>
        </div>

    )
}

export default DashboardPage;

