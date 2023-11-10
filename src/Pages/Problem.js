import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { useUser } from "../Context/UserContext";

import Alert from "../Components/Alert";

function Problem() {
	const username = localStorage.getItem("username");
	// eslint-disable-next-line
	// const { state, dispatch } = useUser();
	const navigate = useNavigate();
	const { problemId } = useParams();
	const [problem, setProblem] = useState("");
	const [code, setCode] = useState("");
	const [alertMessage, setAlertMessage] = useState("");
	const [alertType, setAlertType] = useState("");

	useEffect(() => {
		async function getProblem() {
			try {
				if (typeof parseInt(problemId) !== "number") {
					navigate(`/invalidURL`);
				}
				const BASE_API_URL = process.env.REACT_APP_NODE_API_URL;
				const response = await fetch(
					BASE_API_URL + `/problems/${problemId}`,
					{
						method: "GET",
						headers: {
							"Content-Type": "application/json",
							token: localStorage.getItem("token"),
						},
					}
				);


				const responseBody = await response.json();
				if (response.ok) {
					setProblem(responseBody);
				} else {
					setProblem("");
					console.log(responseBody.error);
					if (response.status === 404) {
						navigate(`/invalidURL`);
					}
				}
			} catch (error) {
				setProblem("");
				console.log(error);
			}
		}

		getProblem();
		// eslint-disable-next-line
	}, []);

	async function submit() {
		const requestBody = {
			username: username,
			problemId: problemId,
			code: code,
		};

		setCode("");
		setAlertMessage("");

		try {
			const BASE_API_URL = process.env.REACT_APP_NODE_API_URL;
			const response = await fetch(BASE_API_URL + "/submissions", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					token: localStorage.getItem("token"),
				},
				body: JSON.stringify(requestBody),
			});

			const responseBody = await response.json();
			if (response.ok) {
				setAlertMessage(responseBody.message);
				if ((responseBody.message).includes("Incorrect")) {
					setAlertType("alert");
				}
				else {
					setAlertType("success");
				}
				setTimeout(() => {
					navigate("/submissions");
				}, "10000");
			} else {
				setAlertMessage(responseBody.error);
				setAlertType("danger");
			}
		} catch (error) {
			setAlertMessage(error);
			setAlertType("danger");
		}
	}

	return localStorage.getItem("token") ? (
		<>
			<div
				className="problem-container"
				style={{ display: "flex", justifyContent: "space-evenly" }}
			>
				<div
					className="problem-description"
					// style={{ marginLeft: "2rem" }}
				>
					<br />
					<br />
					<br />
					<span>{problem.id}</span>.{" "}
					<span style={{ fontWeight: "500" }}>{problem.title}</span>
					<p>{problem.description}</p>
					{problem.testCases?.map((obj) => {
						return (
							<div key={obj.input + obj.output}>
								<p>
									Input:{" "}
									<span
										style={{
											padding: "0.2rem 0.5rem",
											backgroundColor: "rgb(250, 250, 250)",
											fontFamily: "Consolas",
										}}
									>
										{obj.input}
									</span>
								</p>
								<p>
									Output:{" "}
									<span
										style={{
											padding: "0.2rem 0.5rem",
											backgroundColor: "rgb(250, 250, 250)",
											fontFamily: "Consolas",
										}}
									>
										{obj.output}
									</span>
								</p>
							</div>
						);
					})}
				</div>
				<div
					className="problem-code-division"
					style={{ display: "flex", flexDirection: "column" }}
				>
					<div
						className="problem-code-division-nav-area"
						style={{ display: "flex", justifyContent: "flex-end" }}
					>
						<button
							className="purple-btn"
							style={{
								margin: "1rem 0rem",
								width: "13rem",
							}}
							onClick={() => navigate("/problems")}
						>
							Go To Problems Page
						</button>
					</div>
					<div className="problem-code-box">
						<textarea
							className="code"
							id="code"
							name="code"
							value={code}
							onChange={(e) => setCode(e.target.value)}
							placeholder="code"
							autoComplete="off"
						></textarea>
					</div>
					<div
						className="problem-code-division-submit-area"
						style={{ display: "flex", justifyContent: "flex-end" }}
					>
						<button
							className="purple-btn"
							style={{
								margin: "1rem 0rem",
								width: "13rem",
							}}
							onClick={() => submit()}
						>
							Submit
						</button>
						{alertMessage !== "" && (
							<div style={{ position: "absolute", top: "35rem", right: "9.3rem" }}>
								<Alert message={alertMessage} type={alertType} />
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	) : (
		<>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyItems: "center",
					alignItems: "center",
					gap: "0.3rem",
					margin: "3.7rem 0",
					position: "relative",
				}}
			>
				<div style={{ position: "absolute", top: "6rem" }}>
					{/* <Alert message={alertMessage} type="success" /> */}
					{/* <Alert message={alertMessage} type="alert" /> */}
					<Alert message={"The User Must Be Logged-In"} type="danger" />
					<br />
				</div>
				<button
					className="purple-btn"
					style={{ marginTop: "11.75rem" }}
					onClick={() => navigate("/login")}
				>
					Go To Login
				</button>
			</div>
		</>
	);
}

export default Problem;
