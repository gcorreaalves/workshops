var fs = require('fs');

function execute (){

var 
start,
end,
result;

start = new Date().getTime();

for(var i = 1; i <= 5; i++){
	fs.writeFileSync("sync-"+i+".js", "Arquivo síncrono " + i); 
}

end = new Date().getTime();
result = end - start;

console.log("O tempo resultante do método sincrono é: " + result);

}

exports.execute = execute; 
