var http = require("http");

http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("A a pagina ai minha gente.");
	response.end();
}).listen(8888);
