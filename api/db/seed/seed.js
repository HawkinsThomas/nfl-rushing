const fs = require('fs');
const { massageData } = require('../../helpers/massageData');
const RushingController = require('../controllers/rushing.controller');
const connect = require('../config/database.config');


const seed = (sampleData) => {
  Promise.all(sampleData.map((row) => RushingController.create(row)))
    .then(() => {
      console.log(`seeded ${sampleData.length} rows`);
    })
    .catch(() => process.exit());
};

const test = () => {
  RushingController.findSortSlice({
    index: 0,
    numberOfRows: 5,
    sortKey: 'Player',
    inverted: false,
    filter: 'tom',
    all: false,
  }).then((result) => {
    console.log(result)

  }).catch(e => console.log(e));
}

const count = async function(){
  const count = await RushingController.count();
  console.log(count);
}

connect();

const sampleData = JSON.parse(fs.readFileSync('./rushing.json', {encoding:'utf8', flag:'r'})).rushingYardData;
seed(massageData(sampleData));
// count();
