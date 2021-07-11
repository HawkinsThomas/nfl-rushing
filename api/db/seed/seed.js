const fs = require('fs');
const { massageData } = require('../../helpers/massageData');
const RushingController = require('../controllers/rushing.controller');
const connect = require('../config/database.config');


const seed = (sampleData) => {
  sampleData.forEach((row) => RushingController.create(row).then(() => console.log('...')));
};

const test = () => {
  RushingController.findSortSlice({
    index: 0,
    numberOfRows: 5,
    sortKey: null,
    inverted: false,
    filter: 'tom',
    all: false,
  }).then((result) => {
    console.log(result)
    process.exit();
  }).catch(e => console.log(e));
}

connect();

const sampleData = JSON.parse(fs.readFileSync('./rushing.json', {encoding:'utf8', flag:'r'})).rushingYardData;
// seed(massageData(sampleData));
test();
