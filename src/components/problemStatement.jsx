import { Link } from "react-router-dom";

export default function ProblemStatement(props) {
  const { title, acceptance, difficulty, id } = props;

  return (
    <tr>
      <td>{title}</td>
      <td>{acceptance}</td>
      <td>{difficulty}</td>
      <td>
        <Link to={`${id}`}>Go to problem</Link>
      </td>
    </tr>
  );
}
