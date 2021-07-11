const createError = require('http-errors');
const express = require('express');
const connect = require('./db/config/database.config');
const path = require('path');
const errorHandler = require('./errors/errorHandler');
const cors = require('cors');
require('dotenv').config();

const indexRouter = require('./routes/index');
const rushingYardDataRouter = require('./routes/rushingYardData');


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('helpers', path.join(__dirname, 'helpers'));
app.set('view engine', 'jade');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

connect();

app.use('/', indexRouter);
app.use('/rushingYardData', rushingYardDataRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

app.use(errorHandler);

module.exports = app;
