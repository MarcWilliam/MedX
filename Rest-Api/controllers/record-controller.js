"use strict";

var record_model = require('../models/record-model');

class RecordController {
    constructor(){}

    async find(request, response){
        response.send(await record_model.get());
    }

    async add(request, response){
        (await record_model.post(request.body));
    }

    async edit(request, response){
        (await record_model.update(request.params.id, request.body));
    }

    async remove(request, response){
        (await record_model.delete(request.body));
    }


}

module.exports = new RecordController();