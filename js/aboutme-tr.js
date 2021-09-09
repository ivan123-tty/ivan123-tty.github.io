window.onload = () => {
	document.getElementById("lang").style = "opacity: 100%;"
};

function langRU() {
	/*translations itself*/
	document.getElementById("main1").innerHTML = "Привет!"
	document.getElementById("main2").innerHTML = "Я ivan123,<br> подросток интересующийся технологиями.<br> Живу в России."
	document.getElementById("main5").innerHTML = "Моя электронная почта:<br>ivan123another@gmail.com"
	document.getElementById("main6").innerHTML = "Дополнительные аккаунты"
	/*changing country flag and onclick function*/
	document.getElementById("lang").src = "svg/uk.svg"
	document.getElementById("lang").onclick = langEN;
}
function langEN() {
	/*translations itself*/
	document.getElementById("main1").innerHTML = "Hello!"
	document.getElementById("main2").innerHTML = "I'm ivan123,<br> a teenager interested in tech.<br> Living in Russia."
	document.getElementById("main5").innerHTML = "My e-mail:<br>ivan123another@gmail.com"
	document.getElementById("main6").innerHTML = "Additional accounts"
	/*changing country flag and onclick function*/
	document.getElementById("lang").src = "svg/ru.svg"
	document.getElementById("lang").onclick = langRU;
}