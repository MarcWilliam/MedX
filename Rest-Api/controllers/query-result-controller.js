"use strict";

var QueryResult = require('../models/query-result');

module.exports = class QueryResultController {

    static async find(request, response){
        response.send(await QueryResult.get());
    }

    static async add(request, response){
        (await QueryResult.post(request.body));
    }

    static async edit(request, response){
        (await QueryResult.update(request.params.id, request.body));
    }

    static async remove(request, response){
        (await QueryResult.delete(request.body));
    }

}