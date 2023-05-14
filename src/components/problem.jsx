import { useParams } from "react-router-dom";



const problems1 = [{
    title: "6. Zigzag Conversion",
    difficulty: "Medium",
    acceptance: "32.5%",
  },
  {
    title: "7. Reverse Integer",
    difficulty: "Easy",
    acceptance: "25.5%",
  },
  {
    title: "8. String to Integer (atoi)",
    difficulty: "Medium",
    acceptance: "15.5%",
  },
  {
    title: "9. Palindrome Number",
    difficulty: "Easy",
    acceptance: "45.5%",
  }]
  
  const problems2 = [{
    title: "10. Regular Expression Matching",
    difficulty: "Hard",
    acceptance: "32.5%",
  },
  {
    title: "11. Container With Most Water",
    difficulty: "Medium",
    acceptance: "25.5%",
  },
  {
    title: "12. Integer to Roman",
    difficulty: "Medium",
    acceptance: "15.5%",
  },
  {
    title: "13. Roman to Integer",
    difficulty: "Easy",
    acceptance: "45.5%",
  }]

function ProblemDetails() {
  const { title } = useParams();

  // Find the problem with the given title
  const problem = problems1.concat(problems2).find(p => p.title.split(" ").join("") === title);

  return (
    <div>
      <h2>{problem.title}</h2>
      <p>Difficulty: {problem.difficulty}</p>
      <p>Acceptance: {problem.acceptance}</p>
      <p>Problem details go here...</p>
    </div>
  );
}

export default ProblemDetails;


