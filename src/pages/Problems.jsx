import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import Problem from "../components/Problem";

const Problems = () => {
  const getQuestions = async () => {
    const { data } = await axios.get(import.meta.env.VITE_BACKEND+'/questions');
    return data;
  };
  const { data } = useQuery({
    queryKey: ["questions"],
    queryFn: getQuestions,
    onSuccess: (data) => {},
  });
  return (
    <div className="">
      <div className="flex md:flex-col md:items-center md:justify-center min-h-screen">
        <div className="-my-2 overflow-hidden">
          <div className="py-2 md:align-middle md:inline-block md:min-w-full   ">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg ">
              <table className="md:min-w-full  divide-y divide-gray-200 ">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Question ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase md:tracking-wider"
                    >
                      Test Cases
                    </th>
                  </tr>
                </thead>
                {data?.map((question) => (
                  <Problem key={question.questionId} question={question} />
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problems;
