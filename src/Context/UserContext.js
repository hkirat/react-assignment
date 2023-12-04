// This file isn't used anywhere in the project because it did not have a usecase.
// localStorage was a better alternative to this for maintaining user login state
// because the context API is not persistence between page reloads
// (manually changing the URL instead of navigating through the UI), sessions.
// localStorage && the Context API are used in conjunction for a complete state management solution.

import { createContext, useContext, useReducer } from "react";

// Define your initial state
const initialState = {
	loggedIn: false,
};

// Define the actions to update state
const userReducer = (state, action) => {
	switch (action.type) {
		case "LOGIN":
			return {
				...state,
				loggedIn: true,
			};
		case "LOGOUT":
			return {
				...state,
				loggedIn: false,
			};
		default:
			return state;
	}
};

// Create a UserContext
const UserContext = createContext();

// Define a custom hook to use the UserContext
export const useUser = () => {
	return useContext(UserContext);
};

// Create the UserProvider component to wrap your app
export const UserProvider = ({ children }) => {
	const [state, dispatch] = useReducer(userReducer, initialState);

	return (
		<UserContext.Provider value={{ state, dispatch }}>
			{children}
		</UserContext.Provider>
	);
};
