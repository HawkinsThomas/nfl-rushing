import React from 'react';
import { StyledRow } from './styledComponents';
import Cell from '../Cell';


export const Row = ({ values, isHeader }) => {
  const generateCell = (value, index) => <Cell value={value} isHeader={isHeader} key={index} />
  const generateCells = values.map(generateCell);

  return(
    <StyledRow>
      {generateCells}
    </StyledRow>
  );
}
