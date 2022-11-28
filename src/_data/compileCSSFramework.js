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
	const sourceContent = ["src/**/*.njk", "src/**/*.html", "src/**/*.md", "src/**/*.liquid", "src/**/*.js"];

	fs.readFile(sourceCSS, (err, css) => {
		postCSS([
			require("autoprefixer"),
			// Purge CSS will scan through and remove the styles
			// that aren't in your project
			purgeCSS({
				content: sourceContent,
				variables: true,
				keyframes: true,
				transitions: true,
			}),
		])
			.process(css, {
				from: sourceCSS,
				to: destinationCSS,
			})
			.then((result) => {
				// Combine with Reboot - must have copy in folder because node_modules are .gitignore
				let newCSS = result.css;
				let rebootCSS = fs.readFileSync("src/assets/css/bootstrap-reboot.min.css");
				let allCSS = rebootCSS + newCSS;

				// Minify
				let compiledCSS = new MinifyCSS().minify(allCSS)["styles"];

				// Save
				fs.writeFileSync(destinationCSS, compiledCSS, { encoding: "utf8" });
			})
			.catch((error) => {
				console.log(error);
			});
	});
};
