import './ProblemSet.scss';

function ProblemSetPage({ problems }) {
  return (
    <div className="container">
      <div>
        <a href="/">Home</a>
      </div>
      <h1 className="page-title">Problem Set</h1>
      <table className="problem-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Difficulty</th>
            <th>Acceptance</th>
          </tr>
        </thead>
        <tbody>
          {problems.map((problem, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className><a href={`/problems/${problem.id}`}>{problem.title}</a></td>
              <td className={`difficulty difficulty-${problem.difficulty.toLowerCase()}`}>{problem.difficulty}</td>
              <td className="acceptance">{problem.acceptance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProblemSetPage;