import { useParams, Link } from "react-router-dom"

// {
//     "id": 1432,
//     "title": "Maximum Element",
//     "difficulty": "easy",
//     "description": "Given an array, return the maximum of the array",
//     "testCases": [
//       {
//         "input": "[1,2,3,4,5]",
//         "output": "5"
//       }
//     ]
//   },


function SolveProblem() {
  const { id } = useParams();

  return (
    <section className="SolveProblem">
        <div className="problem__statement">
            <Link to="/problems/all" className="goBack">{'<'} Problems</Link>
            <div className="problem__head">
                <p>1432. Maximum Element</p>
                <p>Easy</p>
            </div>
            <p className="problem__description">Given an array, return the maximum of the array</p>
            <div className="testcases">
                <p>Testcases</p>
                <div className="testcase">
                    <p>Input: [1,2,3,4,5]</p>
                    <p>Output: 5</p>
                </div>
            </div>
        </div>
        <div className="problem__input">
            <textarea placeholder="Enter the code"></textarea>
            <button>Submit</button>
        </div>
    </section>
  )
}

export default SolveProblem