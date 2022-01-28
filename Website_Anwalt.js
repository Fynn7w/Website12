function clicked_contact(){
	window.scrollBy({ top: 300, left: 0, behavior: "smooth" });
}

function clicked_info(){
	var h1Elements = document.getElementsByTagName("h4");

	for(var i = 0; i < h1Elements.length; i++) {
   		h1Elements[i].style.color = "#b8485d";
}
}

function clicked_Home(){
	alert ('Sie befinden sich auf "Home" ')

}