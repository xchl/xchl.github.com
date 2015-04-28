/**
 *
 * Created by X on 15/4/24.
 */
var server = require('./server');
var route = require('./router');
var requestHandlers = require('./requestHandlers');
var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
server.start(route.route,handle);