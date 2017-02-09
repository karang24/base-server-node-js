var http = require("http");

http.createServer(function(req,res){
	res.writeHead(200,{"Content-Type": "text/plain"});
	res.write("hello from base server no js");
	res.end();
	
}).listen(8080);//localhost server 8080

console.log("Server is runing.....");