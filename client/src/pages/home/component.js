import React, { useEffect } from 'react';
import Paginate from './Paginate';
import Table from './Table';
import { HEADERS } from './Table/constants';


const HomePage = ({
    playerData,
    loadingResults,
    fetchPlayerData,
    resultsPerPage,
    numberOfResults,
    currentPage,
    sortKey,
    inverted,
  }) => {
    useEffect(() => {
    if (!loadingResults) {
      const queryParams = {
        startIndex: currentPage * resultsPerPage,
        numberOfRows: resultsPerPage,
        sortKey,
        inverted,
      }
      fetchPlayerData(queryParams);
    }
  }, [currentPage, resultsPerPage, sortKey, inverted]);


  return (
    <div>
      <Table headers={HEADERS} data={playerData} loadingResults={loadingResults} />
      {
        playerData && !loadingResults &&
          <Paginate
            resultsPerPage={resultsPerPage}
            numberOfResults={numberOfResults}
          />
      }
    </div>
  );
}

export default HomePage;
