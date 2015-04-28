
var http = require('http');
var url = require('url');
function start(route,handle){
    //请求事件的回调函数
    function onRequest(req,res){
        var pathname = url.parse(req.url).pathname;

        var postData = '';
        req.setEncoding('utf8');
        req.addListener('data',function(postDataChunk){
            postData += postDataChunk;
            console.log('received post data chunk '+postDataChunk+" ");
        });
        req.addListener("end",function(){
            route(handle,pathname,res,postData)
        });
    }
    http.createServer(onRequest).listen('8888');
}
exports.start = start;
