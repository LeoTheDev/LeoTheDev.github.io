

var onlineUsersElement = document.getElementById("UsersContainer");
window.Users.forEach(cUser =>
{
	var ParrentDiv = document.createElement("div");
	var ProfileP = document.createElement("img");
	ProfileP.src = cUser.PPUrl;
	ProfileP.style.boxShadow = `0px 0px 10px black`;
	var Username = document.createElement("text");
	Username.innerHTML = cUser.name;
	ParrentDiv.classList.toggle("OnlineUser");
	ProfileP.classList.toggle("UserProfilePicture");
	Username.classList.toggle("UserUsername");
	ParrentDiv.append(ProfileP);
	ParrentDiv.append(Username);
	onlineUsersElement.append(ParrentDiv);
}
)