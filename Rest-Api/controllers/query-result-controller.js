"use strict";

var model = require('../models/query-result-model');

class QueryResultController {
    constructor(){}

    async find(request, response){
        response.send(await model.get());
    }

    async add(request, response){
        (await model.post(request.body));
    }

    async edit(request, response){
        (await model.update(request.params.id, request.body));
    }

    async remove(request, response){
        (await model.delete(request.body));
    }

}

module.exports = new QueryResultController();