var http = require("http");
const PORT = 3333;
const HOST = 'localhost'

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
  response.end(':) \n');
}).listen(PORT, HOST);

console.log('Servidor executando em http://127.0.0.1:3333/');
