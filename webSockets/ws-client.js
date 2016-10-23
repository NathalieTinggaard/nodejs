var ws = new Websocket("ws://localhost:3000");

ws.onopen = function(){
	setTitle("Connected to cyber chat"); 
}

ws.onclose = function(){
	setTitle("Disconnected"); 
}

ws.onmessage = function(){
	printMessage(payload.data); 
};

document.forms[0].onsubmit = function(){
	var input = document.getElementById("message");
	ws.send(input.value);
	input.value = ''; 
};

function setTitle(title){
	document.querySelector('h1').innerHTML = title; 
};

function printMessage(message){
	var p = document.createElement('p'); 
	p.innerText = message; 
	document.querySelector('div.messages').appendChild(p);
}