import { createUrl } from './createUrl';


const rushingYardData = {
  get: (startIndex, numberOfRows, sortKey, inverted, playerFilter) => {
    const route = '/rushingYardData/';
    const url = createUrl(route, startIndex, numberOfRows, sortKey, inverted, playerFilter);

    return fetch(url);
  },
};

const sources = {
  rushingYardData,
};

export default sources;
