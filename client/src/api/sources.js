const SERVER = 'http://localhost:9000';

const rushingYardData = {
  get: (startIndex, numberOfRows, sortKey, inverted, playerFilter) => {
    const baseUrl = `${SERVER}/rushingYardData/?`;
    const startIndexString = `${startIndex}` ? `startIndex=${startIndex}` : '';
    const numberOfRowsString = `${numberOfRows}` ? `&numberOfRows=${numberOfRows}` : '';
    const sortKeyString = `${sortKey}` ? `&sortKey=${sortKey}` : '';
    const invertedString = `${inverted}` ? `&inverted=${inverted ? 1 : 0}` : '';
    const filter = `${playerFilter}` ? `&filter=${playerFilter}` : '';

    return fetch(`${baseUrl}${startIndexString}${numberOfRowsString}${sortKeyString}${invertedString}${filter}`)
  },
};

const sources = {
  rushingYardData,
};

export default sources;
