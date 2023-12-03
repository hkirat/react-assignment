import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ProblemTable from "../Components/ProblemTable";
import Alert from "../Components/Alert";
// import { useUser } from "../Context/UserContext";

function Problems() {
	const navigate = useNavigate();
	// eslint-disable-next-line
	// const { state, dispatch } = useUser();

	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	const columns = [
		{ accessor: "srno", Header: "Sr No." },
		{ accessor: "title", Header: "Title" },
		{ accessor: "category", Header: "Category" },
		{ accessor: "difficulty", Header: "Difficulty" },
		{ accessor: "acceptance", Header: "Acceptance" },
	];

	useEffect(() => {
		async function getProblems() {
			try {
				const BASE_API_URL = process.env.REACT_APP_NODE_API_URL;
				const response = await fetch(BASE_API_URL + "/problems", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						token: localStorage.getItem("token"),
					},
				});

				const responseBody = await response.json();
				if (response.ok) {
					let srno = 1;
					for (const obj of responseBody) {
						obj.srno = srno++;
					}
					setData(responseBody);
					setLoading(false);
				} else {
					setData([]);
					setLoading(true);
					console.log(responseBody.error);
				}
			} catch (error) {
				setData([]);
				setLoading(true);
				console.log(error);
			}
		}

		getProblems();
	}, []);

	return (
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
			{localStorage.getItem("token") ? (
				<>
					{loading ? (
						<span style={{ fontFamily: "Consolas" }}>Loading...</span>
					) : data.length > 0 ? (
						<ProblemTable columns={columns} allData={data} />
					) : (
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								justifyItems: "center",
								alignItems: "center",
								marginTop: "5rem",
								fontFamily: "Consolas",
							}}
						>
							<h2>
								Problems Are Being Added.
							</h2>
						</div>
					)}
				</>
			) : (
				<>
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
				</>
			)}
		</div>
	);
}

export default Problems;
