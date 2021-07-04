import React from 'react';
import Paginate from './Paginate';
import Table from './Table';
import { HEADERS } from './Table/constants'


const HomePage = () => {
  return (
    <div>
      <Table headers={HEADERS} />
      <Paginate/>
    </div>
  );
}

export default HomePage