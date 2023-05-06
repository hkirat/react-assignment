import React from "react";

const DashboardPage = (props) => {
    const problems = props.problems;
    return (
        <div>
            <h1>Problem Set</h1>
            <ul>
                {problems.map((item) => (
                    <li key={item.id}>{item.title} {item.difficulty} {item.acceptance}</li>
                ))}
            </ul>
        </div>

    )
}

export default DashboardPage;

