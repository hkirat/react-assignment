import { useState } from 'react';

const problem1 = [
  {
    title: "201. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "42%",
  },
  {
    title: "202. Happy Number",
    difficulty: "Easy",
    acceptance: "54.9%",
  },
  {
    title: "203. Remove Linked List Elements",
    difficulty: "Hard",
    acceptance: "42%",
  }
];

const problem2 = [
  {
    title: "401. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "42%",
  },
  {
    title: "403. Happy Number",
    difficulty: "Easy",
    acceptance: "54.9%",
  },
  {
    title: "404. Remove Linked List Elements",
    difficulty: "Hard",
    acceptance: "42%",
  }
];

const Problem= ({title, acceptance, difficulty}) => {
  return (
    <tr>
      <td className="text-center border p-2">{title}</td>
      <td className="text-center border p-2">{acceptance}</td>
      <td className="text-center border p-2">{difficulty}</td>
    </tr>
  );
};

const App = () => {
  const [problems, setProblems] = useState(problem1);

  const handleButtonClick = (problemData) => {
    setProblems(problemData);
  };

  return (
    <div>
      <table className="table-auto border-collapse border">
        <thead>
          <tr>
            <th className="bg-gray-200 font-bold text-center border p-2" style={{ width: "50%" }}>Title</th>
            <th className="bg-gray-200 font-bold text-center border p-2">Acceptance</th>
            <th className="bg-gray-200 font-bold text-center border p-2">Difficulty</th>
          </tr>
        </thead>
        <tbody>
          {problems.map((problem, index) => (
            <Problem
              key={index}
              title={problem.title}
              acceptance={problem.acceptance}
              difficulty={problem.difficulty}
            />
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={() => handleButtonClick(problem1)}>Problem Set 1</button>
        <button onClick={() => handleButtonClick(problem2)}>Problem Set 2</button>
      </div>
    </div>
  );
};

export default App;
