import Header from "../components/Header";
import problems from "../db/problems";
import { Link } from "react-router-dom";

const AllProblems = () => {
  return (
    <>
      <Header />
      <table className="min-w-full text-xs table-auto">
        <thead className="bg-gray-300">
          <tr className="text-left">
            <th className="p-3">ID</th>
            <th className="p-3">Acceptance</th>
            <th className="p-3">Title</th>
            <th className="p-3">Diffulty</th>
          </tr>
        </thead>
        <tbody>
          {problems.map((item) => (
            <tr
              key={item.id}
              className="border-b border-opacity-20 border-gray-300 bg-gray-50"
            >
              <td className="p-3">
                <p>{item.id}</p>
              </td>
              <td className="p-3">
                <p>{item.acceptance}</p>
              </td>
              <Link
                key={item.id}
                to={`/problem/${item.id}`}
                className="block hover:bg-gray-100"
              >
                <td className="p-3">
                  <p>{item.title}</p>
                </td>
              </Link>
              <td className="p-3">
                {item.difficulty == "Easy" ? (
                  <p className="text-green-500">{item.difficulty}</p>
                ) : item.difficulty == "Medium" ? (
                  <p className="text-blue-500">{item.difficulty}</p>
                ) : (
                  <p className="text-red-500">{item.difficulty}</p>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default AllProblems;
