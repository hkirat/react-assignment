import React, { useState } from "react";
import { Link } from "react-router-dom";

const AllProblems = ({ problems, setData }) => {
  return (
    <div>
      {problems.map((problem, i = null) => {
        return (
          <Link
            to={`/problemset/${problem.title.replace(/\s/g, "")}`}
            onClick={() => setData(problem)}
          >
            <div
              key={i === null ? (i = 0) : i++}
              style={{
                border: "2px solid red",
                maxWidth: "300px",
                borderRadius: "5px",
                // justifyContent: "center",
                textAlign: "center",
              }}
            >
              <div>{problem.title}</div>
              <div>{problem.difficulty}</div>
              <div>{problem.acceptance}</div>
            </div>
            <br />
          </Link>
        );
      })}
      <button>
        <Link to="/">BACK</Link>
      </button>
    </div>
  );
};

export default AllProblems;
