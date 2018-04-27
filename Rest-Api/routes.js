"use strict";

var server = require('./server');

var control = require('./controllers/request_handler');


server.get(`/api/:table`, async (request, response)=>{
    (await control.find(request, response));
});

server.post(`/api/:table`, async (request, response)=>{
    (await control.add(request, response));
})

server.put(`/api/:table/:id`, async (request, response)=>{
    (await control.edit(request, response));
})

server.delete(`/api/:table`, async (request, response)=>{
    (await control.remove(request, response)); 
})
