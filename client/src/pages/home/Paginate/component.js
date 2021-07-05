import React from 'react';
import ReactPaginate from 'react-paginate';
import { StyledPaginateWrapper } from './styledComponents';


export const Paginate = ({numberOfResults, resultsPerPage, onPageChange}) => {
  return (
    <StyledPaginateWrapper>
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        pageCount={Math.ceil(numberOfResults/resultsPerPage)}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        onPageChange={(page) => {onPageChange(page.selected, resultsPerPage)}}
        containerClassName={'pagination'}
      />
    </StyledPaginateWrapper>
  );
}
