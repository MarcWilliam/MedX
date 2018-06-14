"use strict";
var query_result_controller = require('../controllers/query-result-controller');
var router = require('express').Router();

class QueryResultRoutes{
    Router(){
        router.get(`/`, async (request, response)=>{
            (await query_result_controller.find(request, response));
        });
        router.post(`/`, async (request, response)=>{
            (await query_result_controller.add(request, response));
        });
        router.put(`/:id`, async (request, response)=>{
            (await query_result_controller.edit(request, response));
        });
        router.delete(`/`, async (request, response)=>{
            (await query_result_controller.remove(request, response)); 
        });
        return router;
    }
}

module.exports = new QueryResultRoutes();