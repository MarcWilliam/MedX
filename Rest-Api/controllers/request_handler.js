"use strict";

var model = require('../models/record_store');

class RequestHandler {
    constructor(){}

    async findRecords(request, response){
        response.send(await model.get());
    }

    async addRecord(request, response){
        (await model.post(request.body));
    }

    async editRecord(request, response){

    }


    async removeRecord(request, response){
        (await model.delete(request.body));
    }

}


module.exports = new RequestHandler();