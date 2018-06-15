"use strict";

var mongoClient = require('mongodb').MongoClient;

let CONFIG = require('../config');



module.exports = class Database {

    static async getConnection() {
        if (!this._db) {
            this._db = await mongoClient.connect(`mongodb://${CONFIG.DB.HOST}:${CONFIG.DB.PORT}/${CONFIG.DB.SCHEMA}`);
        }

        return this._db;
    }
}