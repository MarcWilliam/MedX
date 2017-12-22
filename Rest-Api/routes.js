"use strict";

var server = require('./server');

var control = require('./controllers/control');


server.get(`/api/record`, async (request, response)=>{
    response.send(await control.findRecords());
    
});

server.post(`/api/record`, async (request, response)=>{
    (await control.addRecord(request.body));
})

server.put(``, async (request, response)=>{
    //editRecord
})

server.delete(`/api/record`, async (request, response)=>{
    (await control.removeRecord(request.body));
})




/*server.route([
    {
        method: 'GET',
        path: '/api/record',
        handler: function (request, response){
            response.send(`api/record`);
            console.log(`api/record`);
        }
    }

])*/