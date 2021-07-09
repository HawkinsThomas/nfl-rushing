import React, { useEffect } from 'react';
import Paginate from './Paginate';
import Table from './Table';
import PlayerFilter from './PlayerFilter';
import DownloadButton from './DownloadButton';
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
  playerFilter,
  setPlayerFilter,
}) => {
  useEffect(() => {
    if (!loadingResults) {
      const queryParams = {
        startIndex: currentPage * resultsPerPage,
        numberOfRows: resultsPerPage,
        sortKey,
        inverted,
        playerFilter,
      };
      fetchPlayerData(queryParams);
    }
  }, [currentPage, resultsPerPage, sortKey, inverted, playerFilter]);


  return (
    <div>
      <PlayerFilter value={playerFilter} onChange={setPlayerFilter} />
      <Table headers={HEADERS} data={playerData} loadingResults={loadingResults} />
      {
        playerData && !loadingResults && (
          <Paginate
            resultsPerPage={resultsPerPage}
            numberOfResults={numberOfResults}
          />
        )
      }
      <DownloadButton queryParams={{
        startIndex: currentPage * resultsPerPage,
        numberOfRows: resultsPerPage,
        sortKey,
        inverted,
        playerFilter,
      }}
      />
    </div>
  );
};

export default HomePage;
