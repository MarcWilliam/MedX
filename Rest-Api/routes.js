"use strict";

var server = require('./server');

var control = require('./controllers/request_handler');


server.get(`/api/record`, async (request, response)=>{
    (await control.findRecords(request, response));
    
});

server.post(`/api/record`, async (request, response)=>{
    (await control.addRecord(request, response));

})

server.put(``, async (request, response)=>{
    (await control.editRecord(request, response));

})

server.delete(`/api/record`, async (request, response)=>{
    (await control.removeRecord(request, response));
    
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