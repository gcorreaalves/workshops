var fs = require('fs');

function execute (){

var 
start,
end,
result;

start = new Date().getTime();
 
for(var i = 1; i <= 5; i++){
	fs.writeFile("async-"+i+".js", "Arquivo assíncrono " + i); 
}

end = new Date().getTime();
result = end - start;

console.log("Tempo resultante do código assícrono: " + result);

}

exports.execute = execute;
