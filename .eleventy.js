//* Helper packages
require("dotenv").config();
// TODO: replace html-minifier dep
// Removed 6.1.24: kangax html-minifier REDoS vulnerability - https://github.com/advisories/GHSA-pfq8-rq6v-vf5m
// const htmlmin = require("html-minifier");
const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
  //* DX Settings
  eleventyConfig.setQuietMode(true);
  eleventyConfig.watchIgnores.add("README.md");
  eleventyConfig.setServerOptions({
    watch: ["./accouterments/"],
  });

  //* compile scss
  eleventyConfig.addWatchTarget("./scss/");

  //* get current year && set years of experience
  //* from https://11ty.rocks/eleventyjs/dates/#year-shortcode
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  eleventyConfig.addShortcode(
    "myExp",
    () => `${new Date().getFullYear() - 2014}`
  );

  //* exclude components.njk from PROD
  if (process.env.ELEVENTY_ENV === "prod") {
    eleventyConfig.ignores.add("**/src/components.njk");
  }

  //* Filter Showcase Images by Page
  eleventyConfig.addFilter("filterImg", (showcase, currentUrl) => {
    let pageName = currentUrl.replace("/design/", "").replace("/", "");
    let imgList = showcase.filter((item) => item.match(`${pageName}-s`));

    //* grid is designed for 12 items, double and shuffle again if less
    if (imgList.length < 12) {
      imgList = imgList.concat(imgList).sort(() => {
        return 0.5 - Math.random();
      });
    }

    return imgList;
  });

  //* markdown settings
  let markdownLibrary = markdownIt({
    html: true,
  });
  eleventyConfig.setLibrary("md", markdownLibrary);

  //* minify HTML Output - from 11ty docs/config/#transforms
  // eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
  //   if (this.outputPath && this.outputPath.endsWith(".html")) {
  //     let minified = htmlmin.minify(content, {
  //       useShortDoctype: true,
  //       removeComments: true,
  //       collapseWhitespace: true,
  //     });
  //     return minified;
  //   }

  //   return content;
  // });

  //* copy assets folder, copy favicon and .toml file stuff to ./public/
  //TODO: filter out high-rez images once 11ty Image is running -- eleventyConfig.addPassthroughCopy('./src/assets', { filter: (path) => path.endsWith('-h1.png') == false });
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy({ "./accouterments": "./" });
  eleventyConfig.addPassthroughCopy({
    "./accouterments/previews": "./previews",
  });

  //* output to public folder
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
