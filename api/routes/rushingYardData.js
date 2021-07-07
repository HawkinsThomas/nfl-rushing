const express = require('express');
const sliceData = require('../helpers/sliceData');
const convertToCSV = require('../helpers/convertToCSV');


const rushingYardDataRouter = express.Router();

rushingYardDataRouter.get('/', (req, res, next) =>  {
  const { startIndex, numberOfRows, sortKey, inverted, filter } = req.query;
  res.json(sliceData({
    index: parseInt(startIndex),
    numberOfRows: parseInt(numberOfRows),
    sortKey,
    inverted: !!parseInt(inverted),
    filter,
  }));
});

rushingYardDataRouter.get('/download/', (req, res, next) =>  {
  const { startIndex, numberOfRows, sortKey, inverted, filter } = req.query;
  const data = sliceData({
    index: parseInt(startIndex),
    numberOfRows: parseInt(numberOfRows),
    sortKey,
    inverted: !!parseInt(inverted),
    filter,
    all: true,
  });

  const csv = convertToCSV(data.data);

  const fileName = 'data.csv';

  res.header('Content-Type', 'text/csv');
  res.attachment(fileName);
  res.send(csv);
});

module.exports = rushingYardDataRouter;
