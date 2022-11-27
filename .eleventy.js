//Import fast-glob package to import images to showcase module
const fg = require("fast-glob");

//Run search for showcase images
const showcaseImages = fg.sync([".editorconfig", "**/assets/img/design/*-s*"], { ignore: ["**/src/**"] });

module.exports = function (eleventyConfig) {
	//randomize arrays
	function shuffle(array) {
		let currentIndex = array.length,
			randomIndex;

		// While there remain elements to shuffle.
		while (currentIndex != 0) {
			// Pick a remaining element.
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;

			// And swap it with the current element.
			[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
		}

		return array;
	}

	//filter based on page url
	eleventyConfig.addFilter("filterImg", (showcase, currentUrl) => {
		let match = [];
		match.push(currentUrl.replace("/design/", "").replace("/", ""));

		//filter images to match page name
		const list = showcase.filter((item) => item.match(match));

		//double list
		let pubList = list.concat(list);

		//randomize and return (todo)
		shuffle(pubList);
		return pubList;
	});

	//create showcase collection
	eleventyConfig.addCollection("showcase", function (collection) {
		let showcaseImagesUrl = [];
		for (i = 0; i < showcaseImages.length; i++) {
			showcaseImagesUrl.push(showcaseImages[i].replace("public", "../.."));
		}
		return showcaseImagesUrl;
	});

	//copy assets folder
	eleventyConfig.addPassthroughCopy("./src/assets");

	//open new browser on run
	eleventyConfig.setBrowserSyncConfig({
		open: true,
	});

	//output to public folder
	return {
		dir: {
			input: "src",
			output: "public",
		},
	};
};
