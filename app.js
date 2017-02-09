var http = require("http");

http.createServer(function(req,res){
	if(req.url !="/favicon.ico"){
	res.writeHead(200,{"Content-Type": "text/plain"});
	res.write("hello from base server node js\n");
	res.write("you req :"+req.url);
	res.end();
	
	}
	
}).listen(8080);//localhost server 8080

console.log("Server is runing.....");
