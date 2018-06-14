"use strict";

var record = require('./routes/record-routes');
var query = require('./routes/query-routes');
var query_result = require('./routes/query-result-routes');

var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

var server = express();

server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: false}));
server.listen(3000);
console.log('Express server running on port 3000 . . .');

server.use(`/api/records`, record.Router());
server.use(`/api/queries`, query.Router());
server.use(`/api/queries-result`, query_result.Router());

module.exports = server;