var net = require('net');
var server = net.createServer(function(socket){
    socket.on('data',function(data){
        console.log(data);
        socket.write('hello');
    });
    socket.on('end',function(){
        console.log('bye bye!');
    });
    socket.write('hi dou bi');
});
server.close()

server.listen(8214,function(){
    console.log('server bound');
});
