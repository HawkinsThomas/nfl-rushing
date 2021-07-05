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
  }) => {
  useEffect(() => {
    if (!playerData && !loadingResults) fetchPlayerData();
  }, [playerData]);

  const onPageChange = (pageNumber, resultsPerPage) => {
    console.log(`fetching results ${pageNumber * resultsPerPage} to ${pageNumber * resultsPerPage + resultsPerPage}`)
    // fetchPlayerData()
  }

  return (
    <div>
      <Table headers={HEADERS} data={playerData} loadingResults={loadingResults} />
      {
        playerData && !loadingResults &&
          <Paginate
            resultsPerPage={resultsPerPage}
            numberOfResults={numberOfResults}
            onPageChange={onPageChange}
          />
      }
    </div>
  );
}

export default HomePage;
