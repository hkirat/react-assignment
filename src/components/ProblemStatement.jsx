import React from 'react'

const ProblemStatement=({title,difficulty,acceptance})=>{
    return(
    <table>
        <tbody>

        <tr>
            
            <td>
                {title}
            </td>
            <td>
                {acceptance}
            </td>
            <td>
                {difficulty}
            </td>
        </tr>
        </tbody>
    </table>
    )
}

export default ProblemStatement
