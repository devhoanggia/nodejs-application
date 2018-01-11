/**
 * Created by lap00344 on 1/20/17.
 */
'use strict';

require('dotenv').config();
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
var router = express.Router();

app.set('view engine', 'ejs');
app.set('views', './views');

const index = require('./routes/index');
const student = require('./routes/student');

app.use('/', index);
app.use('/student', student);

/**
 * Error handler
 */
//app.use(logger('dev'));
//app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

//app.use(bodyParser.urlencoded({
//    extended: true
//}));

//app.use(bodyParser.json());
app.use(errorHandler);

function errorHandler (err, req, res, next) {
    res.status(err.status || 500);
    res.send({ error: err.stack })
}

/**
 * Server listen
 */
app.listen(8100, function() {
    console.log('Example app listening on port 8100!');
});

module.exports = app;