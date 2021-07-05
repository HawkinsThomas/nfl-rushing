import styled from 'styled-components';


export const StyledPaginateWrapper = styled.div`
  .pagination {
    justify-content: center;
  }

  ul {
    display: flex;
    list-style: none;
    padding: 0;
  }

  ul.pagination li {
    display: flex;
    width: 40px;
    border: 1px solid #e2e2e2;
    justify-content: center;
    font-size: 25px;
  }

  li {
    cursor: pointer;
    user-select: none
  }

  li.break {
    cursor: auto;
  }

  ul.pagination li a {
    text-decoration: none;
    color: #337ab7;
    font-size: 20px;
    text-align: center;
    width: 100%;
    height: 100%;
  }

  ul.pagination li.selected a {
    color: white;
  }
  ul.pagination li.selected {
    background-color: #337ab7;
  }

  ul.pagination li a:hover,
  ul.pagination li a.active {
    color: blue;
  }

  .page-selection {
    width: 48px;
    height: 30px;
    color: #337ab7;
  }
`;
