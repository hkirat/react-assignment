import React from "react";
import "./Allproblems.css";
import { Link } from "react-router-dom";
import { problems } from "../../assets/problems";

function Allproblems() {
	return (
		<div className="problems">
			<table>
				<thead>
					<tr>
						<th>S No.</th>
						<th>TitleAcceptance</th>
						<th>Title</th>
						<th>Difficulty</th>
					</tr>
				</thead>
				{problems.map((problem) => (
					<tbody key={problem.id}>
						<tr>
							<td data-label="Job Title">{problem.id}</td>
							<td data-label="Location">{problem.acceptance}</td>
							<td data-label="Department">
								<Link
									to={`/problem/${problem.id}`}
									className="link">
									{problem.title}
								</Link>
							</td>
							<td data-label="Posted">{problem.difficulty}</td>
						</tr>
					</tbody>
				))}
			</table>
		</div>
	);
}
export default Allproblems;
