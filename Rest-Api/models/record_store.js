"use strict";

let database = require('../database');

const table = 'records';

class RecordStore {

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

    async update (){

    }

    async delete (param){
        let db = await database.getConnection();

        let collection = db.collection(table);

        let result = collection.deleteOne(param);
    }

}
module.exports = new RecordStore();

