"use strict";

var express = require('express');

var cors = require('cors');

var bodyParser = require('body-parser');

var server = express();

server.use(cors());

server.use(bodyParser.json());

server.use(bodyParser.urlencoded({extended: false}));

server.listen(3000);

console.log('Express server running on port 3000 . . .');

module.exports = server;
