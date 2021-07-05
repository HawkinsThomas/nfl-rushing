const express = require('express');
const indexRouter = express.Router();

/* GET home page. */
indexRouter.get('/', (req, res, next) =>  {
  res.send('hello world');
});

module.exports = indexRouter;
