import React from 'react';

const Pagination = ({ totalItems, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / 10);

  const handlePageChange = (page) => {
    onPageChange(page);
  };

  return (
    <div>
      <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
      <span>{currentPage}</span>
      <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
    </div>
  );
};

export default Pagination;
