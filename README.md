# eleventy-starter
Starter for a static site using eleventy and sass, and deploying to Netlify via github integration

## Get Started
Requires: Node and npm.

Locally install eleventy and its dependencies to a node_modules folder.

    npm install @11ty/eleventy
    
Run your first eleventy build.

    npx @11ty/eleventy

## Eleventy
Eleventy builds a static HTML site  
From: Any templates found in the directory  
To: A folder called _site  
https://www.11ty.dev/docs/getting-started/
    
    // build eleventy and start up a local server  
    npx @11ty/eleventy --serve

## Eleventy Config
  
The _site folder and eleventy's npm dependencies are excluded from git tracking using the .gitignore file    
CSS and images are configured to auto-copy into the _site folder in eleventy.js


## Netlify Config
When you create a pull request, Netlify will auto-generate a deploy preview URL.  
When you merge to master, a production deployment is kicked off automatically.   
Netlify.toml configures the Netilfy build process to compile eleventy.
