function Pagination({ numPages, currentPage, setCurrentPage }) {
	let paginationArray = [];
	const maxPaginationPages = 3; // Adjust this value based on your preference

	if (numPages <= maxPaginationPages) {
		// Show all pages if there are fewer pages than maxPaginationPages
		paginationArray = Array.from({ length: numPages }, (_, i) => i + 1);
	} else {
		// Determine the range of pages to show based on the current page
		let startPage = Math.max(1, currentPage - Math.floor(maxPaginationPages / 2));
		let endPage = Math.min(numPages, startPage + maxPaginationPages - 1);

		// Adjust the startPage if it's too close to the end
		startPage = Math.max(1, endPage - maxPaginationPages + 1);

		// Generate the pagination array
		paginationArray = Array.from(
			{ length: endPage - startPage + 1 },
			(_, i) => startPage + i
		);

		// Show ellipses at the beginning if necessary
		if (startPage > 1) {
			// paginationArray = [1, "...", ...paginationArray];
			paginationArray = ["...", ...paginationArray];
		}

		// Show ellipses at the end if necessary
		if (endPage < numPages) {
			// paginationArray = [...paginationArray, "...", numPages];
			paginationArray = [...paginationArray, "..."];
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

	return (
		<div className="pagination-array">
			{
				!paginationArray.includes(1) &&
				<button className="pagination-item-first" onClick={firstPage}>
					First
				</button>
			}
			<button className="pagination-item" onClick={prevPage}>
				Prev
			</button>
			{paginationArray.map((num, idx) => (
				<button
					className={`pagination-item${
						currentPage === num ? "-active" : ""
					}`}
					key={idx}
					onClick={() => handlePageChange(num)}
				>
					{num}
				</button>
			))}
			<button className="pagination-item" onClick={nextPage}>
				Next
			</button>
			{
				!paginationArray.includes(numPages) &&
				<button className="pagination-item-last" onClick={lastPage}>
					Last
				</button>
			}
		</div>
	);
}

export default Pagination;