const createError = require('http-errors');
const express = require('express');
const path = require('path');
const errorHandler = require('./errors/errorHandler');
const cors = require('cors')
// const cookieParser = require('cookie-parser');
// const logger = require('morgan');

const indexRouter = require('./routes/index');
const rushingYardDataRouter = require('./routes/rushingYardData');

const app = express();
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('helpers', path.join(__dirname, 'helpers'));
app.set('view engine', 'jade');
// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/rushingYardData', rushingYardDataRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use(errorHandler);

module.exports = app;
