//get required items from DOM
const imageSet = document.querySelectorAll(".grid-img");
const viewMore = document.getElementById("viewMore");
const loadingDots = document.getElementById("loadingDots");

//initialize variables
let dotInterval = "",
	dotCount = 0,
	counter = 0,
	imageArray = [],
	imageObj = {},
	html = "";

//set up jribbble, return required data
jribbble.setToken(
	"9abe753478a2afe894caf7454fb22d9008891cc96538a0c1b47aeeb7b68efe0d"
);

jribbble.shots(function (shotsArray) {
	//get src & alt text for each
	shotsArray.forEach((shot) => {
		imageObj = {
			src: shot.images.normal,
			alt: shot.title,
		};
		imageArray.push(imageObj);
	});
	setImages();
});

jribbble.user(function (userObj) {
	return (html = `View more posts from <a href="${userObj.html_url}" target="_blank" class="text-white">${userObj.login} on dribbble.</a>`);
});

//add dribbble images to DOM once ready, add event listener if loaded
function setImages() {
	for (i = 0; i < imageSet.length; i++) {
		imageSet[i].src = imageArray[i].src;
		imageSet[i].alt = imageArray[i].alt;

		//add event listener to add classes once loaded
		imageSet[i].addEventListener(
			"load",
			loaded(imageSet[i], imageSet[i].parentNode)
		);
	}
}

//display loading indicator until images ready
do {
	loadingFunction();
} while (!imageSet[11].complete);

//add "..." while waiting for load
function loadingFunction() {
	dotInterval = setInterval(function () {
		loadingDots.innerText = ".".repeat(dotCount);
		let action;
		counter++;
		if (counter > 0 && counter < 4) {
			action = dotCount++;
		} else if (counter >= 4 && counter < 6) {
			action = dotCount--;
		} else if (counter === 6) {
			counter = 0;
			dotCount = 0;
		}
		action;
	}, 1000);
}

//apply to images onLoad - added via setImages()
function loaded(image, div) {
	//add appropriate classes to display div and images
	div.classList.add("transparent");
	image.classList.add("full-opacity");

	//remove eventListener for load
	image.removeEventListener("load", loaded);

	//check if last image, call postLoad() events
	if (image === imageSet[11]) {
		//stop loading indicators
		clearInterval(dotInterval);
		dotCount = 0;
		counter = 0;
		loadingDots.innerText = "";
		loadingDots.remove();

		//once css transition starts to reveal image, update loading text
		image.addEventListener("transitionstart", postLoad(image));
	}
}

//update loading text
function postLoad(image) {
	image.removeEventListener("transitionstart", postLoad);

	//remove text slowly via css transition
	viewMore.classList.add("lettersOut");

	//once loading text css transition fires,
	viewMore.addEventListener("animationend", (e) => {
		//remove && replace class, add new text
		viewMore.classList.remove("lettersOut");
		viewMore.classList.add("lettersIn");
		viewMore.innerHTML = html;
		viewMore.removeEventListener("animationend", e);
	});
}
