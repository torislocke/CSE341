const http = require('http');

// imports requesHandler function from routes
const routes = require('./routes');

const server = http.createServer(routes);
// if importing multiple items//
//    const server = http.createServer(routes.handler);
//    console.log('someText')

server.listen(3000);
