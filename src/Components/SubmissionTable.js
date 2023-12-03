import { useState } from "react";
import { useTable } from "react-table";
import { useNavigate } from "react-router-dom";
import Pagination from "./Pagination";

function SubmissionTable({ columns, allData }) {
	const [currentPage, setCurrentPage] = useState(1);
	const rowsPerPage = 3;
	const firstIndex = (currentPage - 1) * rowsPerPage;
	const lastIndex = firstIndex + rowsPerPage - 1;
	const numPages = Math.ceil(allData.length / rowsPerPage);
	const data = allData.slice(firstIndex, lastIndex + 1);

	const navigate = useNavigate();
	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		useTable({
			columns,
			data
		});

	return (
		<>
			<table className="submission-table" {...getTableProps()}>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th {...column.getHeaderProps()}>
									{column.render("Header")}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{rows.map((row) => {
						prepareRow(row);
						return (
							<tr
								onClick={() => {
									navigate("/problems/" + row.cells[1].value);
								}}
								{...row.getRowProps()}
							>
								{row.cells.map((cell) => {
									const cellValue = cell.value;
									let className =
										cellValue === "Easy"
											? "submission-table-easy-question"
											: cellValue === "Medium"
											? "submission-table-medium-question"
											: cellValue === "Hard"
											? "submission-table-hard-question"
											: "";

									className += String(cellValue).includes("Accepted")
										? " submission-table-accepted-cell"
										: "";

									className += String(cellValue).includes("Rejected")
										? " submission-table-rejected-cell"
										: "";

									className += Number.isInteger(Number(cellValue))
										? " submission-table-id-column-values"
										: "";

									return (
										<td className={className} {...cell.getCellProps()}>
											{cell.render("Cell")}
										</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
			
			<Pagination
				numPages={numPages}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
			/>
		</>
	);
}

export default SubmissionTable;
