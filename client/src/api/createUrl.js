const SERVER = 'http://localhost:9000';

export const createUrl = (route, startIndex, numberOfRows, sortKey, inverted, playerFilter) => {
  const baseUrl = `${SERVER}${route}?`;
  const startIndexString = `${startIndex}` ? `startIndex=${startIndex}` : '';
  const numberOfRowsString = `${numberOfRows}` ? `&numberOfRows=${numberOfRows}` : '';
  const sortKeyString = `${sortKey}` ? `&sortKey=${sortKey}` : '';
  const invertedString = `${inverted}` ? `&inverted=${inverted ? 1 : 0}` : '';
  const filter = `${playerFilter}` ? `&filter=${playerFilter}` : '';

  return `${baseUrl}${startIndexString}${numberOfRowsString}${sortKeyString}${invertedString}${filter}`
}
