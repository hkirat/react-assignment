import React, { useContext, useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

const Problems = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const fetchData = async () => {
    const info = await fetch(`http://localhost:3001/user/question/${id}`);
    const details = await info.json();
    if (info.status === 200) {
      setData(details.msg);
    } else {
      setError(details.err);
    }
  };
  useEffect(() => {
    fetchData();

    return () => {
      fetchData;
    };
  }, []);

  return (
    <>
      {error ? (
        <h1>{error}</h1>
      ) : (
        <div className="grid gap-2 sm:grid-cols-2 w-full  border border-cyan-500 ">
          <div className="p-4  border border-cyan-500 ">
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <p>
              TestCases
              {/* {data?.testCases.map((t) => {
                return (
                  <div className="bg-gray-800 text-gray-400 rounded-md p-2">
                    <p>Input:{t.input}</p>
                    <p>Output:{t.output}</p>
                  </div>
                );
              })} */}
            </p>
            <p>{JSON.stringify(data.testCases)}</p>
          </div>
          <div className="p-4  border border-cyan-500">
            <div className="">Languages</div>
            <textarea
              name=""
              id=""
              className="text-black p-2 mt-2 w-full min-h-[70vh] rounded-md"
            ></textarea>
            <div className="flex flex-row p-2 w-full gap-2 justify-between text-center ">
              <p className="grow">Input TestCase</p>
              <div className="flex justify-between gap-2">
                <button className="rounded-md bg-cyan-500 text-white px-2 py-2">
                  Test
                </button>
                <button className="rounded-md bg-cyan-500 text-white px-2 py-2">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Problems;
