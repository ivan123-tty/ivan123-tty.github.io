window.onload = () => {
	document.getElementById("lang").style = "opacity: 100%; "
};

function langRU() {
	/*translations itself*/
	document.getElementById("creations").innerHTML = "Творения <br>ivan123";
	document.getElementById("menu1").innerHTML = "Обои, созданные мной.";
	document.getElementById("menu2").innerHTML = "Этот сайт";
	/*changing country flag and onclick function*/
	document.getElementById("lang").src = "svg/uk.svg";
	document.getElementById("lang").onclick = langEN;
}
function langEN() {
	/*translations itself*/
	document.getElementById("creations").innerHTML = "Creations <br>of ivan123";
	document.getElementById("menu1").innerHTML = "wallpapers, created by me.";
	document.getElementById("menu2").innerHTML = "this website";
	/*changing country flag and onclick function*/
	document.getElementById("lang").src = "svg/ru.svg";
	document.getElementById("lang").onclick = langRU;
}
