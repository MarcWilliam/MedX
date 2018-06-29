"use strict";

var Query = require('../models/query');

module.exports = class QueryController {

    static async find(request, response) {
        response.send(await Query.get());
    }

    static async findById(request, response) {
        response.send(await Query.getById(request.params.id));
    }

    static async findByCategory(request, response) {
        response.send(await Query.getByCategory(request.params.category, request.params.subCategory));
    }

    static async add(request, response) {
        (await Query.post(request.body));
    }

    static async edit(request, response) {
        (await Query.update(request.params.id, request.body));
    }

    static async remove(request, response) {
        (await Query.delete(request.body));
    }

}