"use strict";
var record_controller = require('../controllers/record-controller');
var router = require('express').Router();

class RecordRoutes{
    Router(){
        router.get(`/`, async (request, response)=>{
            (await record_controller.find(request, response));
        });
        router.post(`/`, async (request, response)=>{
            (await record_controller.add(request, response));
        });
        router.put(`/:id`, async (request, response)=>{
            (await record_controller.edit(request, response));
        });
        router.delete(`/`, async (request, response)=>{
            (await record_controller.remove(request, response)); 
        });
        return router;
    }
}

module.exports = new RecordRoutes();