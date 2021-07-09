import React from 'react';
import { StyledRow } from './styledComponents';
import Cell from '../Cell';
import { HEADERS } from '../constants.js';


export const Row = ({ values, isHeader }) => {
  const generateCell = (key, index) => <Cell className={key} value={values[key]} isHeader={false} key={index} />;
  const generateHeaderCell = (key, index) => <Cell className={key} value={key} isHeader key={index} />;

  const generateCells = HEADERS.map(isHeader ? generateHeaderCell : generateCell);

  return (
    <StyledRow>
      {generateCells}
    </StyledRow>
  );
};
