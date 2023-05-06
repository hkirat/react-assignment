import React from "react";

function ProblemStatement(props) {

    return (
        <tr>
            <td>
                {props.titles}
            </td>
            <td>
                {props.acceptances}
            </td>
            <td>
                {props.difficultys}
            </td>
        </tr>
        );
}

export default ProblemStatement;