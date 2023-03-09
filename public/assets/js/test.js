//////////////////////////////////Latest Work from Dribbble

let imgs = document.querySelectorAll("img");
let before = document.querySelectorAll(".grid-item");

for (eachDiv of before) {
	let image = eachDiv.querySelector("img");
	image.addEventListener("load", testImg(image, eachDiv));
	//console.log(image);
}

function testImg(image, div) {
	div.classList.add("transparent");
	image.classList.add("full-opacity");
	console.log("loaded");
}
