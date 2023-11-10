import { useNavigate } from "react-router-dom";

function Header() {
	const navigate = useNavigate();

	return (
		<h2
			style={{
				textAlign: "center",
				margin: "0",
				padding: "0",
				height: "3.5rem",
				backgroundColor: "rgba(121, 80, 242, 0.8)",
			}}
		>
			<span
				onClick={() => navigate("/home")}
				style={{
					color: "#ffffff",
					lineHeight: "3.5rem",
					fontFamily: "Consolas",
					cursor: "pointer"
				}}
			>
				CheatCode
			</span>
		</h2>
	);
}

export default Header;
