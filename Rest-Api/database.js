"use strict";

var mongoClient = require('mongodb').MongoClient;

let config = require('./config');



class Database {
    constructor(){
        this.db = null;
    }

    async getConnection(){
        if(this.db === null){
            this.db = await mongoClient.connect(config.url);            
        }

        return this.db;
    }
}

module.exports = new Database();