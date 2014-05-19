var http = require("http");

function start() {
	function onRequest (req, res) {
		res.writeHead(200, {"Content-Type": "text/plain"});
	        res.write("A a pagina ai minha gente.");
        	res.end();
	}
	http.createServer(onRequest).listen(8888);
}
exports.start = start;
