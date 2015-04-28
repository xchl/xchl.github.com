//var exec = require("child_process").exec;

exports.start = function(response){


    console.log("Request handler 'start' was called.");
    var body = '<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" content="text/html; '+
        'charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/upload" method="post">'+
        '<textarea name="text" rows="20" cols="60"></textarea>'+
        '<input type="submit" value="Submit text" />'+
        '</form>'+
        '</body>'+
        '</html>';
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();


    //console.log("Request handler 'start' was called.");
    //exec("ls -lah", function (error, stdout, stderr) {
    //    response.writeHead(200, {"Content-Type": "text/plain"});
    //    response.write(stdout);
    //    response.end();
    //});

    //console.log("Request handler 'start' was called.");
    //function sleep(milliSeconds,callback) {
    //    var startTime = new Date().getTime();
    //    while (new Date().getTime() < startTime + milliSeconds);
    //    callback();
    //}
    //sleep(10000,function(){
    //    response.writeHead(200, {"Content-Type": "text/plain"});
    //    response.write('started');
    //    response.end();
    //});
    //return "Hello Start";

}
exports.upload = function(response,postData){
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("You've sent: " + postData);
    response.end();

}
