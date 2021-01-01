# eleventy-starter
Starter for a static site using eleventy and sass, and deploying to Netlify via github integration

## Eleventy
Eleventy is installed to the local directory.   
https://www.11ty.dev/docs/getting-started/

  // build eleventy  
  npx @11ty/eleventy
  
  // build eleventy and start up a local server  
  npx @11ty/eleventy --serve

## Eleventy Config
Any templates found by eleventy are compiled to static HTML in a _site folder.  
CSS and images are configured to auto-copy into the _site folder in eleventy.js


## Netlify Config
When you create a pull request, Netlify will auto-generate a deploy preview URL.  
When you merge to master, a production deployment is kicked off automatically.   
Netlify.toml configures the Netilfy build process to compile eleventy.
