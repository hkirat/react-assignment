import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { myContext } from "../context/ContextApi";

const Allproblems = () => {
  const context = useContext(myContext);
  // console.log(context);
  const fetchData = async () => {
    await fetch("http://localhost:3001/user/problems/all")
      .then((info) => info.json())
      .then((json) => {
        // setData(json.message);
        context.problems = json.message;
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
    const { title, difficulty, id } = props.info;

    return (
      <tr className={`${props.index % 2 === 0 ? "bg-gray-500" : ""}`}>
        <td>{props.index}</td>
        <Link to={`/problem/${id}`}>
          <td>{title}</td>
        </Link>
        <td className={`${checkDifficulty(difficulty)}`}>{difficulty}</td>
      </tr>
    );
  }

  return (
    <div>
      {context.problems.length === 0 ? (
        <p>Loading</p>
      ) : (
        <>
          <table className="w-[95vw] mx-auto px-3">
            <thead>
              <tr>
                <th>Q.No.</th>
                <th>Title</th>
                <th>Difficulty</th>
              </tr>
            </thead>
            {context.problems.map((question, index) => {
              return (
                <tbody key={index}>
                  <Table info={question} index={index} />
                </tbody>
              );
            })}
          </table>
        </>
      )}
    </div>
  );
};

export default Allproblems;
