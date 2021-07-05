import React from 'react';
import ReactPaginate from 'react-paginate';
import { StyledPaginateWrapper } from './styledComponents';


export const Paginate = ({numberOfResults, resultsPerPage, setPage, currentPage}) => {
  console.log(currentPage);
  return (
    <StyledPaginateWrapper>
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        pageCount={Math.ceil(numberOfResults/resultsPerPage)}
        marginPagesDisplayed={1}
        pageRangeDisplayed={5}
        onPageChange={(page) => {setPage(page.selected)}}
        containerClassName={'pagination'}
        initialPage={currentPage}
      />
    </StyledPaginateWrapper>
  );
}
