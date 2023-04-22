import { Link } from "react-router-dom";

export default function ProblemStatement(props) {
  const id = props.problem.id;
  const title = props.problem.title;
  const acceptance = props.problem.acceptance;
  const difficulty = props.problem.difficulty;
const problem = props.problem 
// console.log(props.problem.id)
  return (
    <>
      <tbody>
        <tr>
          <td>
            <strong>14</strong>
          </td>
          <td>{difficulty}</td>
          <td data-title="Link">
            <Link
            to={`/problem/${id}`} >
            {title} 
          </Link>
            {/* <Link
              to={{
                pathname: `/problem/${id}`,
                state: {
                  problemData: props.problem
                }
              }}
            >
              {" "}
              {title}{" "}
            </Link> */}
          </td>
          <td data-title="Link">{acceptance}</td>
        </tr>
      </tbody>
    </>
  );
}
