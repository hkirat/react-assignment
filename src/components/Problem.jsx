import React from "react";
import { useParams } from "react-router-dom";
import "./styles/Problem.css";

export default function Problem() {
  const {title}  = useParams();
  console.log(title)
  return (
    <div className="float-container">
      <div className="float-child">
        <h1>Problem : {title}</h1>
        <p>
          <strong>Description:</strong> Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Sint magni vero ea fugit.
        </p>
        <p>
          <strong>Example:</strong> Lorem ipsum dolor sit amet consectetur,
          adipisicing elit id, quidem nisi expedita repellat eius.
        </p>
        <p>
          <strong>Output:</strong> xyz
        </p>
      </div>

      <div className="float-child">
        <textarea name="" id="" cols="60" rows="40"></textarea>
        <br />
        <button>Run</button>
        <button>Submit</button>
      </div>
    </div>
  );
}
