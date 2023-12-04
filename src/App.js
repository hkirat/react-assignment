import { Routes, Route } from "react-router-dom";

import Header from "./Layout/Header";
import Navigation from "./Layout/Navigation";
import NoSuchRoute from "./Pages/NoSuchRoute";
import Home from "./Pages/Home";
import LoginSignup from "./Pages/LoginSignup";
import Problems from "./Pages/Problems";
import Problem from "./Pages/Problem";
import Submissions from "./Pages/Submissions";
import { UserProvider } from "./Context/UserContext";

function App() {
	return (
		<>
			<Header />
			<UserProvider>
				<Navigation />
				<Routes>
					<Route path="*" element={<NoSuchRoute />} />
					<Route path="/" exact element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/login" element={<LoginSignup />} />
					<Route path="/signup" element={<LoginSignup />} />
					<Route path="/problems" element={<Problems />} />
					<Route path="/problems/:problemId" element={<Problem />} />
					<Route path="/submissions" element={<Submissions />} />
				</Routes>
			</UserProvider>
		</>
	);
}

export default App;
