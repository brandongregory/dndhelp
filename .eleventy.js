const { minify } = require("terser");
const htmlmin = require("html-minifier");

module.exports = function(eleventyConfig) {
  // Minify HTML
  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    // Eleventy 1.0+: use this.inputPath and this.outputPath instead
    if( outputPath && outputPath.endsWith(".html") ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }

    return content;
  });
  // Return your Object options:
  return {
    dir: {
      includes: "_includes",
      input: "src",
      layouts: "_layouts",
      output: "webroot"
    }
  }
};
