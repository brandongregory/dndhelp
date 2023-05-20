const { minify } = require("terser");
const htmlmin = require("html-minifier");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
  // Global Data
  eleventyConfig.addGlobalData("siteName", "Kobold Think Tank");
  eleventyConfig.addGlobalData("siteUrl", "https://koboldthinktank.site");
  eleventyConfig.addGlobalData("siteDescription", "Kobold Think Tank is a resource for tabletop RPGs, especially Dungeons & Dragons 5e. We aim to provide thorough but easy to understand articles on characters, concepts, and general play.");
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
  // Plugins
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  // Collections
  eleventyConfig.addCollection("builds", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/5e-build-guides/**/*.md");
  });
  eleventyConfig.addCollection("character-creation", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/5e-character-creation/**/*.md");
  });
  eleventyConfig.addCollection("homebrew", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/5e-homebrew/**/*.md");
  });
  eleventyConfig.addCollection("pop-culture", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/dnd-in-pop-culture/**/*.md");
  });
  // Get related posts
  eleventyConfig.addFilter('randomSiblings', function (collection, page) {
      const siblings = collection;
      const randomSiblings = [];
      const randomNumbers = [];
      const siblingsLength = siblings.length;
      const maxLength = 3;
      for (let i = 0; i < siblingsLength; i++) {
        if (siblings[i].page.fileSlug == page) randomNumbers.push(i);
      }
      while (siblingsLength > 0 && randomSiblings.length < maxLength && randomSiblings.length < siblingsLength) {
        const randomNumber = Math.floor(Math.random() * siblings.length);
        if (!randomNumbers.includes(randomNumber)) {
            const randomSibling = siblings[randomNumber] || null;
            randomSiblings.push(randomSibling);
            randomNumbers.push(randomNumber);
        }
      }
      return randomSiblings;
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