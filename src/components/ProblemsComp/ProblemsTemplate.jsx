import React from "react";

function ProblemStatement(props) {
    const title = props.title;
    const acceptance = props.acceptance;
    const difficulty = props.difficulty;

    const styleTableDetails= {
        height: '35px',
        borderRadius: '2rem',
        padding: '1rem 2rem',
        color: 'white'
    }

    return (
        <tr>
            <td style={styleTableDetails}>
                {title}
            </td>
            <td style={styleTableDetails}>
                {acceptance}
            </td>
            <td style={styleTableDetails}>
                {difficulty}
            </td>
        </tr>
    );
}

export default ProblemStatement;