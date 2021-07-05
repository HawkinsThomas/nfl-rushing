import React, { useEffect } from 'react';
import Paginate from './Paginate';
import Table from './Table';
import { HEADERS } from './Table/constants';


const HomePage = ({ playerData, loadingResults, fetchPlayerData }) => {
  useEffect(() => {
    if (!playerData && !loadingResults) fetchPlayerData();
  }, [playerData]);

  return (
    <div>
      <Table headers={HEADERS} data={playerData} />
      <Paginate/>
    </div>
  );
}

export default HomePage;
