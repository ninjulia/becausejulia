//* Shuffle Images for Design Pages Showcase Sections
const fg = require("fast-glob");

module.exports = async function () {
  //* Run search for showcase images
  const showcaseImages = fg.sync(["**/assets/img/design/*-s*"], {
    ignore: ["**/public/**"],
  });

  //TODO: Do I need this step with 11ty images?
  let showcaseImagesUrl = showcaseImages.map((image) =>
    image.replace("src", "../..")
  );

  //* Shuffle Arrays Method
  //* via https://css-tricks.com/snippets/javascript/shuffle-array/
  function myShuffle(o) {
    const returnArray = [];
    for (
      var j, x, i = o.length;
      i;
      j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
    );

    //* shuffle sometimes returns duplicates, this re-sorts
    for (a = 0; a < o.length; a++) {
      if (a === 0 || o[a] !== o[a - 1]) {
        returnArray.push(o[a]);
      } else {
        returnArray.unshift(o[a]);
      }
    }
    return returnArray;
  }

  //* Return Collection
  return myShuffle(showcaseImagesUrl);
};
