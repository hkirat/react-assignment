import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Problems from "./pages/Problems";
import ProblemSlug from "./pages/ProblemSlug";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

/*
 * Temporary problems array schema
 */
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

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    // if (localStorage.getItem("token")) {
    //   navigate("/problemset/all");
    // } else navigate("/login");
  }, [navigate]);

  const queryClient = new QueryClient();
  /* Add routing here, routes look like -
       /login - Login page
       /signup - Signup page
       /problemset/all/ - All problems (see problems array above)
       /problems/:problem_slug - A single problem page
     */

  return (
    <div className="bg-[#2e2e2e] text-white h-screen ">
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/login" exact element={<Login />} />
        <Route path="/signup" exact element={<Signup />} />

        <Route path="/problemset/all" exact element={<Problems />} />
        <Route path="/problems/:problem_slug" exact element={<ProblemSlug />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </QueryClientProvider>
    </div>
  );
}

// // A demo component
// function ProblemStatement(props) {
//     const title = props.title;
//     const acceptance = props.acceptance;
//     const difficulty = props.difficulty;

//     return <tr>
//         <td>
//             {title}
//         </td>
//         <td>
//             {acceptance}
//         </td>
//         <td>
//             {difficulty}
//         </td>
//     </tr>
// }

export default App;
