"use strict";
var query_controller = require('../controllers/query-controller');
var router = require('express').Router();

class QueryRoutes{
    Router(){
        router.get(`/`, async (request, response)=>{
            (await query_controller.find(request, response));
        });
        router.post(`/`, async (request, response)=>{
            (await query_controller.add(request, response));
        });
        router.put(`/:id`, async (request, response)=>{
            (await query_controller.edit(request, response));
        });
        router.delete(`/`, async (request, response)=>{
            (await query_controller.remove(request, response)); 
        });
        return router;
    }
}

module.exports = new QueryRoutes();