"use strict";

var Record = require('../models/record');

module.exports = class RecordController {

    static async find(request, response){
        response.send(await Record.get());
    }

    static async add(request, response){
        (await Record.post(request.body));
    }

    static async edit(request, response){
        (await Record.update(request.params.id, request.body));
    }

    static async remove(request, response){
        (await Record.delete(request.body));
    }

}