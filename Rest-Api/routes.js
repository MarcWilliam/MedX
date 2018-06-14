"use strict";

var server = require('./server');
var record_controller = require('./controllers/record-controller');
var query_result_controller = require('./controllers/query-result-controller');
var query_controller = require('./controllers/query-controller');

const table1 = "records";
const table2 = "queries_result";
const table3 = "queries";

//record routes
server.get(`/api/${table1}`, async (request, response)=>{
    (await record_controller.find(request, response));
});
server.post(`/api/${table1}`, async (request, response)=>{
    (await record_controller.add(request, response));
});
server.put(`/api/${table1}/:id`, async (request, response)=>{
    (await record_controller.edit(request, response));
});
server.delete(`/api/${table1}`, async (request, response)=>{
    (await record_controller.remove(request, response)); 
});

//query result routes
server.get(`/api/${table2}`, async (request, response)=>{
    (await query_result_controller.find(request, response));
});
server.post(`/api/${table2}`, async (request, response)=>{
    (await query_result_controller.add(request, response));
});
server.put(`/api/${table2}/:id`, async (request, response)=>{
    (await query_result_controller.edit(request, response));
});
server.delete(`/api/${table2}`, async (request, response)=>{
    (await query_result_controller.remove(request, response)); 
});

//query reoutes
server.get(`/api/${table3}`, async (request, response)=>{
    (await query_controller.find(request, response));
});
server.post(`/api/${table3}`, async (request, response)=>{
    (await query_controller.add(request, response));
});
server.put(`/api/${table3}/:id`, async (request, response)=>{
    (await query_controller.edit(request, response));
});
server.delete(`/api/${table3}`, async (request, response)=>{
    (await query_controller.remove(request, response)); 
});
