import { useParams, useNavigate } from "react-router-dom";
import "./singleproblem.css";
const problems1 = [
  {
    title: "9. Palindrome Number",
    difficulty: "Easy",
    acceptance: "53.8%",
    discription:
      "Given an integer x, return true if x is a palindrome, and false otherwise.",
    exampleInput: {
      input: "x = 121",
      output: "true",
    },
  },
  {
    title: "1396. Design Underground System",
    difficulty: "Medium",
    acceptance: "74.5%",
    discription:
      "An underground railway system is keeping track of customer travel times between different stations. They are using this data to calculate the average time it takes to travel from one station to another.      ",
    exampleInput: {
      input:
        '["UndergroundSystem","checkIn","checkIn","checkIn","checkOut","checkOut","checkOut","getAverageTime","getAverageTime","checkIn","getAverageTime","checkOut","getAverageTime"][[],[45,"Leyton",3],[32,"Paradise",8],[27,"Leyton",10],[45,"Waterloo",15],[27,"Waterloo",20],[32,"Cambridge",22],["Paradise","Cambridge"],["Leyton","Waterloo"],[10,"Leyton",24],["Leyton","Waterloo"],[10,"Waterloo",38],["Leyton","Waterloo"]]',
      output:
        "[null,null,null,null,null,null,null,14.00000,11.00000,null,11.00000,null,12.00000]",
    },
  },
  {
    title: "2. Add Two Numbers",
    difficulty: "Medium",
    acceptance: "40.6%",
    discription:
      "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.You may assume the two numbers do not contain any leading zero, except the number 0 itself.",
    exampleInput: {
      input: "l1 = [2,4,3], l2 = [5,6,4]",
      output: "[7,0,8]",
    },
  },
  {
    title: "4. Median of Two Sorted Arrays",
    difficulty: "Hard",
    acceptance: "36.5%",
    discription:
      "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.The overall run time complexity should be O(log (m+n)).",
    exampleInput: {
      input: "nums1 = [1,3], nums2 = [2]",
      output: "2.00000",
    },
  },
];
const problems2 = [
  {
    title: "10. Palindrome Number",
    difficulty: "Medium",
    acceptance: "53.8%",
    discription:
      "Given an integer x, return true if x is a palindrome, and false otherwise.",
    exampleInput: {
      input: "x = 121",
      output: "true",
    },
  },
  {
    title: "96. Design Underground System",
    difficulty: "Hard",
    acceptance: "7.5%",
    discription:
      "An underground railway system is keeping track of customer travel times between different stations. They are using this data to calculate the average time it takes to travel from one station to another.      ",
    exampleInput: {
      input:
        '["UndergroundSystem","checkIn","checkIn","checkIn","checkOut","checkOut","checkOut","getAverageTime","getAverageTime","checkIn","getAverageTime","checkOut","getAverageTime"][[],[45,"Leyton",3],[32,"Paradise",8],[27,"Leyton",10],[45,"Waterloo",15],[27,"Waterloo",20],[32,"Cambridge",22],["Paradise","Cambridge"],["Leyton","Waterloo"],[10,"Leyton",24],["Leyton","Waterloo"],[10,"Waterloo",38],["Leyton","Waterloo"]]',
      output:
        "[null,null,null,null,null,null,null,14.00000,11.00000,null,11.00000,null,12.00000]",
    },
  },
  {
    title: "1. Add Two Numbers",
    difficulty: "Easy",
    acceptance: "90.6%",
    discription:
      "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.You may assume the two numbers do not contain any leading zero, except the number 0 itself.",
    exampleInput: {
      input: "l1 = [2,4,3], l2 = [5,6,4]",
      output: "[7,0,8]",
    },
  },
  {
    title: "4. Median of Two Sorted Arrays",
    difficulty: "Hard",
    acceptance: "36.5%",
    discription:
      "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.The overall run time complexity should be O(log (m+n)).",
    exampleInput: {
      input: "nums1 = [1,3], nums2 = [2]",
      output: "2.00000",
    },
  },
];

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

  const searchTitle = () => {
    let problemPresent1 = problems1.find((problem) => problem.title === id);
    let problemPresent2 = problems2.find((problem) => problem.title === id);
    if (problemPresent2 != null) {
      return problemPresent2;
    }
    if (problemPresent1 != null) {
      return problemPresent1;
    }
    return null; // Return null if no matching problem is found
  };

  const problem = searchTitle();

  // Check if problem exists before accessing its properties
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
