const socket = io.connect('http://localhost:3000');

socket.on('Socket-Connected', data =>{
	console.log(data);
})
