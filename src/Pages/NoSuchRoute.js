import { useNavigate } from "react-router-dom";

function NoSuchRoute() {
	const navigate = useNavigate();

	return (
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
			<h2>This Page Does Not Exist.</h2>
			<br />
			<button className="purple-btn" onClick={() => navigate("/home")}>
				Go To Home Page
			</button>
		</div>
	);
}

export default NoSuchRoute;
