//Helper packages
require("dotenv").config();
const htmlmin = require("html-minifier");
const fg = require("fast-glob");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

//Run search for showcase images
const showcaseImages = fg.sync([".editorconfig", "**/assets/img/design/*-s*"], {
	ignore: ["**/src/**"],
});

module.exports = function (eleventyConfig) {
	//compile scss
	eleventyConfig.addWatchTarget("./scss/");

	//exclude components.njk from PROD
	if (process.env.ELEVENTY_ENV === "prod") {
		eleventyConfig.ignores.add("**/src/components.njk");
	}

	//shuffle arrays via CSS-tricks.com
	function myShuffle(o) {
		for (
			var j, x, i = o.length;
			i;
			j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
		);
		return o;
	}

	//filter based on page url
	eleventyConfig.addFilter("filterImg", (showcase, currentUrl) => {
		let pageName = [];

		//first remove /design and trailing /
		pageName.push(currentUrl.replace("/design/", "").replace("/", ""));

		//filter images to match page name
		const imgList = showcase.filter((item) => item.match(`${pageName}-s`));

		//randomize and return
		myShuffle(imgList);

		//double list if under 12
		let showcaseShuffle = imgList.concat(imgList);

		return showcaseShuffle;
	});

	//create showcase collection
	eleventyConfig.addCollection("showcase", function (collection) {
		let showcaseImagesUrl = [];
		for (i = 0; i < showcaseImages.length; i++) {
			showcaseImagesUrl.push(showcaseImages[i].replace("public", "../.."));
		}
		return showcaseImagesUrl;
	});

	// markdown settings
	let markdownLibrary = markdownIt({
		html: true,
	});
	eleventyConfig.setLibrary("md", markdownLibrary);

	//minify HTML Output - from 11ty docs/config/#transforms
	eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
		if (this.outputPath && this.outputPath.endsWith(".html")) {
			let minified = htmlmin.minify(content, {
				useShortDoctype: true,
				removeComments: true,
				collapseWhitespace: true,
			});
			return minified;
		}

		return content;
	});

	//copy assets folder
	eleventyConfig.addPassthroughCopy("./src/assets");

	//open new browser on run
	eleventyConfig.setBrowserSyncConfig({
		open: true,
		//set to false to disable
		//snippet: false,
	});

	//output to public folder
	return {
		dir: {
			input: "src",
			output: "public",
		},
	};
};
