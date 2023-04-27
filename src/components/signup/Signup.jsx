import React from "react";
import "./../../index.css" ;
import Navbar from "../navbar/Navbar";

const Signup = () => {
	1
	const handleclick = (e) => {
		e.preventDefault();
	}


	return (
		<>
		<Navbar/>

		<form className="min-h-screen  flex flex-col justify-center py-12 px-6 lg:px-8">
		<div className="sm:mx-auto sm:w-full sm:max-w-md">

		<label for="email" className="block text-sm font-medium text-gray-700">Email</label>


		<input 
		className=" w-full px-3 py-2 rounded-lg  shadow-sm focus:outline-none focus:border-indigo-500
		border-2 focus:ring-1 focus:ring-indigo-500 " placeholder="email" required/>


		<br/>

		<label for="email" className="block text-sm font-medium text-gray-700">Password</label>


		<input type="password"	className=" w-full px-3 py-2 rounded-lg  shadow-sm focus:outline-none focus:border-indigo-500
		border-2 focus:ring-1 focus:ring-indigo-500 " 
		placeholder="password" required/>


		<br/>
		<button className=" px-10 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white
		bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={handleclick}>Submit </button>
		</div>
		</form>
		</>
	)

}

export default Signup 
