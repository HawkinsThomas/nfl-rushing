const { massageData } = require('./massageData');


const sliceData = ({ data, index, numberOfRows, sortKey, inverted}) => {
  if (!data) {
    data = massageData(); // fake database
  }

  if (sortKey) {
    const compareRows = (a, b) => (b[sortKey] - a[sortKey]);
    const invertedCompareRows = (a, b) => (a[sortKey] - b[sortKey]);
    data = data.sort((inverted ? invertedCompareRows : compareRows))
  }

  return ({
    data: data.slice(index, index + numberOfRows),
    numberOfResults: data.length,
  });
};

module.exports = sliceData;
