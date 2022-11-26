//put in package.json
//"postcss:watch": "postcss ./src/assets/css/style.css --dir public --watch",

//cli to run
// npx postcss ./src/assets/css/style.css > ./public/assets/css/style.css

// cssnano.config.js
module.exports = {
	plugins: [
		require("cssnano")({
			preset: [
				"default",
				{
					discardComments: {
						removeAll: true,
					},
				},
			],
		}),
	],
};
