"use strict";

var Record = require('./routers/record-routes');
var Query = require('./routers/query-routes');
var QueryResult = require('./routers/query-result-routes');

let CONFIG = require('./config');

var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

module.exports = function HTTPserver() {
    var server = express();
    server.use(cors());
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: false }));
    server.listen(CONFIG.HTTP.PORT);
    console.log(`Express server running on port ${CONFIG.HTTP.PORT} . . .`);

    server.use(`/api/records`, Record);
    server.use(`/api/queries`, Query);
    server.use(`/api/queries-result`, QueryResult);
}