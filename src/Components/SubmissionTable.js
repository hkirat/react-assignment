// import { useState } from "react";
import { useTable } from "react-table";
import { useNavigate } from "react-router-dom";
import PaginationInitializer from "./PaginationInitializer";
import Pagination from "./Pagination";

function SubmissionTable({ columns, tableData }) {
	const paginationVariables = PaginationInitializer(tableData);
	const data = paginationVariables.paginatedData;
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
				totalRows={paginationVariables.totalRows}
				rowsPerPageMultiple={paginationVariables.rowsPerPageMultiple}
				maxPaginationPages={paginationVariables.maxPaginationPages}
				rowsPerPage={paginationVariables.rowsPerPage}
				setRowsPerPage={paginationVariables.setRowsPerPage}
				currentPage={paginationVariables.currentPage}
				setCurrentPage={paginationVariables.setCurrentPage}
				numPages={paginationVariables.numPages}
				paginationPageNumberArray={paginationVariables.paginationPageNumberArray}
			/>
		</>
	);
}

export default SubmissionTable;
