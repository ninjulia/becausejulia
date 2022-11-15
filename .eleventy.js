module.exports = function (eleventyConfig) {
    // Watch CSS files for changes
    //eleventyConfig.setBrowserSyncConfig({ files: './src/assets/css/*.css' });

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