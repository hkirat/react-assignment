import React, { useState } from "react";

import "./Login.css";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(email);
		console.log(password);
	};

	return (
		<div>
			<div class="container">
				<h1>Login</h1>
				<hr />
				<form onSubmit={handleSubmit}>
					<label for="email">
						<input
							name="email"
							type="email"
							id="email"
							placeholder="Email"
							required
							onChange={(e) => setEmail(e.target.value)}
						/>
					</label>
					<label for="password">
						<input
							name="password"
							type="password"
							id="password"
							placeholder="Password"
							required
							onChange={(e) => setPassword(e.target.value)}
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
export default Login;
