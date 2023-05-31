import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Register from "./components/register/Register";
import Allproblems from "./components/allproblems/Allproblems";
import Login from "./components/login/Login";
import Problem from "./components/problem/Problem";

function App() {
	/* Add routing here, routes look like -
		 /login - Login page
		 /signup - Signup page
		 /problemset/all/ - All problems (see problems array above)
		 /problems/:problem_slug - A single problem page
	  */
	const Layout = () => {
		return (
			<div className="app">
				<Navbar />
				{/* this part is an array of routes and navbar and footer are static in all pages */}
				<Outlet />
			</div>
		);
	};
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: [
				{
					path: "/problemset/all/",
					element: <Allproblems />,
				},
				{
					path: "/register",
					element: <Register />,
				},
				{
					path: "/login",
					element: <Login />,
				},
				{
					path: "/problem/:id",
					element: <Problem />,
				},
			],
		},
	]);
	return <RouterProvider router={router} />;
}

export default App;
