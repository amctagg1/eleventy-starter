# eleventy-starter
Starter for a static site using eleventy and sass, and deploying to Netlify via github integration

## Get Started
Locally install eleventy and its dependencies (requires Node and npm)

    npm install @11ty/eleventy

## Eleventy
Eleventy generates a static site from any templates found in the directory.

Eleventy is installed to the local directory.   
https://www.11ty.dev/docs/getting-started/

    // build eleventy  
    npx @11ty/eleventy
    
    // build eleventy and start up a local server  
    npx @11ty/eleventy --serve



## Eleventy Config
Eleventy compiles to static HTML in a folder called _site   
The _site folder and eleventy's npm dependencies are excluded from git tracking using the .gitignore file    
CSS and images are configured to auto-copy into the _site folder in eleventy.js


## Netlify Config
When you create a pull request, Netlify will auto-generate a deploy preview URL.  
When you merge to master, a production deployment is kicked off automatically.   
Netlify.toml configures the Netilfy build process to compile eleventy.
