import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from "react";

const Allproblem = (props) => {
    const { problems, onValueChange } = props;
    return (
        <main id='allProblemMain' >
            <table id='table'>
                <tr>
                    <th>Title</th>
                    <th>Acceptance</th>
                    <th>Difficulty</th>
                    <th>Link</th>
                </tr>
                {problems.map((problem) => {
                    return <ProblemStatement
                        title={problem.title}
                        acceptance={problem.acceptance}
                        difficulty={problem.difficulty}
                    />
                })}
            </table>
        </main>
    )
}

// A demo component
function ProblemStatement(props) {
    const title = props.title;
    const acceptance = props.acceptance;
    const difficulty = props.difficulty;

    const link = title.split(". ")[1].toLowerCase().replaceAll(' ', '-');
    return (
        <tr id='tRow'>
            <td>
                {title}
            </td>
            <td>
                {acceptance}
            </td>
            <td>
                {difficulty}
            </td>
            <td>
                <Link id='solveLink' to={"/problems/" + link} >Solve Here</Link>
            </td>
        </tr>
    )
}

export default Allproblem