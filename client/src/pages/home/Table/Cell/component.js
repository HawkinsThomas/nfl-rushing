import React from 'react';
import { SORTABLE } from '../constants';
import { StyledCell } from './styledComponents';


export const Cell = ({
  value, isHeader, className, setInverted, setSortKey, sortKey, invertedSort,
}) => {
  let onClick = () => {};
  if (isHeader && SORTABLE.includes(value)) {
    onClick = () => {
      if (value === sortKey) setInverted(!invertedSort);
      if (value !== sortKey) {
        setSortKey(value);
        setInverted(false);
      }
    };
  }

  let sortIndicator = '';

  if (value === sortKey) {
    if (invertedSort) sortIndicator = ' ⋀';
    else sortIndicator = ' ⋁';
  }

  return (
    <StyledCell
      className={`${className} ${isHeader ? 'header' : 'data'} ${className === sortKey ? 'sorted' : ''}`}
      onClick={onClick}
    >
      {`${value}${sortIndicator}`}
    </StyledCell>
  );
};
