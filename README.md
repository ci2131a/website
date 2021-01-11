# Personal Website Repository

This repository holds all the code for the development version of my personal website https://ci2131a.github.io/website/. The final product of HTML and CSS is copied to the live version. There is probably a better way to do it but this works for me. An initial exercise was done with JT using Vue so continues the use of that framework. The guide found at https://blog.logrocket.com/build-deploy-vue-js-app-github-pages/ was consulted for confirmation that the setup was completed successfully. Josh was nice enough to assist with formatting issues as well as when things hit the fan. 



## Modification Process

In order to actually make and observe changes on the live GitHub pages site use the following steps:

1. Make all changes in the relevant files locally in respective directory.
2. Push relevant changes to Master branch of repository.
3. Run `npm run deploy` on Bash in directory. 
4. Launch GitHub pages to see changes. 



## Project setup
The following code is run in working directory to install necessary dependencies and modules.
```
npm install
```

### Compiles and hot-reloads for development
This line will build using localhost and refresh to reflect any changes. 
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
