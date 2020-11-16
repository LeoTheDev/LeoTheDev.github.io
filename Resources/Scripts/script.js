const socket = io.connect('https://www.LeoTheDev.github.io');

socket.on('Socket-Connected', data =>{
	console.log(data);
})
