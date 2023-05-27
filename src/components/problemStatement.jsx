import { Link } from "react-router-dom";

export default function ProblemStatement(props) {
  const { title, acceptance, difficulty, id } = props;

  return (
    <tr>
      <td className="px-4 py-2">{title}</td>
      <td className="px-4 py-2">{acceptance}</td>
      <td className="px-4 py-2">{difficulty}</td>
      <td className="px-4 py-2">
        <Link to={`${id}`} className="text-blue-500">
          Go to problem
        </Link>
      </td>
    </tr>
  );
}
