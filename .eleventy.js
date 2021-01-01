module.exports = function (eleventyConfig) {
    // Configuration for the eleventy build process
    // https://www.11ty.dev/docs/config/
     
    // Pass through copy `css/` to `_site/css`
    eleventyConfig.addPassthroughCopy("css");
  
    // Pass through copy `images/` to `_site/images`
    eleventyConfig.addPassthroughCopy("images");
};