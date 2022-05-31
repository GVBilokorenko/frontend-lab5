let state1 = 0;
let state2 = 0;

function clickEl1(element) {
	if (state1 == 0) {
		document.getElementById(element).style.backgroundColor = "black";
		document.getElementById(element).style.color = "white";
		state1 = 1;
	} else {
		document.getElementById(element).style.backgroundColor = "white";
		document.getElementById(element).style.color = "black";
		state1 = 0;
	}
}

function clickEl2(element) {
	element = "." + element;
	if (state2 == 0) {
		document.querySelector(element).style.backgroundColor = "black";
		document.querySelector(element).style.color = "white";
		state2 = 1;
	} else {
		document.querySelector(element).style.backgroundColor = "white";
		document.querySelector(element).style.color = "black";
		state2 = 0;
	}
}

let size = 200;

function editPicture(element, action) {
	if (action == "add") {
		document.getElementById(element).innerHTML =
			'<img height="200" id="img" src="https://dorogovkaz.com/images/odessa/odessa_photo7.jpg" alt="Одеса" />';
	} else if (action == "bigger") {
		size += 10;
		document.getElementById("img").style.height = size + "px";
	} else if (action == "smaller") {
		size -= 10;
		document.getElementById("img").style.height = size + "px";
	} else {
		document.getElementById(element).innerHTML = "";
	}
}
