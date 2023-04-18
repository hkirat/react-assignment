import { Link } from "react-router-dom";
import "../App.css"

function ProblemStatement({title, difficulty, acceptance}) {
    return (
        <tr>
            <td>
                {/* {title} */}
                <Link className="lynk" to="/problem">{title}</Link>
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



export default ProblemStatement;