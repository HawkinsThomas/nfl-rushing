const express = require('express');
const readRushingYardData = require('../helpers/readFromJson.js');


const rushingYardDataRouter = express.Router();

rushingYardDataRouter.get('/:startIndex/:numberOfRows', (req, res, next) =>  {
  const { startIndex, numberOfRows } = req.params;
  res.json(readRushingYardData(parseInt(startIndex), parseInt(numberOfRows)));
});

module.exports = rushingYardDataRouter;
