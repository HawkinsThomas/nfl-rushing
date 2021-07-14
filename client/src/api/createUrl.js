import buildUrl from 'build-url';


const SERVER = 'http://localhost:9000';

export const createUrl = (route, startIndex, numberOfRows, sortKey, inverted, filter) => (
  buildUrl(SERVER, {
    path: route,
    queryParams: {
      startIndex,
      numberOfRows,
      sortKey,
      inverted: inverted ? '1' : '0',
      filter,
    },
  })
);
