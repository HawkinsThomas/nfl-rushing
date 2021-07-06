import styled from 'styled-components';


export const StyledCell = styled.div`
  width: 80px;
  height: 20px;
  display: flex;
  justify-content: center;
  border: 1px solid black;

  &.header {
    cursor: pointer;
    user-select: none;
    background-color: #6600cc;
    color: white;
  }

  &.sorted.data {
    background-color: #e6f9ff;
  }

  &.data {
    background-color: white;
    color: black;
  }

  &.Player {
    width: 200px;
  }
`;
