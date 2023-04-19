import React from "react";
import { Link } from "react-router-dom";

export const ProblemList = (props) => {
    const {problems} = props;
  return (
    <div className="overflow-x-auto max-w-7xl mx-auto my-16">
      <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Title
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Difficulty
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Acceptance
            </th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
            {problems.map((item, id) => <tr key={id}>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                <Link to={`/problems/${item._id}`}>{item._id}. {item.title}</Link>
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                    {item.difficulty}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                    {item.acceptance}
                </td>
                <td className="whitespace-nowrap px-4 py-2">
                <Link
                    to={`/problems/${item._id}`}
                    className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                >
                    View
                </Link>
                </td>
            </tr>
          )}

        </tbody>
      </table>
    </div>
  );
};

export const DarkProblemList = (props) => {
  const { problems } = props;
  return (
    <div className="overflow-x-auto max-w-7xl mx-auto my-16 dark:bg-gray-900">
      <table className="min-w-full divide-y-2 divide-gray-700 text-sm dark:divide-gray-500">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-300 dark:text-gray-400">
              Title
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-300 dark:text-gray-400">
              Difficulty
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-300 dark:text-gray-400">
              Acceptance
            </th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-700 dark:divide-gray-500">
          {problems.map((item, id) => (
            <tr key={id}>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-300 dark:text-gray-400">
                <Link
                  to={`/problems/${item._id}`}
                  className="hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  {item._id}. {item.title}
                </Link>
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-500 dark:text-gray-300 text-center">
                {item.difficulty}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-500 dark:text-gray-300 text-center">
                {item.acceptance}
              </td>
              <td className="whitespace-nowrap px-4 py-2">
                <Link
                  to={`/problems/${item._id}`}
                  className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700 dark:bg-indigo-400 dark:hover:bg-indigo-500"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};