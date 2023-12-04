function Pagination({
	totalRows,
	rowsPerPageMultiple,
	maxPaginationPages,
	setMaxPaginationPages,
	rowsPerPage,
	setRowsPerPage,
	currentPage,
	setCurrentPage,
	numPages,
	paginationPageNumberArray,
}) {
	if (numPages <= maxPaginationPages) {
		// Show all pages if there are fewer pages than maxPaginationPages
		paginationPageNumberArray = Array.from(
			{ length: numPages },
			(_, i) => i + 1
		);
	} else {
		// Determine the range of pages to show based on the current page
		// Make sure startPage is greater than or equal to 1 at all times,
		// and that the currentPage is in the center of the array by using maxPaginationPages / 2
		let startPage = Math.max(
			1,
			currentPage - Math.floor(maxPaginationPages / 2)
		);
		let endPage = Math.min(numPages, startPage + maxPaginationPages - 1);

		// Adjust the startPage if it's too close to the end
		// For ex: if maxPaginationPages is 5, numPages is 11 and the currentPage is 11,
		// based on the above calculations, startPage will be 9, considering that the
		// currentPage will have 2 numbers to its left and right. But this time, its right
		// cannot allow for 2 more pages (as it's the last page), so to account for this,
		// we'll have to set the startPage to 7 [7, 8, 9, 10, 11] instead of 9 [9, 10, 11].
		// Similarly, if currentPage is 10, the startPage will be 8 [8, 9, 10, 11], again we'll
		// have to set it to 7 [7, 8, 9, 10, 11]
		startPage = Math.max(1, endPage - maxPaginationPages + 1);

		// Generate the pagination array
		paginationPageNumberArray = Array.from(
			{ length: endPage - startPage + 1 },
			(_, i) => startPage + i
		);

		// Show ellipses at the beginning if necessary
		if (startPage > 1) {
			paginationPageNumberArray = ["...", ...paginationPageNumberArray];
		}

		// Show ellipses at the end if necessary
		if (endPage < numPages) {
			paginationPageNumberArray = [...paginationPageNumberArray, "..."];
		}
	}

	function firstPage() {
		setCurrentPage(1);
	}

	function prevPage() {
		if (currentPage > 1) setCurrentPage(currentPage - 1);
	}

	function nextPage() {
		if (currentPage < numPages) setCurrentPage(currentPage + 1);
	}

	function lastPage() {
		setCurrentPage(numPages);
	}

	function handlePageChange(num) {
		if (num !== "...") setCurrentPage(num);
	}

	const handleRowsPerPage = (event) => {
		setRowsPerPage(Number(event.target.value));
		setMaxPaginationPages(Math.ceil(numPages / Number(event.target.value)));
		firstPage();
	};

	let rowsPerPageArray = [];
	for (let i = rowsPerPageMultiple; i <= totalRows; i += rowsPerPageMultiple) {
		rowsPerPageArray.push(i);
		if (i + rowsPerPageMultiple > totalRows)
			rowsPerPageArray.push(totalRows);
	}

	const handleMaxPaginationPages = (event) => {
		setMaxPaginationPages(Number(event.target.value));
		firstPage();
	};

	let maxPaginationPagesArray = [];
	for (let i = 1; i <= numPages; i++) {
		maxPaginationPagesArray.push(i);
	}

	return (
		<div className="pagination-items">
			<select
				className="pagination-item"
				id="rowsPerPage"
				value={rowsPerPage}
				onChange={handleRowsPerPage}
			>
				{rowsPerPageArray.map((num, idx) => (
					<option value={num} key={idx}>
						Rows - {num}
					</option>
				))}
			</select>

			{!paginationPageNumberArray.includes(1) && (
				<button
					className="pagination-item pagination-item-first"
					onClick={firstPage}
				>
					First
				</button>
			)}

			{
				numPages > 1 &&
				<button className="pagination-item" onClick={prevPage}>
					Prev
				</button>
			}

			{paginationPageNumberArray.map((num, idx) => (
				<button
					className={`pagination-item pagination-item${
						currentPage === num ? "-active" : ""
					}`}
					key={idx}
					onClick={() => handlePageChange(num)}
				>
					{num}
				</button>
			))}

			{
				numPages > 1 &&
				<button className="pagination-item" onClick={nextPage}>
					Next
				</button>
			}

			{!paginationPageNumberArray.includes(numPages) && (
				<button
					className="pagination-item pagination-item-last"
					onClick={lastPage}
				>
					Last
				</button>
			)}

			<select
				className="pagination-item"
				id="maxPaginationPages"
				value={maxPaginationPages}
				onChange={handleMaxPaginationPages}
			>
				{maxPaginationPagesArray.map((num, idx) => (
					<option value={num} key={idx}>
						Pages - {num}
					</option>
				))}
			</select>
		</div>
	);
}

export default Pagination;
