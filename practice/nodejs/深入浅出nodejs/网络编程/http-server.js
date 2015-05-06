var http = require('http');
var sessions = {};
var server = http.createServer(function(req,res){
    sessions[parseInt(Math.random()*10)] = new Date();
    console.log(sessions);
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('hello world');
}).listen(1337,'127.0.0.1');
server.on('connection',function(){
    console.log('connected');
});
console.log('server listening');
