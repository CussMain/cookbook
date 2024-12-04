import React, { useState, useCallback } from "react";
import "./Pagination.css";

const Pagination = ({ recipes, getPageNum , itemsPerPage}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePreviousPage = useCallback(() => {
    if (currentPage > 1) {
      setCurrentPage(prevState => prevState - 1);
    }
    getPageNum(currentPage);
  }, [currentPage , getPageNum]);

  const handleNextPage = useCallback(() => {
    const totalPages = Math.ceil(recipes.length / itemsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(prevState => prevState + 1);
    }
    getPageNum(currentPage);
  }, [currentPage, recipes, getPageNum]);

  return (
    <div className="pagination-ui-component">
      <button onClick={handlePreviousPage} disabled={currentPage === 1}>Назад</button>
      <span>{`${currentPage} из ${Math.ceil(recipes.length / itemsPerPage)}`}</span>
      <button onClick={handleNextPage} disabled={currentPage === Math.ceil(recipes.length / itemsPerPage)}>Вперед</button>
    </div>
  );
};

export default Pagination;