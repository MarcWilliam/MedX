"use strict";

let database = require('../database/database');

class RecordStore {

    constructor(){}

    async get(table){
        let db = await database.getConnection();

        let collection = db.collection(table);

        let docs = (await collection.find({}).toArray());
        
        return docs;
    }

    async post (table, param){
        let db = await database.getConnection();

        let collection = db.collection(table);

        let result = collection.insertOne(param);
    }

    async update (table, id, param){
        let db = await database.getConnection();

        let collection = db.collection(table);
        
        let result = collection.updateOne({ id:parseInt(id,10) }, { $set: param });
    }

    async delete (table, param){
        let db = await database.getConnection();

        let collection = db.collection(table);

        let result = collection.deleteOne(param);
    }

}
module.exports = new RecordStore();

