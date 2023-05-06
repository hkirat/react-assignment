import React from "react";

function ProblemStatement(props) {

    return (
        <tr>
            <td className="name">
                {props.titles}
            </td>
            
            <td className="info">
                {props.acceptances}
            </td>
            
            <td>
                {props.difficultys}
            </td>
            
        </tr>
        );
}

export default ProblemStatement;