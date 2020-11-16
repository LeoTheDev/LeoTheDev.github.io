const socket = io.connect('http://www.LeoTheDev.github.io');

socket.on('Socket-Connected', data =>{
	console.log(data);
})