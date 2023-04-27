import React from "react";
import { Pagination } from "react-bootstrap";
function PaginationComponent({
  itemsPerPage,
  totalItems,
  currentPage,
  totalPages,
  setCurrentPage,
}) {
  let checkIfPageIsValid = (pageNumber, end) => {
    if (pageNumber >= 1 && pageNumber <= end) {
      return false;
    }
    return true;
  };
  return (
    <div className="d-flex aligns-items-center justify-content-center">
      <Pagination>
        <Pagination.First
          onClick={() => {
            setCurrentPage(1);
          }}
        />
        <Pagination.Prev
          disabled={checkIfPageIsValid(currentPage - 1, totalPages)}
          onClick={() => {
            setCurrentPage(currentPage - 1);
          }}
        />
        <Pagination.Item
          onClick={() => {
            setCurrentPage(1);
          }}
        >
          {1}
        </Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Item
          disabled={checkIfPageIsValid(currentPage - 1, totalPages)}
          onClick={() => {
            setCurrentPage(currentPage - 1);
          }}
        >
          {currentPage - 1}
        </Pagination.Item>
        <Pagination.Item active>{currentPage}</Pagination.Item>
        <Pagination.Item
          disabled={checkIfPageIsValid(currentPage + 1, totalPages)}
          onClick={() => {
            setCurrentPage(currentPage + 1);
          }}
        >
          {currentPage + 1}
        </Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Item
          onClick={() => {
            setCurrentPage(totalPages);
          }}
        >
          {totalPages}
        </Pagination.Item>
        <Pagination.Next
          disabled={checkIfPageIsValid(currentPage + 1, totalPages)}
          onClick={() => {
            setCurrentPage(currentPage + 1);
          }}
        />
        <Pagination.Last
          onClick={() => {
            setCurrentPage(totalPages);
          }}
        />
      </Pagination>
    </div>
  );
}

export default PaginationComponent;
