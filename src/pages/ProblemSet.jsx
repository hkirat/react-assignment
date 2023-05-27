import React, { useEffect, useState } from "react";
import { problemSet } from "../data/problemSet.js";
import Tag from "../components/Tag.jsx";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const ProblemSet = () => {
  const [page, setPage] = useState(0);

  const onProblemClick = (problemId) => () => {
    window.location.href = `/problems/${problemId}`;
  };

  const previousPage = () => setPage((page) => page - 1);
  const nextPage = () => setPage((page) => page + 1);

  useEffect(() => {
    console.log(page);
  }, [page]);

  return (
    <div className="m-12 bg-white rounded-md h-full">
      <table className="w-full h-full flex flex-col">
        <thead>
          <tr className="grid grid-cols-4 px-6 py-2 border-b">
            <th className="col-span-2 text-start">Title</th>
            <th>Difficulty</th>
            <th>Acceptance</th>
          </tr>
        </thead>
        <tbody className="flex-grow">
          {problemSet[page].length === 0 && (
            <div className="flex items-center justify-center text-slate-500 py-4">
              No Problems Available
            </div>
          )}
          {problemSet[page].map((problem, index) => (
            <tr
              key={index}
              onClick={onProblemClick(problem.id)}
              className="hover:bg-slate-50 text-slate-600 text-sm cursor-pointer grid grid-cols-4 px-6 py-4 text-center"
            >
              <td className="col-span-2 text-start">{problem.title}</td>
              <td>
                <Tag difficulty={problem.difficulty} />
              </td>
              <td>{problem.acceptance}%</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="flex flex-row-reverse items-center">
            <td className="px-6 py-4">
              <button
                disabled={page === 1}
                onClick={nextPage}
                className={`bg-slate-600 text-white rounded-md p-2 hover:bg-slate-800 ${
                  page === 1 && "opacity-50 cursor-not-allowed"
                }`}
              >
                <AiOutlineRight />
              </button>
            </td>
            <td>{page + 1}</td>
            <td className="px-6 py-4">
              <button
                disabled={page === 0}
                className={`bg-slate-600 text-white rounded-md p-2 hover:bg-slate-800 ${
                  page === 0 && "opacity-50 cursor-not-allowed"
                }`}
                onClick={previousPage}
              >
                <AiOutlineLeft />
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ProblemSet;
