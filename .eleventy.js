module.exports = function (eleventyConfig) {
    // Configuration for the eleventy build process
    // https://www.11ty.dev/docs/config/
     
    // Pass through copy `css/` to `_site/css`
    eleventyConfig.addPassthroughCopy("css");
  
    // Pass through copy `images/` to `_site/images`
    eleventyConfig.addPassthroughCopy("images");

    return {
        dir: {
          // Look for views in this directory (rather than the default of root)
          input: "views"

          
          // data is views/_data
          // includes and layouts is views/_includes
          //output default is _site
        }
      };
};