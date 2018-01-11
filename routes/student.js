/**
 * Created by lap00344 on 10/31/17.
 */
'use strict';

var express = require('express');
var router = express.Router();

var studentController = require('../controllers/studentController');

module.exports = function(router) {
    router.get('/', studentController.index);
};