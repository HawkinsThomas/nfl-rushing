const fs = require('fs');

const data = JSON.parse(fs.readFileSync('helpers/rushing.json', 'utf8'));

const readRushingYardData = (index, numberOfRows) => {
  return ({
    data: data.rushingYardData.slice(index, index + numberOfRows),
    numberOfResults: data.rushingYardData.length,
  });
};
module.exports = readRushingYardData
