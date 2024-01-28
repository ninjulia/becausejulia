// for Dribbble API v2 https://developer.dribbble.com/v2/
// help from https://www.mikestreety.co.uk/blog/creating-an-11ty-collection-from-json-api/
// NOTE: this is not set up to cache on PROD & that's ok

const EleventyFetch = require('@11ty/eleventy-fetch');

module.exports = async function () {
	try {
		let url =
			'https://api.dribbble.com/v2/user/shots?access_token=bdfc67cdf98bccfcf19857be8eeb29a8b19147773b0294c74e06731a41880903';

		const response = await EleventyFetch(url, {
			duration: '1d',
			type: 'json',
			fetchOptions: {
				method: 'GET',
			},
		});

		let shots = response.map((shot) => {
			return {
				id: shot.id,
				title: shot.title,
				desc: shot.description,
				url: shot.html_url,
				images: {
					normal: shot.images.normal,
					two_x: shot.images.two_x,
					four_x: shot.images.four_x,
				},
			};
		});

		return shots;
	} catch (e) {
		//if it fails, it fails
		return;
		//console.error(e);
	}
};
