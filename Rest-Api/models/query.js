"use strict";

let database = require('../helpers/database');

const table = "queries";

module.exports = class Query {

    constructor() { }

    static async get() {
        let db = await database.getConnection();
        let collection = db.collection(table);
        let docs = (await collection.find({}).toArray());
        return docs;
    }

    static async post(param) {
        let db = await database.getConnection();
        let collection = db.collection(table);
        let result = collection.insertOne(param);
    }

    static async update(id, param) {
        let db = await database.getConnection();
        let collection = db.collection(table);
        let result = collection.updateOne({ id: parseInt(id, 10) }, { $set: param });
    }

    static async delete(param) {
        let db = await database.getConnection();
        let collection = db.collection(table);
        let result = collection.deleteOne(param);
    }

}