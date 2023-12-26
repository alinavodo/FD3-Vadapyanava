
import React from 'react';
import ReactPaginate from 'react-paginate';

import './Pagination.css';

const Pagination = ({ currentPage, onChangePage }) => {
  return (
    <ReactPaginate
      className='pagination'
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={15}
      pageCount={10}
      forcePage={currentPage - 1}
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
