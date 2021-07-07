const { massageData } = require('./massageData');
const fs = require('fs');

let sampleData = JSON.parse(fs.readFileSync('helpers/rushing.json', {encoding:'utf8', flag:'r'})).rushingYardData;
sampleData = massageData(sampleData);

const sliceData = ({ data, index, numberOfRows, sortKey, inverted, filter}) => {
  if (!data) {
    data = sampleData; // fake database
  }

  if (filter) {
    data = data.filter(row => row['Player'].toUpperCase().includes(filter.toUpperCase()));
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
