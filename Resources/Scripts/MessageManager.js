let inputField = document.getElementById("MessageInput");
let inputData = document.getElementById("MessageTextInput");

let message = {ID:0, Content:null, createdAt:0, Author:null}
let messageContent = {Content:"", AttachedFile:null}

inputField.onsubmit = e => 
{
	e.preventDefault();
		if(!messageIsValid(inputData.value))
			return;
	let currentMessage = {ID:0, Content:{Content:inputData.value, AttachedFile:null}, createdAt:new Date(), Author:window.client}; 
	appendMessage(currentMessage);
	inputData.value = "";
}

function messageIsValid(content)
{
	if(content.length == 0)
		return false;
	for(let i = 0; i < content.length; i++)
	{
		if(content.charAt(i) != ' ')
			return true;
	}
	return false;
}
let messageContainer = document.getElementById("Messages");
function appendMessage(msg)
{
	var parentElement = document.createElement("div");
	var usernameElement = document.createElement("text");
	var contentElement = document.createElement("text");
	var lineBreak = document.createElement("br");

	parentElement.classList.toggle("Message");
	usernameElement.classList.toggle("Username");
	contentElement.classList.toggle("Content");
	console.log(msg);
	usernameElement.innerHTML = msg.Author.name;
	contentElement.innerHTML = msg.Content.Content;


	usernameElement.append(lineBreak);
	parentElement.append(usernameElement);
	parentElement.append(contentElement);
	messageContainer.append(parentElement);
}
