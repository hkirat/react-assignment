function ProblemStatement({title, difficulty, acceptance}) {
    return (
        <tr>
            <td>
                {title}
            </td>
            <td>
                {acceptance}
            </td>
            <td style={{color: difficulty === "Easy" ? "green" : difficulty === "Medium" ? "yellow" : "red"}}>
                {difficulty}
            </td>
        </tr>
    ) 
}

export default ProblemStatement