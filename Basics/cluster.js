var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length;
var dns = require('dns');
var fs = require('fs');
var d = require('domain').create();


// DOMAINS Stability: 2 - Unstable 
/* 
Domains provide a way to handle multiple different IO operations as a single group. 
If any of the event emitters or callbacks registered to a domain emit an error event, 
or throw an error, then the domain object will be notified, rather than losing the context 
of the error in the process.on('uncaughtException') handler, 
or causing the program to exit immediately with an error code.

 */



// DNS LOOK UP 
dns.lookup('www.google.com', function onLookup(err, addresses, family) {
    console.log('addresses:  ' + JSON.stringify(addresses));
});

if (cluster.isMaster) {
    // Fork workers.
    for (var i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', function (worker, code, signal) {
        console.log('worker ' + worker.process.pid + ' died');
    });
} else {
    d.on('error', function (er) {
        console.error('Caught error!', er);
    });
    d.run(function () {
        process.nextTick(function () {
            setTimeout(function () { // simulating some various async stuff
                fs.open('addUp.js', 'r', function (er, fd) {
                    if (er) throw er;
                    else {
                        console.log(fd)
                    }
                });
            }, 100);
        });
    });
    // Workers can share any TCP connection
    // In this case its a HTTP server
    http.createServer(function (req, res) {
        res.writeHead(200);
        res.end("hello world\n");
    }).listen(8000);
    console.log("server running in http://localhost:8000")
}