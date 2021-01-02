# eleventy-starter
Starter for a static site using eleventy and sass, and deploying to Netlify via github integration

## Get Started
Prerequisites: Node and npm.  
Dev dependencies to be installed: Eleventy, Sass, npm-run-all.

1. Clone the repository  
2. cd into the project directory  
3. Install the dev dependencies listed in the package.json file into a node_modules folder
        
        npm install

4. Run the start script from package.json, which both compiles and watches sass and builds/serves eleventy

        npm start
    

## Eleventy
Eleventy builds a static HTML site  
From: Any templates found in the directory  
To: A folder called _site  
https://www.11ty.dev/docs/getting-started/
    
    // build eleventy and start up a local server  
    npx @11ty/eleventy --serve

## Eleventy Config  
.gitignore  
The _site folder and eleventy's npm dependencies are excluded from git tracking  
.eleventy.js
CSS and images are configured to auto-copy into the _site folder during eleventy builds


## Netlify Config
In Nelitfy, choose New Site From Git and link to the associated github repo.
Now when you merger to master, a production deployment is kicked off automatically. 

Netlify.toml   
Configures the Netilfy build process to compile an eleventy site.

When you create a pull request in github, Netlify will auto-generate a deploy preview URL for testing. 
