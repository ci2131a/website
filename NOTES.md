# Personal Website Repository Notes

This repository holds all the code for the development version of my personal website. The final product of HTML and CSS is copied to the live version. There is probably a better way to do it but this works for me. An initial exercise was done with JT using Vue so this continues the use of that framework. The guide found at [this blog](https://blog.logrocket.com/build-deploy-vue-js-app-github-pages/) was consulted for confirmation that the setup was completed successfully. Josh was nice enough to assist with formatting issues as well when things hit the fan. 

## Website Details

## Organization

The website is organized into two parts: a development version and the live version. This allows for any changes to be made without affecting the outward facing live version. Hopefully, this ensures the live version is always stable and unaffected by any erroneous modifications. When changes are ready to be pushed, the development repository needs to be built and copied to the live version.

### Development Version

1. Repository - https://github.com/ci2131a/website
2. Website - https://ci2131a.github.io/website

### Live Version

1. Repository - https://github.com/ci2131a/ci2131a.github.io
2. Website - https://ci2131a.github.io/ (https://charlesingulli.com)

## Modification Process

In order to actually make and observe changes on website, use the following steps:

### Development Version

1. Make all changes in the relevant files locally in respective directory.
2. Push relevant changes to the main branch of repository so they are saved.
3. Run the build script through the `npm run deploy` command in directory on Bash. 
4. Open the development version GitHub Pages website to see changes.

### Live Version

1. Open the GitHub pages branch in the development repository.
2. Download the pages repository locally and copy all items to the local version of the live repository.
3. Push changes to GitHub.

* Note: There is probably a way to merge the changes from the pages branch of the development repository to the main branch of the live repository. I should investigate this.

## Notes

Further reading for notes:
https://docs.npmjs.com/
https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
https://www.npmjs.com/package/gh-pages

One time I thought I changed the font size but it was just the page zoom that changed so take note of that. 

### Useful Git

Something that comes up frequently when I use Git Bash is that terminal screen that never seems to want to go away. Recently, it came up when I was trying to use `git revert` to go back to a previous commit after adding new commits locally. The new commits messed something up but I could not figure out where so I just reverted to a previous commit since the new ones had not been pushed and were sitting locally. Anyway, in this particular case it was <kbd>Esc</kbd><kbd>:</kbd><kbd>w</kbd><kbd>q</kbd><kbd>Enter</kbd> to save and exit the revert. To exit without saving, the keyboard combination of <kbd>Esc</kbd><kbd>:</kbd><kbd>q</kbd><kbd>!</kbd><kbd>Enter</kbd> will work. 

### Environment Setup

I will do this


### Domain Name

Hosting a website on GitHub Pages generally follows the following URL naming convention: `https://username.github.io/repositoryname` where `username` and `respositoryname` are replaced by an individual's respective information. The root directory for the Pages website is then the aforementioned URL. However, if the name of your repository is `username.github.io` then your Pages directory moves up a level to the `https://username.github.io` directory. It does not duplicate to be `https://username.github.io/username.github.io`. Does this make sense?


In my case the live version of the website is housed in the `https://ci2131a.github.io` directory while the development version is in the `https://ci2131a.github.io/website/` directory.


If you would like to change the domain name that GitHub chooses then you will have to look for another service to do so. Any Domain Name Service will do but some may come at a cost. I am using Google Domains. The process seems to be that you first acquire the domain name that you want to use then apply it to GitHub Pages under the custom domain field in repository settings. Next, set up some records in the domain service and the domain name change should be complete. An optional step would be to create a `CNAME` file so that subdomains will redirect to original domain. This is most notable for sites that do not have a `www.` prefix to the domain so that anyone using this prefix will be redirected to the correct domain. It is interesting how this works. This should be investigated more. 


Check out [this article](https://hossainkhan.medium.com/using-custom-domain-for-github-pages-86b303d3918a) for a quick example of changing your GitHub Pages domain name. Check out GitHub's documentation for changing a domain name [here](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).


### Path Issues

An issue arose which downed the live version of the website seemingly because of the development repository. For some reason, the development repository was hosting the development version of the site on GitHub pages and the live version website was pulling information from that directory. The development site was unable to be taken offline because GitHub was unable to delete the branch that was being hosted. Additionally, the public path of the development version being the GitHub host name followed by `/website/` was or was not that of the live version so was not or was conflicting with development version. Removing the public path resulted in blank website.


github will always publish a site with a gh-pages branch as well as a pages branch apparently. So the main live version is at the domain ci2131a.github.io. I accuired a different domain so that has been changed to charlesingulli.com. Since github hosts any branch named pages, the development repository is hosted as a page 


### Video Files

On the limoncello page, I placed a video file within the recipe to round out the page. Getting the video file to appear and render correctly was a little challenging. In addition to the issues of copying the video from DVD to digital (which I will touch on later), there was the issue of actually getting the video file to play with sound. For a time, I was using the `<video>` tag to source an `mp4` file and display it on the page. However, one of the files played without sound and another was too big to be pushed to GitHub. Git had this [large file storage extension](https://git-lfs.github.com/) which I looked at and installed but did not use. 


Josh suggested just embedding a YouTube file onto the page as an easier solution. On my own, I came across this "[Vue YouTube Embed](https://www.npmjs.com/package/vue-youtube-embed)" component which I also installed but did not use. Ultimately, Josh just had me use an `iframe` to display the YouTube video. It works thus far and seems like the most reasonable method. The video sits on YouTube too so it can just be shared that way.

### Project setup (from npm Docs)
The following command is run in working directory to install or update necessary dependencies and modules. I think it looks at the `package.json` and/or `package-lock.json` file(s).
```
npm install
```

#### Compiles and hot-reloads for development
This line will build and continuously run the project using a localhost port. It will automatically refresh to reflect any changes made while running. Use the cancel command (<kbd>CTRL</kbd>+<kbd>C</kbd>) to stop the build from running.
```
npm run serve
```

#### Compiles and minifies for production
The following code will run the `gh-pages-deploy.js` file and compile the Vue app to a functioning HTML file. (I think)
```
npm run build
```

#### Lints and fixes files
```
npm run lint
```

#### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Revision History

| Date          | Version       | Description  |
| ------------- |:-------------:| -------------|
| 01/10/2021    | 1.0.0         | Initial version |
| 07/21/2021    | 1.0.1         | Fix render issue |
| 09/14/2021	| 1.0.1			| Update README |
| 12/26/2021	| 1.1.0			| Add new page |

* The version number needs to be changed in the `package.json` and `package-lock.json` files. This is where you can set the name shown in the tab of a web browser for the website.
