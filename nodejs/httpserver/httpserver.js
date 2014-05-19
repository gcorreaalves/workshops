var http = require('http');

http.createServer(function(req, res){
	res.writeHead(200, {"Content-type" : "text/html;charset=UTF-8"});
	res.write("<b>Esse é um servidor HTTP!</b>");
	res.end();
}).listen(3000);
