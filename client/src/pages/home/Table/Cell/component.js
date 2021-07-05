import React from 'react';
import { StyledCell } from './styledComponents';


export const Cell = ({ value, isHeader, className }) => {
  return (
    <StyledCell className={isHeader ? `header ${className}` : `data ${className}`}>
      {value}
    </StyledCell>
  );
}
