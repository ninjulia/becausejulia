//simulate loading
let loadCounter = 1;
let testInterval = setTimeout(function () {
	put();
}, 5000);

// functions to handle display while loading
const loadingDots = document.getElementById("loadingDots");

dotCount = 0;
counter = 0;
let interval = setInterval(function () {
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

function loaded() {
	clearInterval(interval);
	dotCount = 0;
	counter = 0;
	loadingDots.innerText = "";
	loadingDots.remove();
}

//remove styling once images loaded
function testImg(image, div) {
	div.classList.add("transparent");
	image.classList.add("full-opacity");
	image.removeEventListener("load", testImg);
}

//////////////////////////////////Jribbble functionality
jribbble.setToken(
	"9abe753478a2afe894caf7454fb22d9008891cc96538a0c1b47aeeb7b68efe0d"
);

//
//procure shots - dribbble returns 12
//
function put() {
	clearInterval(testInterval);

	jribbble.shots(function (shotsArray) {
		//where to put the shots
		const holder = document.querySelectorAll(".grid-item");
		const imageSet = document.querySelectorAll(".grid-img");
		imageArray = [];

		//get src & alt text for each
		shotsArray.forEach((shot) => {
			const imageObj = {
				src: shot.images.normal,
				alt: shot.title,
			};
			imageArray.push(imageObj);
		});

		for (i = 0; i < imageSet.length; i++) {
			//add image essentials to DOM
			imageSet[i].src = imageArray[i].src;
			imageSet[i].alt = imageArray[i].alt;

			//listen for image load
			imageSet[i].addEventListener("load", testImg(imageSet[i], holder[i]));
		}

		jribbble.user(function (userObj) {
			//set as innerHTML after everything has loaded
			postLoad(
				`View more posts from <a href="${userObj.html_url}" target="_blank" class="text-white">${userObj.login} on dribbble.</a>`
			);
		});
	});
}

function postLoad(html) {
	const viewMore = document.getElementById("viewMore");
	let str = viewMore.innerText;

	loaded();
	//clear "loading" text over .5 * SCSS transition timing to loaded state
	const lettersOut = setInterval(() => {
		if (str.length > 1) {
			str = str.substring(0, str.length - 1);
			viewMore.innerText = str;
		} else if (str.length === 1) {
			//keep viewMore from collapsing, but show nothing
			viewMore.innerHTML = `&nbsp`;
			str = "";
			clearInterval(lettersOut);

			//add transition, set text
			viewMore.classList.add("lettersIn");
			viewMore.innerHTML = html;
		}
	}, (2500 / 46) * 2);
}
