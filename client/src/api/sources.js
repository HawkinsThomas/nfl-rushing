const SERVER = 'http://localhost:9000';

const rushingYardData = {
  get: (startIndex, numberOfRows) => fetch(`${SERVER}/rushingYardData/${startIndex}/${numberOfRows}`),
  sortBy: (sortParam, startIndex, numberOfRows) => fetch(
    `${SERVER}/rushingYardData?search=${sortParam}&startIndex=${startIndex}&numberOfRows=${numberOfRows}`
  ),
};

const sources = {
  rushingYardData,
};

export default sources;
