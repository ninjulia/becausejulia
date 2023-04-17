let linkText = `More from BecauseJulia on dribbble.`;
const linkLetters = linkText.split("");
let i;
let timer;
let imageArray = [],
	imageObj = {};

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
		//remove text
		textOut();
	}
}

function textOut() {
	clearInterval(timer);
	setTimeout(() => {
		viewMore.innerText = viewMore.innerText.substring(
			0,
			viewMore.innerText.length - 1
		);
		if (viewMore.innerText.length > 0) {
			textOut();
		} else {
			clearTimeout(this);
			setText();
		}
	}, 50);
}

//add text via timer
function textIn() {
	clearInterval(timer);
	i = 0;
	timer = setInterval(() => {
		dribbbleLink.textContent += linkLetters[i];
		i++;
		if (i === linkLetters.length) {
			clearInterval(timer);
		}
	}, 50);
}

function setText() {
	const myLink = document.createElement("a");
	myLink.href = `https://dribbble.com/becausejulia`;
	myLink.classList.add("text-white");
	myLink.setAttribute("id", "dribbbleLink");
	viewMore.appendChild(myLink);
	textIn();
}
