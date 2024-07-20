const { minify } = require("terser");
const htmlmin = require("html-minifier");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const markdownIt = require("markdown-it");
const pluginRss = require("@11ty/eleventy-plugin-rss");

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
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(markdownIt);
  // Smart quotes
  let markdownItOptions = {
    html: true,
    typographer: true
  };
  eleventyConfig.setLibrary("md", markdownIt(markdownItOptions));
  // Sort collection by name
  eleventyConfig.addFilter('sortCollection', function(collection) {
    return collection.sort(function(a, b) {
      const textA = a.data.meta_title.toUpperCase();
      const textB = b.data.meta_title.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
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