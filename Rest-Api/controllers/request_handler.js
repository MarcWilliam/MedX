"use strict";

var model = require('../models/record_store');

class RequestHandler {
    constructor(){}

    async find(request, response){
        response.send(await model.get(request.params.table));
    }

    async add(request, response){
        (await model.post(request.params.table, request.body));
    }

    async edit(request, response){
        (await model.update(request.params.table, request.params.id, request.body));
    }

    async remove(request, response){
        (await model.delete(request.params.table, request.body));
    }


}

module.exports = new RequestHandler();