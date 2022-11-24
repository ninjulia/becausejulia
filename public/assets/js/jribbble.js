//////////////////////////////////Latest Work from Dribbble
jribbble.setToken("9abe753478a2afe894caf7454fb22d9008891cc96538a0c1b47aeeb7b68efe0d");

//
//procure shots - dribbble returns 12
//
jribbble.shots(function (shotsArray) {
	//where to put the shots
	const gridInner = document.querySelector("#latest-grid");
	const imageArray = [];

	// wrap in required html
	shotsArray.forEach((shot) => {
		const slideImage = `<div class="grid-item"><img src="${shot.images.normal}" class="img-fluid rounded-1" alt="${shot.title}"></div>`;

		//push to array
		imageArray.push(slideImage);
	});

	//add array of items to grid
	gridInner.innerHTML = imageArray.join("");
});

//
//view more shots
//
jribbble.user(function (userObj) {
	const gridSubText = `<p class="text-end text-white mb-0 pb-0">View more posts from <a href="${userObj.html_url}" target="_blank" class="text-white">${userObj.login} on dribbble.</a></p>`;
	document.getElementById("viewMore").innerHTML = gridSubText;
});
