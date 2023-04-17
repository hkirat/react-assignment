import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import Porblem from "../components/Problem";

const Problems = () => {
  const [questions, setQuestions] = useState([]);
  const getQuestions = async () => {
    const { data } = await axios.get("http://localhost:3001/questions");
    return data;
  };
  const questionQuery = useQuery({
    queryKey: ["questions"],
    queryFn: getQuestions,
    onSuccess: (data) => {
      console.log(data);
      setQuestions(data);
    },
  });
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="-my-2 overflow-hidden">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6  ">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg ">
              <table className="min-w-full divide-y divide-gray-200 ">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
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
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Test Cases
                    </th>
                  </tr>
                </thead>
                {questions.map((question) => (
                  <Porblem key={question.questionId} question={question} />
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
