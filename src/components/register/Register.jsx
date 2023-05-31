import React, { useState } from "react";
import "./Register.css";

function Register() {
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(email, username, password);
	};

	return (
		<div className="body">
			<div class="container">
				<h1>Register</h1>
				<hr />
				<form onSubmit={handleSubmit}>
					<label for="text">
						<input
							type="text"
							id="text"
							placeholder="Username"
							required
						/>
					</label>
					<label for="email">
						<input
							type="email"
							id="email"
							placeholder="Email"
							required
						/>
					</label>
					<label for="password">
						<input
							type="password"
							id="password"
							placeholder="Password"
							required
						/>
					</label>
					<label for="submit">
						<input type="submit" id="submit" value="Login" />
					</label>
				</form>
			</div>
		</div>
	);
}
export default Register;
