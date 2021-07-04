import React from 'react';
import { StyledCell } from './styledComponents';


export const Cell = ({ value, isHeader }) => {
  return (
    <StyledCell className={isHeader ? 'header' : 'data'}>
      {value}
    </StyledCell>
  );
}