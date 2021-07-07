const express = require('express');
const sliceData = require('../helpers/sliceData');


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

module.exports = rushingYardDataRouter;
