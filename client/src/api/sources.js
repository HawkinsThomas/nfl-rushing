const SERVER = 'http://localhost:3004';

const rushingYardData = {
  get: () => fetch(`${SERVER}/rushingYardData`),
  sortBy: (sortParam, startIndex, numberOfResults) => fetch(
    `${SERVER}/rushingYardData?search=${sortParam}&startIndex=${startIndex}&numberOfResults=${numberOfResults}`
  ),
};

const sources = {
  rushingYardData,
};

export default sources;
