'use strict';

var mongo = {
    db:       'medical_records',
    host:     'localhost',
    username: 'root',
    password: '',
    port:     27017,
    url:      'mongodb://localhost:27017/medical_records'
};

module.exports = 
    {
        server: mongo.host,
        port: mongo.port,
        autoReconnect: true,
        poolSize: 1,
        admin: false,
        url:`mongodb://${mongo.host}:${mongo.port}/${mongo.db}`,
        /*auth:[
            {
                database: mongo.db,
                username: mongo.username,
                password: mongo.password
            }
        ],*/
        adminUsername: '',
        adminPassword: '',
        whitelist: [],
        blacklist: [],

    
}



