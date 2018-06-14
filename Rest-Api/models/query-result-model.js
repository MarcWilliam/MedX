"use strict";

let database = require('../database/database');

const table = "queries_result";

class QueryResultModel {
    constructor(){}

    async get(){
        let db = await database.getConnection();
        let collection = db.collection(table);
        let docs = (await collection.find({}).toArray());
        return docs;
    }

    async post (param){
        let db = await database.getConnection();
        let collection = db.collection(table);
        let result = collection.insertOne(param);
    }

    async update (id, param){
        let db = await database.getConnection();
        let collection = db.collection(table);
        let result = collection.updateOne({ id:parseInt(id,10) }, { $set: param });
    }

    async delete (param){
        let db = await database.getConnection();
        let collection = db.collection(table);
        let result = collection.deleteOne(param);
    }

}
module.exports = new QueryResultModel();