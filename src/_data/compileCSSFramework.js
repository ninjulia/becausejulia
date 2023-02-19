//following tutorial from https://dev.to/brewhousedigital/using-purgecss-with-bootstrap-and-eleventy-j7p

const fs = require("fs");
const MinifyCSS = require("clean-css");
const postCSS = require("postcss");
const purgeCSS = require("@fullhuman/postcss-purgecss");

module.exports = async function () {
	// You must create the folder structure first.
	// WriteFile does not create files if parent folders are missing
	if (!fs.existsSync("public")) {
		fs.mkdirSync("public");
	}
	if (!fs.existsSync("public/assets/css")) {
		fs.mkdirSync("public/assets/css");
	}

	// Create a custom, purged, version of css
	const sourceCSS = "src/assets/css/style.css";
	const destinationCSS = "public/assets/css/style.css";
	// Add in your file types here
	const sourceContent = [
		"src/**/*.njk",
		"src/**/*.html",
		"src/**/*.md",
		"src/**/*.liquid",
		"src/**/*.js",
	];

	//exclude components.njk from prod css
	if (process.env.ELEVENTY_ENV === "prod") {
		filterUnused = ["src/**/components.njk"];
	} else {
		filterUnused = [];
	}

	fs.readFile(sourceCSS, (err, css) => {
		postCSS([
			require("autoprefixer"),
			// Purge CSS will scan through and remove the styles that aren't in your project
			// skippedContentGlobs filter out components.njk on prod
			purgeCSS({
				content: sourceContent,
				skippedContentGlobs: filterUnused,
				variables: true,
				keyframes: true,
				transitions: true,
				safelist: [
					"text-bg-deep-purple",
					"text-bg-primary",
					"text-bg-deep-blue",
					"text-bg-mid-blue",
					"text-bg-cerulean",
					"text-bg-teal",
					"text-bg-green",
					"text-bg-light-green",
					"text-bg-lime",
					"text-bg-danger",
					"text-bg-info",
					"text-bg-light",
					"text-bg-deeper-purple",
					"btn-deep-purple",
					"btn-deep-blue",
					"btn-mid-blue",
					"btn-cerulean",
					"btn-teal",
					"btn-green",
					"btn-light-green",
					"btn-lime",
					"btn-brand-gradient",
				],
			}),
		])
			.process(css, {
				from: sourceCSS,
				to: destinationCSS,
			})
			.then((result) => {
				let newCSS = result.css;

				// Minify
				let compiledCSS = new MinifyCSS().minify(newCSS)["styles"];

				// Save
				fs.writeFileSync(destinationCSS, compiledCSS, { encoding: "utf8" });
			})
			.catch((error) => {
				console.log(error);
			});
	});
};
