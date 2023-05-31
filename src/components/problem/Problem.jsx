import React from "react";
import { problems } from "../../assets/problems";
import { useParams } from "react-router-dom";

function Problem() {
	const { id } = useParams();
	const problem = problems.filter((problem) => problem.id === Number(id));

	return (
		<div>
			{problem[0].id}
			<hr />
			{problem[0].title}
			<hr />
			Input:
			<p>{problem[0].example.Input}</p>
			Output:
			<p>{problem[0].example.Output}</p>
			<hr />
			{problem[0].example.Explanation}
		</div>
	);
}
export default Problem;
