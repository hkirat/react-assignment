import { useState } from "react";
import { useTable } from "react-table";
import { useNavigate } from "react-router-dom";
import Pagination from "./Pagination";

function ProblemTable({ columns, allData }) {
	const totalRows = allData.length;
	const rowsPerPageMultiple = Math.ceil(totalRows / 4);
	const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageMultiple);
	const [currentPage, setCurrentPage] = useState(1);
	const firstIndex = (currentPage - 1) * rowsPerPage;
	const lastIndex = firstIndex + rowsPerPage - 1;
	const data = allData.slice(firstIndex, lastIndex + 1);

	const navigate = useNavigate();
	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		useTable({
			columns,
			data,
		});

	return (
		<>
			<table className="problem-table" {...getTableProps()}>
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
								navigate("/problems/" + row.cells[0].value);
							}}
							{...row.getRowProps()}
						>
							{row.cells.map((cell) => {
								const cellValue = cell.value;
								let className =
									cellValue === "Easy"
										? "problem-table-easy-question"
										: cellValue === "Medium"
										? "problem-table-medium-question"
										: cellValue === "Hard"
										? "problem-table-hard-question"
										: "";

								className += String(cellValue).includes("%")
									? " problem-table-acceptance-column-values"
									: "";

								className += Number.isInteger(cellValue)
									? " problem-table-id-column-values"
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
			totalRows={totalRows}
			rowsPerPageMultiple={rowsPerPageMultiple}
			rowsPerPage={rowsPerPage}
			setRowsPerPage={setRowsPerPage}
			currentPage={currentPage}
			setCurrentPage={setCurrentPage}
		/>
		</>
	);
}

export default ProblemTable;
