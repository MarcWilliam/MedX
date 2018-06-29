let cluster = require('cluster');
let os = require('os');
let CONFIG = require('./config');
let HTTPserver = require('./http-server');

if (CONFIG.CLUSTER.USE && cluster.isMaster) {

    var numWorkers = CONFIG.CLUSTER.NO == 0 ? os.cpus().length : CONFIG.CLUSTER.NUMBER;

    console.log(`Master cluster setting up ${numWorkers} workers...`);

    for (var i = 0; i < numWorkers; i++) { cluster.fork(); }

    cluster.on('online', (worker) => console.log(`Worker ${worker.process.pid} \t is online`));

    cluster.on(`exit`, (worker, code, signal) => {
        console.warn(`Worker ${worker.process.pid} died with code: ${code}, and signal: ${signal}`);
        console.log(`Starting a new worker...`);
        cluster.fork();
    });

} else {
    var httpServer = HTTPserver();
}