/* Jribbble 3.0.0 | Mon Apr  9 11:57:04 EDT 2018 - Copyright (c) 2018, Tyler Gaw me@tylergaw.com - Released under the ISC-LICENSE @license */
var jribbble = (function () {
	var a = null,
		t = function (e, t) {
			var r = "https://api.dribbble.com/v2/" + e,
				s = new XMLHttpRequest();
			s.addEventListener("load", function () {
				if (t && "function" == typeof t) {
					var r = {};
					if (this.status < 400)
						try {
							r = JSON.parse(this.responseText);
						} catch (e) {
							r = {
								error: "There was an error parsing the server response as JSON",
							};
						}
					else
						r = {
							error:
								"There was an error making the request to api.dribble.com.",
							status: this.status,
						};
					t(r);
				}
			}),
				s.open("GET", r),
				s.setRequestHeader("Authorization", "Bearer " + a),
				s.send();
		},
		s = function () {
			for (
				var e = [].slice.call(arguments),
					r = null,
					t = {},
					s = function () {},
					n = 0;
				n < e.length;
				n += 1
			)
				switch (typeof e[n]) {
					case "string":
					case "number":
						r = e[n];
						break;
					case "object":
						t = e[n];
						break;
					case "function":
						s = e[n];
				}
			if ((t.token && (a = t.token), !a))
				throw new Error(
					"jribbble needs a valid access token. You can either include this as an option: jribbble.shots({token: '1234'}) or with jribbble.setToken('1234')"
				);
			var o = ["page", "per_page"]
				.map(function (e) {
					return t[e] ? e + "=" + t[e] : null;
				})
				.filter(function (e) {
					return e;
				})
				.join("&");
			return { resourceId: r, callback: s, query: o ? "?" + o : "" };
		},
		e = function (r) {
			return function () {
				var e = s.apply(null, arguments);
				t(r + e.query, e.callback);
			};
		},
		r = {
			setToken: function (e) {
				if (!e)
					throw new Error("jribbble.setToken() expects a valid access_token");
				a = e;
			},
			shots: function () {
				var e = s.apply(null, arguments),
					r = e.resourceId ? "shots/" + e.resourceId : "user/shots";
				t(r + e.query, e.callback);
			},
			user: e("user"),
			projects: e("user/projects"),
			likes: e("user/likes"),
			popular: e("popular_shots"),
		};
	try {
		module && ((r._createApiMethod = e), (r._processArguments = s));
	} catch (e) {}
	return r;
})();
window && (window.jribbble = jribbble);
try {
	module && (module.exports = jribbble);
} catch (e) {}
