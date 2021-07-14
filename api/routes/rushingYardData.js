const express = require('express');
const convertToCSV = require('../helpers/convertToCSV');
const RushingController = require('../db/controllers/rushing.controller');


const rushingYardDataRouter = express.Router();

rushingYardDataRouter.get('/', async function(req, res){
  let { startIndex, numberOfRows, sortKey, inverted, filter } = req.query;
  filter = filter.replace(/[\\\.\+\*\?\^\$\[\]\(\)\{\}\/\'\#\:\!\=\|]/ig, "\\$&");
  const count = await RushingController.count(filter);

  return RushingController.findSortSlice({
    index: parseInt(startIndex),
    numberOfRows: parseInt(numberOfRows),
    sortKey: sortKey || '',
    inverted: !!parseInt(inverted),
    filter: filter || '',
    all: false
  }).then(data => res.json({ ...data, numberOfRecords: count }));
});

rushingYardDataRouter.get('/download/', (req, res) =>  {
  const { startIndex, numberOfRows, sortKey, inverted, filter } = req.query;
  console.log(filter);
  return RushingController.findSortSlice({
    index: parseInt(startIndex),
    numberOfRows: parseInt(numberOfRows),
    sortKey,
    inverted: !!parseInt(inverted),
    filter,
    all: true,
  }).then((data) => {
    const csv = convertToCSV(data);
    const fileName = 'data.csv';

    res.header('Content-Type', 'text/csv');
    res.attachment(fileName);
    res.send(csv);
  });
});

module.exports = rushingYardDataRouter;
