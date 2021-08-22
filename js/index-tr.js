window.onload = () => {
	document.getElementById("lang").style = "opacity: 100%;"
};

function langRU() {
	/*translations itself*/
	document.getElementById("main").innerHTML = "Привет!"
	document.getElementById("menu1").innerHTML = "Мои творения"
	document.getElementById("menu2").innerHTML = "Обо мне"
	document.getElementById("menu3").innerHTML = "Мой блог"
	/*changing country flag and onclick function*/
	document.getElementById("lang").src = "svg/uk.svg"
	document.getElementById("lang").onclick = langEN
}
function langEN() {
	/*translations itself*/
	document.getElementById("main").innerHTML = "Hello!"
	document.getElementById("menu1").innerHTML = "My creations"
	document.getElementById("menu2").innerHTML = "About me"
	document.getElementById("menu3").innerHTML = "My blog"
	/*changing country flag and onclick function*/
	document.getElementById("lang").src = "svg/ru.svg"
	document.getElementById("lang").onclick = langRU
}
