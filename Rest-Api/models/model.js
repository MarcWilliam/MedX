"use strict";

var mongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/medical_records';

var model = {}

model.get = async ()=>{
    let db = (await mongoClient.connect(url));
    var collection = db.collection('records');
    let docs = (await collection.find({}).toArray());
    (await db.close());
    return docs;
}

model.post = async (param)=>{
    let db = (await mongoClient.connect(url));
    var collection = db.collection('records');
    let result = collection.insertOne(param);
    (await db.close());
}

model.update = async ()=>{

}

model.delete = async (param)=>{
    let db = (await mongoClient.connect(url));
    var collection = db.collection('records');
    let result = collection.deleteOne(param);
    (await db.close());
}


module.exports = model;

