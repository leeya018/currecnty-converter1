# currecnty-converter1
##  how to deploy the app using create-react-app

* create a github repo with the master branch 
* on package.json add :   
  "homepage": "https://{username}.github.io/{project-name}",
* add also 2 scripts:  
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
* npm install gh-pages -D   
  so You can use that 
* commit and push all data to the master
* run :   
npm install   
npm run deploy   -> this will create the gh-pages branch and push the build content to that branch   
* once the script approve that your app had deploed , just open the link in your homepage of the link in pages under setting on github   
!!pay attention - they are supposed to be the same