import React from 'react';
import ReactPaginate from 'react-paginate';
import { StyledPaginateWrapper } from './styledComponents';


export const Paginate = () => {
  return (
    <StyledPaginateWrapper>
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        pageCount={20}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        onPageChange={() => {}}
        containerClassName={'pagination'}
      />
    </StyledPaginateWrapper>
  );
}
