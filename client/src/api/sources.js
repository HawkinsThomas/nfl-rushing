const SERVER = 'http://localhost:9000';

const rushingYardData = {
  get: (startIndex, numberOfRows, sortKey, inverted) => {
    const baseUrl = `${SERVER}/rushingYardData/?`;
    const startIndexString = `${startIndex}` ? `startIndex=${startIndex}` : '';
    const numberOfRowsString = `${numberOfRows}` ? `&numberOfRows=${numberOfRows}` : '';
    const sortKeyString = `${sortKey}` ? `&sortKey=${sortKey}` : '';
    const invertedString = `${inverted}` ? `&inverted=${inverted ? 1 : 0}` : '';

    return fetch(`${baseUrl}${startIndexString}${numberOfRowsString}${sortKeyString}${invertedString}`)
  },
};

const sources = {
  rushingYardData,
};

export default sources;
