function modal() {
	var modal = document.getElementById("modalBg");
	var close = document.getElementById("close");
	modal.style.display = "block";

	window.onclick = function (event) {
		if (event.target == modal)
			modal.style.display = "none";
	}

	close.onclick = function () {
		modal.style.display = "none";
	}
}