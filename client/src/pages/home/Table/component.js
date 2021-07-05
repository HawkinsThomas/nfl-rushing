import React from 'react';
import Row from './Row'
import Spinner from './Spinner';


export const Table = ({ headers, data, loadingResults }) => {
  const generateRow = (rowData, index) => <Row values={rowData} isHeader={false} key={index} />
  return (
    <div>
      <Row values={headers} isHeader={true} />
        {loadingResults && <Spinner />}
        {!loadingResults && data && data.map(generateRow)}
    </div>
  );
}