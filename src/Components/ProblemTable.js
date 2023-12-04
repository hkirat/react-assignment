import { useTable } from "react-table";
import { useNavigate } from "react-router-dom";
import PaginationInitializer from "./PaginationInitializer";
import Pagination from "./Pagination";

function ProblemTable({ columns, tableData }) {
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
										<td
											className={className}
											{...cell.getCellProps()}
										>
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
				setMaxPaginationPages={paginationVariables.setMaxPaginationPages}
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

export default ProblemTable;
