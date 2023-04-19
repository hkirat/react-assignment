import React from "react";

import { Link } from "react-router-dom";

const Problem = ({ question }) => {
  return (
    <tbody className="bg-white divide-y divide-gray-200 p-5">
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 hover:text-black">
          {question.questionId}
        </td>
        <Link to={`/problems/${question.title}`}>
          <td className="px-6 py-4 md:whitespace-nowrap text-sm text-gray-500  hover:text-black transition cursor-pointer">
            {question.title}
          </td>
        </Link>
        <td className="px-6 py-4 md:whitespace-nowrap text-sm text-gray-500 hover:text-black transition cursor-pointer">
          {question.description.slice(0, 20)}...
        </td>
        <td className="px-6 py-4 md:whitespace-nowrap text-sm text-gray-500 hover:text-black transition cursor-pointer">
          {question.testCases.length}
        </td>
      </tr>
    </tbody>
  );
};

export default Problem;
