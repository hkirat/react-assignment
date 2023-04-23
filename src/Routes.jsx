import Home from "./Components/Home.jsx";
import Signup from "./Components/Signup.jsx";
import Login from "./Components/Login.jsx";
import Allproblem from "./Components/Allproblem.jsx";
import Problem from "./Components/Problem.jsx";

const Routes = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/signup",
    component: Signup,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/problemset/all",
    component: Allproblem,
  },
  {
    path: "/problems/:problem_slug",
    component: Problem,
  },
];

export default Routes;
