"use strict";

let database = require('../helpers/database');

const table = "queries";

module.exports = class Query {

    constructor() { }

    static async get() {
        console.log('b');
        let db = await database.getConnection();
        let collection = db.collection(table);
        let docs = (await collection.find({}).toArray());
        console.log(docs);
        return docs;
    }

    static async get(id) {
        let db = await database.getConnection();
        let collection = db.collection(table);
        let docs = (await collection.find({ developer: parseInt(id)}).toArray());
        return docs;
    }

    static async post(param) {
        let db = await database.getConnection();
        
        param.id = (await this.getNextValue(db));

        let collection = db.collection(table);
        let result = collection.insertOne(param);
    }

    //id generation
    static async getNextValue(db){
        let collection = db.collection("counters");
        var sequenceDocument = (await collection.findAndModify(
            {"id": "queryId"},
            [['_id','asc']],
            {$inc:{sequence_value:1}},
            {new: true, upsert: true},
        ));
        return sequenceDocument.value.sequence_value;
    }

    static async update(id, param) {
        let db = await database.getConnection();
        let collection = db.collection(table);
        let result = collection.updateOne({ id: parseInt(id) }, { $set: param });
    }

    static async delete(param) {
        let db = await database.getConnection();
        let collection = db.collection(table);
        let result = collection.deleteOne(param);
    }

}