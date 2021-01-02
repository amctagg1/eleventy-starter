# eleventy-starter
Starter for a static site using eleventy and sass, and deploying to Netlify via github integration

## Get Started
Prerequisites: Node and npm.  
Dev dependencies to be installed: Eleventy, Sass.

1. Clone the repository  
2. cd into the project directory  
3. Install the dev dependencies listed in the package.json file into a node_modules folder
        
        npm install

4. Run the start script from package.json, which does two things in parallel:  
- Watches for scss changes and compiles to css
- Watches for project changes, builds eleventy and auto-refreshes a local server  

        npm run start
    
5. Other scripts can be found in package.json, should you need them.  

        npm run scss 
        // compiles scss to css on demand
        
        npm build
        // cleans out the _site folder and re-builds eleventy on demand
        

## Eleventy
Eleventy builds a static HTML site  
From: Any templates found in the directory  
To: A folder called _site  
https://www.11ty.dev/docs/getting-started/
    
    

#### Eleventy Config  
.gitignore  
The _site folder and eleventy's npm dependencies are excluded from git tracking  
.eleventy.js
CSS and images are configured to auto-copy into the _site folder during eleventy builds


## Netlify
In Nelitfy, choose New Site From Git and link to the associated github repo.
When you create a pull request in github, Netlify will auto-generate a deploy preview URL for testing. 
Now when you merger to master, a production deployment is kicked off automatically. 

#### Netlify Config
Netlify.toml   
Configures the Netilfy build process to compile an eleventy site using the eleventy build command.
