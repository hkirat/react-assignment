import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// import { useUser } from "../Context/UserContext";
import Alert from "../Components/Alert";

function LoginSignup() {
	const navigate = useNavigate();
	const location = useLocation();
	const currentURL = location.pathname;
	const initialTab = currentURL.includes("login") ? "login" : "signup";
	const [activeTab, setActiveTab] = useState(initialTab);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	// eslint-disable-next-line
	// const { state, dispatch } = useUser();
	const [alertMessage, setAlertMessage] = useState("");

	async function submit(event) {
		event.preventDefault();

		const requestBody = {
			username: event.target[0].value,
			password: event.target[1].value,
		};

		setUsername("");
		setPassword("");
		setAlertMessage("");

		try {
			const BASE_API_URL = process.env.REACT_APP_NODE_API_URL;
			const response = await fetch(
				BASE_API_URL + (activeTab === "login" ? "/login" : "/signup"),
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(requestBody),
				}
			);

			const responseBody = await response.json();
			if (response.ok) {
				localStorage.setItem("userId", responseBody.id);
				localStorage.setItem("username", responseBody.username);
				localStorage.setItem("token", responseBody.token);
				localStorage.setItem("userRole", responseBody.role);
				// dispatch({ type: "LOGIN" });
				setAlertMessage(
					responseBody.message +
						(activeTab === "signup" ? " The User Is Now Logged-In" : "")
				);
				navigate("/problems");
			} else {
				// Handle the error message in a state variable
				// to conditionally render the alert component
				setAlertMessage(responseBody.error);
			}
		} catch (error) {
			console.log(error);
			setAlertMessage(error);
		}
	}

	function navigateToLogin() {
		setActiveTab("login");
		navigate("/login");
	}

	function navigateToSignup() {
		setActiveTab("signup");
		navigate("/signup");
	}

	const divStyleInactive = {
		padding: "0.7rem 4.32rem",
		fontSize: "17px",
		cursor: "pointer",
		fontFamily: "Consolas",
		fontWeight: "bold",
		flexGrow: "1", // To Equalize div Widths Of Login & Signup
	};

	const divStyleActive = {
		...divStyleInactive,
		boxShadow: "0 0 2px 1px rgba(121, 80, 242, 0.8)",
		backgroundColor: "rgba(121, 80, 242, 0.4)",
		transition: "background-color 0.3s",
	};

	return !localStorage.getItem("token") ? (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				marginTop: "8.5rem",
				position: "relative",
			}}
		>
			{alertMessage !== "" && (
				<div style={{ position: "absolute", bottom: "20.5rem" }}>
					{/* <Alert message={alertMessage} type="success" /> */}
					{/* <Alert message={alertMessage} type="alert" /> */}
					<Alert message={alertMessage} type="danger" />
					<br />
				</div>
			)}
			<div className="form-container">
				<form method="POST" onSubmit={submit}>
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-evenly",
							border: "1px solid rgba(121, 80, 242, 0.4)",
							height: "2.65rem",
							marginBottom: "0.6rem",
						}}
					>
						<div
							style={
								activeTab === "login"
									? divStyleActive
									: divStyleInactive
							}
							onClick={() => navigateToLogin()}
						>
							Login
						</div>
						<div
							style={
								activeTab === "signup"
									? divStyleActive
									: divStyleInactive
							}
							onClick={() => navigateToSignup()}
						>
							Signup
						</div>
					</div>
					<br />

					<input
						className="input-text"
						type="text"
						id="username"
						name="username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						placeholder="username"
						autoComplete="off"
						required
					></input>
					<br />
					<br />

					<input
						style={{
							marginBottom: "0.55rem",
						}}
						className="input-text"
						type="password"
						id="password"
						name="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="password"
						autoComplete="off"
						required
					></input>
					<br />
					<br />

					<input
						className="purple-btn"
						type="submit"
						id="submit"
						name="submit"
						value={activeTab === "login" ? "Login" : "Signup"}
					></input>
				</form>
			</div>
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
			<h2>The User Is Logged In. Explore Problems.</h2>
		</div>
	);
}

export default LoginSignup;
