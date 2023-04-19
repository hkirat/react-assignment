const problems = [
  {
    title: "201. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "42%",
  },
  {
    title: "201. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "412%",
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
  },
];

function ProblemSet() {
  return (
    <section>
      <table>
        <thead>
          <th>
            <td>Title</td>
            <td>Acceptance</td>
            <td>Difficulty</td>
          </th>
        </thead>
        <tbody>
          {problems.map((problem, index) => (
            <ProblemRow
              key={index}
              title={problem.title}
              acceptance={problem.acceptance}
              difficulty={problem.difficulty}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
}

function ProblemRow({ title, acceptance, difficulty }) {
  return (
    <tr>
      <td>{title}</td>
      <td>{acceptance}</td>
      <td>{difficulty}</td>
    </tr>
  );
}

export default ProblemSet;
