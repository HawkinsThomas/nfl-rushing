import React from 'react';
import { StyledDownloadButtonWrapper } from './styledComponents';
import { createUrl } from '../../../api/createUrl';


export const DownloadButton = ({ queryParams }) => {
  const {
    startIndex, numberOfRows, sortKey, inverted, playerFilter,
  } = queryParams;
  const route = '/rushingYardData/download/';
  const url = createUrl(route, startIndex, numberOfRows, sortKey, inverted, playerFilter);

  return (
    <StyledDownloadButtonWrapper>
      <a href={url}>download csv</a>
    </StyledDownloadButtonWrapper>
  );
};
