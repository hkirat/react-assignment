// import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { useUser } from "../Context/UserContext";

function Home() {
	const navigate = useNavigate();
	// eslint-disable-next-line
	// const { state, dispatch } = useUser();

	return localStorage.getItem("token") ? (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				justifyItems: "center",
				alignItems: "center",
				marginTop: "10rem",
				fontFamily: "Consolas",
			}}
		>
			<h2>The User Is Logged In. Explore Problems.</h2>
		</div>
	) : (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				justifyItems: "center",
				alignItems: "center",
				marginTop: "10rem",
				fontFamily: "Consolas",
			}}
		>
			<h2>Welcome.</h2>
			<br />
			<button className="purple-btn" onClick={() => navigate("/login")}>
				Signup / Login
			</button>
		</div>
	);
}

export default Home;
