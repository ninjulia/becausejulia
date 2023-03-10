//////////////////////////////////Latest Work from Dribbble
jribbble.setToken(
	"9abe753478a2afe894caf7454fb22d9008891cc96538a0c1b47aeeb7b68efe0d"
);

//
//procure shots - dribbble returns 12
//
jribbble.shots(function (shotsArray) {
	//where to put the shots
	const before = document.querySelectorAll(".grid-item");
	imageArray = [];

	//set 1 image in each grid-item

	shotsArray.forEach((shot) => {
		const dribbbleImage = `<img src="${shot.images.normal}" class="img-fluid rounded-1" width="400" height="300" alt="${shot.title}" loading="lazy" />`;
		imageArray.push(dribbbleImage);
	});
	for (i = 0; i < before.length; i++) {
		//add image to .grid-item
		before[i].innerHTML = imageArray[i];

		//listen for image load
		const image = before[i].querySelector("img");
		if (image) {
			image.addEventListener("load", testImg(image, before[i]));
		}
	}
});

//
//view more shots
//
jribbble.user(function (userObj) {
	const gridSubText = `<p class="text-white mb-0 pb-0">View more posts from <a href="${userObj.html_url}" target="_blank" class="text-white">${userObj.login} on dribbble.</a></p>`;
	document.getElementById("viewMore").innerHTML = gridSubText;
});

function testImg(image, div) {
	div.classList.add("transparent");
	image.classList.add("full-opacity");
	image.removeEventListener("load", testImg);
}
