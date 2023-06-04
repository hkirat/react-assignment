import { useParams, useNavigate } from "react-router-dom";
import "./singleproblem.css";

// function SingleProblem() {
//   const { id } = useParams();

//   const problem = function searchTitle() {
//     let problemPresent1 = problems1.find((problem) => problem.title === id);
//     let problemPresent2 = problems2.find((problem) => problem.title === id);
//     if (problemPresent2 != null) {
//       return problemPresent2;
//     }
//     if (problemPresent1 != null) {
//       return problemPresent1;
//     }
//   };
//   const title = problem.title;
//   const discription = problem.discription;
//   const input = problem.exampleInput.input;
//   const output = problem.exampleInput.output;
//   return (
//     <>
//       <div id="problem-solving-area">
//         <div id="left-section">
//           <h1>{title}</h1>
//           <p>{discription}</p>
//           <div>
//             <h3>Example</h3>
//             <p>{input}</p>
//             <p>{output}</p>
//           </div>
//         </div>
//         <div id="right-section">
//           <h1>hello</h1>
//         </div>
//       </div>
//     </>
//   );
// }
function SingleProblem() {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/problems");
  };

  // const searchTitle = () => {
  //   let problemPresent1 = problems1.find((problem) => problem.title === id);
  //   let problemPresent2 = problems2.find((problem) => problem.title === id);
  //   if (problemPresent2 != null) {
  //     return problemPresent2;
  //   }
  //   if (problemPresent1 != null) {
  //     return problemPresent1;
  //   }
  //   return null; // Return null if no matching problem is found
  // };

  // const problem = searchTitle();

  // Check if problem exists before accessing its properties
  const responce = fetch("http://localhost:3000/problem/:id", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: localStorage.getItem("token"),
    },
  });
  const problem = responce.json();
  const title = problem ? problem.title : "";
  const discription = problem ? problem.discription : "";
  const input = problem ? problem.exampleInput.input : "";
  const output = problem ? problem.exampleInput.output : "";

  return (
    <>
      <div id="problem-solving-area">
        <div id="left-section">
          <h1>{title}</h1>
          <span id="discription">
            <h5>Description</h5>
            <p>{discription}</p>
          </span>

          <div>
            <h3>Example</h3>
            <span className="examples">
              <h5>Input: </h5>
              <p>{input}</p>
            </span>
            <span className="examples">
              <h5>Output:</h5>
              <p>{output}</p>
            </span>
          </div>
        </div>
        <div id="right-section">
          <h1>Write Your Code Here</h1>
          <textarea required id="solution-area"></textarea>
          <button id="button-submit" onClick={handleClick}>
            Submit Code
          </button>
        </div>
      </div>
    </>
  );
}

export default SingleProblem;
