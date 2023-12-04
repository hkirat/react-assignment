import { useState } from "react";

export default function PaginationInitializer(tableData) {
	const totalRows = tableData.length;
	const rowsPerPageMultiple = 2;
	const [maxPaginationPages, setMaxPaginationPages] = useState(3);
	const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageMultiple);
	const [currentPage, setCurrentPage] = useState(1);
	const numPages = Math.ceil(totalRows / rowsPerPage);
	const firstIndex = (currentPage - 1) * rowsPerPage;
	const lastIndex = firstIndex + rowsPerPage - 1;
	const paginatedData = tableData.slice(firstIndex, lastIndex + 1);
	const paginationPageNumberArray = [];

	return {
		totalRows,
		rowsPerPageMultiple,
		maxPaginationPages,
		setMaxPaginationPages,
		rowsPerPage,
		setRowsPerPage,
		currentPage,
		setCurrentPage,
		numPages,
		paginatedData,
		paginationPageNumberArray,
	};
}
