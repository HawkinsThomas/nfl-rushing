const SERVER = 'http://localhost:3004';

const rushingYardData = {
  get: () => fetch(`${SERVER}/rushingYardData`),
  sortBy: (searchParam) => fetch(`${SERVER}/rushingYardData?search=${searchParam}`),
};

const sources = {
  rushingYardData,
};

export default sources;
