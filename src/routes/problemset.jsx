import { Link } from "react-router-dom";
import Problem from "./problem";
import nanoid from 'nanoid'

/*
 * Temporary problems array schema
 */
const problems = [
    {
      id: nanoid(),
      title: "201. Bitwise AND of Numbers Range",
      difficulty: "Medium",
      acceptance: "42%",
    },
    {
      id: nanoid(),
      title: "202. Happy Number",
      difficulty: "Easy",
      acceptance: "54.9%",
    },
    {
      id: nanoid(),
      title: "201. Bitwise AND of Numbers Range",
      difficulty: "Medium",
      acceptance: "41.2%",
    },
    {
      id: nanoid(),
      title: "203. Remove Linked List Elements",
      difficulty: "Hard",
      acceptance: "42%",
    },
    {
      id: nanoid(),
      title: "201. Bitwise AND of Numbers Range",
      difficulty: "Medium",
      acceptance: "41.2%",
    },
    {
      id: nanoid(),
      title: "203. Remove Linked List Elements",
      difficulty: "Hard",
      acceptance: "42%",
    },
    {
      id: nanoid(),
      title: "202. Happy Number",
      difficulty: "Easy",
      acceptance: "54.9%",
    },
    {
      id: nanoid(),
      title: "201. Bitwise AND of Numbers Range",
      difficulty: "Medium",
      acceptance: "41.2%",
    },
  ];

function ProblemSet() {
    const problemStatements = problems.map(problem => {
        return <ProblemStatement key= {problem.id} problem= {problem} />
    })
    return (
        <div>
            <h1 style={{ textAlign : 'center'}}> Problems </h1>
            <table>
                <thead>
                    <tr>
                        <th> Title </th>
                        <th> Acceptance </th>
                        <th> Difficulty </th>
                    </tr>
                </thead>
                <tbody>
                    { problemStatements }
                </tbody>
            </table>
        </div>
    )
}


function ProblemStatement({problem}) {
  const colors = new Map([
    ['Easy', 'rgb(0, 255, 0)'],
    ['Medium', 'rgb(200, 200, 0)'],
    ['Hard', 'rgb(255, 0, 0)']
  ]);

  const color = colors.get(problem.difficulty);
    
    return (
        <tr>
        <Link to= {`/problem/:${problem.id}`}>
          <td>{problem.title}</td>
        </Link>
        <td>{problem.acceptance}</td>
        <td style={{ color : color}}>{problem.difficulty}</td>
      </tr>
    );
}

export default ProblemSet;
