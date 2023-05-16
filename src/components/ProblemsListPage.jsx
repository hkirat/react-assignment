import { Link } from "react-router-dom";
import TaskComponent from "./TaskComponent";

const ProbmlemsListPage=({problems})=>{
  let colorClass = '';

    return(
        <div className="problems-table">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Difficulty</th>
            <th>Acceptance</th>
          </tr>
        </thead>
        <tbody>
        {problems.map((problem, index) => (
    <tr key={index}>
      <td>{index+1}</td>
      <Link to={`/problems/${problem.problemId}`} className="link">
                <td>{problem.title}</td>
              </Link>
              
      {<TaskComponent diff={problem.difficulty}/>}
      <td>{problem.acceptance}</td>
    </tr>
  ))}  
        </tbody>
      </table>
    </div>
    )
}
export default ProbmlemsListPage;