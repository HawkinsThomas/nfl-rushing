const express = require('express');
const convertToCSV = require('../helpers/convertToCSV');
const RushingController = require('../db/controllers/rushing.controller');


const rushingYardDataRouter = express.Router();

rushingYardDataRouter.get('/', (req, res, next) =>  {
  const { startIndex, numberOfRows, sortKey, inverted, filter } = req.query;
  return RushingController.findSortSlice({
    index: parseInt(startIndex),
    numberOfRows: parseInt(numberOfRows),
    sortKey,
    inverted: !!parseInt(inverted),
    filter,
    all: false
  }).then(data => res.json(data));
});

rushingYardDataRouter.get('/download/', (req, res, next) =>  {
  const { startIndex, numberOfRows, sortKey, inverted, filter } = req.query;
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
