import React, { useEffect, useState } from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

const Problems = () => {
  const [problem, setProblem] = useState([]);

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const response = await fetch("http://localhost:3000/problems/all");
        const data = await response.json();
        setProblem(data);
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProblems();
  }, []);

  return (
    <div className="flex flex-col justify-center gap-y-10">
      <div className="flex flex-row justify-center items-center">
        <img src={Logo} alt="NeetCode logo" className="w-16 h-16" />
        <p className="text-3xl">NeetCode</p>
      </div>
      <div className="flex justify-center items-center px-24 lg:px-40">
        <table className="divide-y-2 w-full ">
          <tr className=" text-left text-black/50 h-12 gap-x-4">
            <th>Sr.no</th>
            <th>Title</th>
            <th>Acceptance</th>
            <th>Difficulty</th>
          </tr>
          <tbody>
            {problem.map((problems, index) => (
              <tr
                key={problems.index}
                className={`h-12 ${
                  index % 2 === 0 ? "bg-gray-200" : "bg-white"
                }`}
              >
                <td className="px-6">{problems.index}</td>
                <td>
                  <Link
                    to={`/problems/${problems.index}`}
                    className="hover:text-black/50"
                  >
                    {problems.title}
                  </Link>
                </td>
                <td>{problems.acceptance}</td>
                <td
                  className={`${
                    problems.difficulty === "Easy"
                      ? "text-green-500"
                      : problems.difficulty === "Medium"
                      ? "text-yellow-500"
                      : "text-red-500"
                  }`}
                >
                  {problems.difficulty}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Problems;
