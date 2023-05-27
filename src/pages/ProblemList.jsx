import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/ProblemList.css";

const Problem1 = [
  {
    id: 1,
    Title: "Two Sum",
    Acceptance: "67.8%",
    difficulty: "Easy",
  },
  {
    id: 2,
    Title: "Two Sum",
    Acceptance: "67.8%",
    difficulty: "Easy",
  },
  {
    id: 3,
    Title: "Two Sum",
    Acceptance: "67.8%",
    difficulty: "Easy",
  },
  {
    id: 4,
    Title: "Two Sum",
    Acceptance: "67.8%",
    difficulty: "Easy",
  },
  {
    id: 5,
    Title: "Two Sum",
    Acceptance: "67.8%",
    difficulty: "Easy",
  },
  {
    id: 6,
    Title: "Two Sum",
    Acceptance: "67.8%",
    difficulty: "Easy",
  },
  {
    id: 7,
    Title: "Two Sum",
    Acceptance: "67.8%",
    difficulty: "Easy",
  },
  {
    id: 8,
    Title: "Two Sum",
    Acceptance: "67.8%",
    difficulty: "Easy",
  },
  {
    id: 9,
    Title: "Two Sum",
    Acceptance: "67.8%",
    difficulty: "Easy",
  },
];

const Problem2 = [
  {
    id: 10,
    Title: "Add Two Numbers",
    Acceptance: "40.5%",
    difficulty: "Medium",
  },
  {
    id: 11,
    Title: "Add Two Numbers",
    Acceptance: "40.5%",
    difficulty: "Medium",
  },
  {
    id: 12,
    Title: "Add Two Numbers",
    Acceptance: "40.5%",
    difficulty: "Medium",
  },
  {
    id: 13,
    Title: "Add Two Numbers",
    Acceptance: "40.5%",
    difficulty: "Medium",
  },
  {
    id: 14,
    Title: "Add Two Numbers",
    Acceptance: "40.5%",
    difficulty: "Medium",
  },
  {
    id: 15,
    Title: "Add Two Numbers",
    Acceptance: "40.5%",
    difficulty: "Medium",
  },
  {
    id: 16,
    Title: "Add Two Numbers",
    Acceptance: "40.5%",
    difficulty: "Medium",
  },
  {
    id: 17,
    Title: "Add Two Numbers",
    Acceptance: "40.5%",
    difficulty: "Medium",
  },
  {
    id: 18,
    Title: "Add Two Numbers",
    Acceptance: "40.5%",
    difficulty: "Medium",
  },
];

const ProblemList = () => {
  const [data, setData] = useState(Problem1);

  const displayProblemSetOne = () => {
    setData(Problem1);
  };

  const displayProblemSetTwo = () => {
    setData(Problem2);
  };

  return (
    <div>
      <h1 className="heading">Problems</h1>
      <table>
        <thead>
          <tr>
            <th>S.no</th>
            <th>Title</th>
            <th>Acceptance</th>
            <th>Difficulty</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>
                <div>
                  <Link to={`/problem/${row.id}`}>{row.Title}</Link>
                </div>
              </td>
              <td>
                <div>{row.Acceptance}</div>
              </td>
              <td
                style={{
                  color:
                    row.difficulty === "Hard"
                      ? "red"
                      : row.difficulty === "Medium"
                      ? "orange"
                      : "green",
                }}
              >
                <div>{row.difficulty}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          onClick={displayProblemSetOne}
          style={{
            fontSize: "14px",
            padding: "6px 12px",
            marginRight: "10px",
            width: "40px",
          }}
        >
          1
        </button>
        <button
          onClick={displayProblemSetTwo}
          style={{
            fontSize: "14px",
            padding: "6px 12px",
            width: "40px",
          }}
        >
          2
        </button>
      </div>
    </div>
  );
};

export default ProblemList;
