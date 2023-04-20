import React from "react";
import { Link } from "react-router-dom";

const P = ({ data }) => {
  return (
    <>
      <div
        style={{
          border: "2px solid red",
          maxWidth: "300px",
          borderRadius: "5px",
          textAlign: "center",
        }}
      >
        <div>{data.title}</div>
        <div>{data.difficulty}</div>
        <div>{data.acceptance}</div>
      </div>
      <br></br>
      <button>
        <Link to="/problemset/all">Back</Link>
      </button>
    </>
  );
};

export default P;
