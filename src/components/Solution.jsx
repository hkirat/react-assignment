import React from "react";

const Solution = ({ answer }) => {
  return (
    <div className="border-t-2 border-gray-200 py-4 flex flex-wrap items-center">
      <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/4 mb-4 md:mb-0">
        <span className="font-semibold">User:</span> {answer.email}
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/4 mb-4 md:mb-0">
        <span className="font-semibold">Question ID:</span> {answer.questionId}
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/4 mb-4 md:mb-0">
        <span className="font-semibold">Status:</span>{" "}
        <span
          className={`${
            answer.status === "accepted" ? "text-green-500" : "text-red-500"
          } font-semibold`}
        >
          {answer.status}
        </span>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/4 mb-4 md:mb-0 space-x-4">
        <span className="font-semibold">Code:</span>
        <code className="bg-gray-900 p-1 rounded-md">{answer.code}</code>
      </div>
    </div>
  );
};

export default Solution;
