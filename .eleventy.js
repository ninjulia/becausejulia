module.exports = function (eleventyConfig) {
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