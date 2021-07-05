import React from 'react';
import Row from './Row'

export const Table = ({ headers, data }) => {
  const generateRow = (rowData, index) => <Row values={rowData} isHeader={false} key={index} />
  return (
    <div>
      <Row values={headers} isHeader={true} />
      {
       data && data.map(generateRow)
      }
    </div>
  );
}