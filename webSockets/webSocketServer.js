var WebSocketServer = require("ws").Server; 
//instance of server - Can call it via wws, isntead of www..
var wss = new WebSocketServer({port : 3000}); 

//listener for new connection 
//function, when a new socket is connected 
wss.on("connection", function(ws){

	ws.on("message", function(message){
		if (message === 'exit') {
			ws.close();
		}else{
			wss.clients.forEach(function(client){
				client.send(message);
			});
		}
	});
	ws.send("Welsome to cyber chat");
});