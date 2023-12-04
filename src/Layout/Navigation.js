import { useNavigate, useLocation, NavLink } from "react-router-dom";

// import { useUser } from "../Context/UserContext";

function Navigation() {
	const navigate = useNavigate();
	const location = useLocation();
	const currentURL = location.pathname;
	const dynamicId = currentURL.substring(currentURL.lastIndexOf("/") + 1);
	const problemPage = currentURL.includes("problems/");
	const allRoutes = ["/problems", "/submissions", "/home", `/problems/${dynamicId}`, "/login", "/signup"]
	const pageExists = allRoutes.includes(currentURL)
	// const { state, dispatch } = useUser();

	function handleLogout() {
		localStorage.removeItem("userId");
		localStorage.removeItem("username");
		localStorage.removeItem("token");
		localStorage.removeItem("userRole");
		// dispatch({ type: "LOGOUT" });
		navigate("/login");
	};

	return (
		localStorage.getItem("token") && !problemPage && pageExists &&
		<nav>
			<ul className="horizontal-nav">
				<li>
					<NavLink to="/problems">Problems</NavLink>
				</li>
				<li>
					<NavLink to="/submissions">Submissions</NavLink>
				</li>
				<li style={{ marginLeft: "auto" }}>
					<span className="custom-tooltip" data-tooltip={localStorage.getItem("userRole")} style={{ fontFamily: "Consolas" }}>{localStorage.getItem("username")}</span>
					<button
						className="purple-btn"
						style={{
							justifySelf: "end",
							margin: "0 2rem",
							width: "10rem",
						}}
						onClick={() => handleLogout()}
					>
						Logout
					</button>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;
