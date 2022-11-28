//Import fast-glob package to import images to showcase module
const fg = require("fast-glob");

//Run search for showcase images
const showcaseImages = fg.sync([".editorconfig", "**/assets/img/design/*-s*"], { ignore: ["**/src/**"] });

module.exports = function (eleventyConfig) {
	//shuffle arrays via CSS-tricks.com
	function myShuffle(o) {
		for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		return o;
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
		myShuffle(pubList);
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
