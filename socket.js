const WebSocketServer = require('websocket').server;
const http = require('http');

const server = http.createServer(function(request, response) {
 //здесь мы ничего не пишем,потому что мы используем сокеты,а не http
});
server.listen(1337, function() {});

// создаем вебсокет сервер
const wsServer = new WebSocketServer({
  httpServer: server
});

wsServer.on('request', function(request) {
  let connection = request.accept(null, request.origin);
//принимаем подключение к сокету
})