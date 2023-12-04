import React, { useState, useEffect } from "react";

function Alert({ message, type, width = "20.85rem" }) {
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setVisible(false);
		}, 2000); // Hide the alert after 2 seconds

		return () => clearTimeout(timeout);
	}, []);

	if (!visible) {
		return null; // Don't render the alert if it's not visible
	}

	let alertStyle = {
		width: width,
		boxShadow: `0 0 10px -5px
			${type === "success"
				? "rgba(42, 198, 42, 0.8)"
				: type === "alert"
				? "rgba(0, 143, 221, 0.8)"
				: "rgba(221, 0, 0, 0.8)"}`,
		borderRadius: "4px",
		backgroundColor:
			type === "success"
				? "rgba(100, 255, 76, 0.3)"
				: type === "alert"
				? "rgba(0, 255, 255, 0.3)"
				: "rgba(255, 132, 132, 0.3)",
		color:
			type === "success"
				? "rgb(37, 170, 0)"
				: type === "alert"
				? "rgb(0, 143, 221)"
				: "rgb(221, 0, 0)",
		fontFamily: "Segoe UI",
		padding: "0.5rem 4rem",
		border: `1px solid ${
			type === "success"
				? "rgb(37, 170, 0)"
				: type === "alert"
				? "rgb(0, 143, 221)"
				: "rgb(221, 0, 0)"
		}`,
		textAlign: "center",
	};

	return <div style={alertStyle}>{message}</div>;
}

export default Alert;
