import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { myContext } from "../context/ContextApi";

const Allproblems = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    await fetch("http://localhost:3001/user/problems/all")
      .then((info) => info.json())
      .then((json) => {
        setData(json.message);
      });
  };
  useEffect(() => {
    fetchData();
    return () => {
      fetchData;
    };
  }, []);

  const checkDifficulty = (difficulty) => {
    const diff = difficulty.toLowerCase();
    return diff === "easy"
      ? "text-green-600"
      : diff === "medium"
      ? "text-yellow-400"
      : "text-red-600";
  };

  function Table(props) {
    const { title, difficulty, id, acceptance } = props.info;

    return (
      <tr className={`${props.index % 2 === 0 ? "bg-gray-700" : ""}`}>
        <td className="overflow-x-hidden overflow-y-scroll max-h-4 ">
          <Link to={`/problem/${id}`}>
            {props.index + 1}.{title}
          </Link>
        </td>
        <td className={`${checkDifficulty(difficulty)}`}>{difficulty}</td>
        <td className={`${checkDifficulty(difficulty)}`}>{acceptance} %</td>
      </tr>
    );
  }

  return (
    <div>
      {data.length === 0 ? (
        <p>Loading</p>
      ) : (
        <>
          <table className="sm:w-2/3 mx-auto">
            <thead>
              <tr>
                <th>Title</th>
                <th>Diffulty</th>
                <th>Acceptance</th>
              </tr>
            </thead>
            <tbody>
              {data.map((question, index) => {
                return <Table info={question} index={index} key={index} />;
              })}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default Allproblems;
