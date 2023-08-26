//Helper packages
require('dotenv').config();
const htmlmin = require('html-minifier');
const fg = require('fast-glob');
const markdownIt = require('markdown-it');
const Image = require('@11ty/eleventy-img');

//Run search for showcase images
const showcaseImages = fg.sync(['.editorconfig', '**/assets/img/design/*-s*'], {
	ignore: ['**/src/**'],
});

module.exports = function (eleventyConfig) {
	//11ty native image plugin
	eleventyConfig.addShortcode('image', async function (src, alt, sizes, classes) {
		if (alt === undefined) {
			// You bet we throw an error on missing alt (alt="" works okay)
			throw new Error(`Missing \`alt\` on responsive image from: ${src}`);
		}

		let metadata = await Image(src, {
			widths: [656, 829, 992, 1178, 1312, 1418, 1658],
			formats: ['webp'],
			urlPath: '../../assets/img/design/',
			outputDir: 'public/assets/img/design/',
			sharpWebpOptions: { lossless: true, effort: 6 },
		});

		let lowsrc = metadata.webp[0];
		let highsrc = metadata.webp[metadata.webp.length - 1];
		// let highsrc = metadata.webp[2];

		return `<picture>
			${Object.values(metadata)
				.map((imageFormat) => {
					return `  <source type="${imageFormat[0].sourceType}" srcset="${imageFormat
						.map((entry) => entry.srcset)
						.join(', ')}" sizes="${sizes}">`;
				})
				.join('\n')}
				<img
					class="${classes}"
					src="${lowsrc.url}"
					width="${highsrc.width}"
					height="${highsrc.height}"
					alt="${alt}">
			</picture>`;
	});

	//compile scss
	eleventyConfig.addWatchTarget('./scss/');

	//exclude components.njk from PROD
	if (process.env.ELEVENTY_ENV === 'prod') {
		eleventyConfig.ignores.add('**/src/components.njk');
	}

	//shuffle arrays via CSS-tricks.com
	function myShuffle(o) {
		const returnArray = [];
		for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		//shuffle sometimes returns duplicates, this re-sorts
		for (a = 0; a < o.length; a++) {
			if (a === 0 || o[a] !== o[a - 1]) {
				returnArray.push(o[a]);
			} else {
				returnArray.unshift(o[a]);
			}
		}
		return returnArray;
	}

	//filter showcase collection based on page url
	eleventyConfig.addFilter('filterImg', (showcase, currentUrl) => {
		let pageName = [];

		//first remove /design and trailing /
		pageName.push(currentUrl.replace('/design/', '').replace('/', ''));

		//filter images to match page name
		const imgList = showcase.filter((item) => item.match(`${pageName}-s`));

		//randomize and return (double if under 12)
		let showcaseShuffle = imgList.concat(imgList);
		return myShuffle(showcaseShuffle);
	});

	//create showcase collection
	eleventyConfig.addCollection('showcase', function (collection) {
		let showcaseImagesUrl = [];
		for (i = 0; i < showcaseImages.length; i++) {
			showcaseImagesUrl.push(showcaseImages[i].replace('public', '../..'));
		}
		return showcaseImagesUrl;
	});

	// markdown settings
	let markdownLibrary = markdownIt({
		html: true,
	});
	eleventyConfig.setLibrary('md', markdownLibrary);

	//minify HTML Output - from 11ty docs/config/#transforms
	eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
		if (this.outputPath && this.outputPath.endsWith('.html')) {
			let minified = htmlmin.minify(content, {
				useShortDoctype: true,
				removeComments: true,
				collapseWhitespace: true,
			});
			return minified;
		}

		return content;
	});

	//copy assets folder, filter out /design/ PNGs
	eleventyConfig.addPassthroughCopy('./src/assets', { filter: (path) => path.endsWith('-h1.png') == false });

	//open new browser on run
	eleventyConfig.setBrowserSyncConfig({
		open: true,
		//set to false to disable
		//snippet: true,
	});

	//output to public folder
	return {
		dir: {
			input: 'src',
			output: 'public',
		},
	};
};
