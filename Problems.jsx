import { problems } from "../problems.js";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table"

export function Problems() {
  return (
    <Table striped bordered hover style={{margin: "100px",width: "90%"}}>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Acceptance</th>
          <th>Difficulty</th>
        </tr>
      </thead>
      <tbody>
        {problems.map((problem) => (
          <tr>
            <td>{problem.id}.</td>
            <td>
              <Link to={`/problems/${problem.id}`}>{problem.title}</Link>
            </td>
            <td>{problem.acceptance}</td>
            <td
              style={{
                color:
                  problem.difficulty === "Easy"
                    ? "green"
                    : problem.difficulty === "Medium"
                    ? "yellow"
                    : "red",
              }}
            >
              {problem.difficulty}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
