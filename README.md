# Personal Website Repository

This repository holds all the development files that are used in creating my personal website. The final product is then copied to the live version repository. There is probably a better way to do it but this works for me. An initial exercise was done with JT using Vue so this continues the use of that framework. The guide found at [this blog](https://blog.logrocket.com/build-deploy-vue-js-app-github-pages/) was consulted for confirmation that the setup was completed successfully. Josh was nice enough to assist with formatting issues as well as when things hit the fan. 

## Website Details

### Organization

The website is organized into two parts: a development version and the live version. This allows for any changes to be made without affecting the outward facing live version. Hopefully, this ensures the live version is always stable and unaffected by any erroneous modifications. When changes are ready to be pushed, the development repository needs to be built and copied to the live version.

#### Development Version

1. Repository - https://github.com/ci2131a/website
2. Website - https://ci2131a.github.io/website

#### Live Version

1. Repository - https://github.com/ci2131a/ci2131a.github.io
2. Website - https://ci2131a.github.io/ (https://charlesingulli.com)

### Modification Process

In order to actually make and observe changes on website, use the following steps:

#### Development Version

1. Make all changes in the relevant files locally in respective directory.
2. Push relevant changes to the main branch of repository so they are saved.
3. Run the build script through the `npm run deploy` command in directory on Bash. 
4. Open the development version GitHub Pages website to see changes.

#### Live Version

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


For some reason there was an issue with some Git keys and this article helped: https://stackoverflow.com/questions/68775869/support-for-password-authentication-was-removed-please-use-a-personal-access-to .


### Environment Setup

I will do this


### Domain Name

Hosting a website on GitHub Pages generally follows the following URL naming convention: `https://username.github.io/repositoryname` where `username` and `respositoryname` are replaced by an individual's respective information. The root directory for the Pages website is then the aforementioned URL. However, if the name of your repository is `username.github.io` then your Pages directory moves up a level to the `https://username.github.io` directory. It does not duplicate to be `https://username.github.io/username.github.io`. Does this make sense?


In my case the live version of the website is housed in the `https://ci2131a.github.io` directory while the development version is in the `https://ci2131a.github.io/website/` directory.


If you would like to change the domain name that GitHub chooses then you will have to look for another service to do so. Any Domain Name Service will do but some may come at a cost. I am using Google Domains. The process seems to be that you first acquire the domain name that you want to use then apply it to GitHub Pages under the custom domain field in repository settings. Next, set up some records in the domain service and the domain name change should be complete. An optional step would be to create a `CNAME` file so that subdomains will redirect to original domain. This is most notable for sites that do not have a `www.` prefix to the domain so that anyone using this prefix will be redirected to the correct domain. It is interesting how this works. This should be investigated more. 


Check out [this article](https://hossainkhan.medium.com/using-custom-domain-for-github-pages-86b303d3918a) for a quick example of changing your GitHub Pages domain name. Check out GitHub's documentation for changing a domain name [here](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).


### Multiple Pages

The multiple page Vue app required several changes that were not in the single page app that was originally set up. This [article](https://stackoverflow.com/questions/51692018/multiple-pages-in-vue-js-cli) was a helpful resource in setting up the pages configuration. Additionally, there is an [example repository](https://github.com/wandersonpjbkn/vue-mpa-application-example) to visualize the setup.  

One of the steps elicited by the Stack Overflow question is to create a directory for each of the pages and place the app files in those corresponding directiories then place all of those directories into a pages directory. Now this step is noted to be optional but I am not sure if that is true. Every time that I tried to build a multiple page app with this step ignored, the app did not work properly. Unless there was another step that I was doing wrong, then it should have worked. However, it would not work so I was forced to implement this "optional" step in order to double check. The app did work but it is still unclear if this step was the cause.

The major step was configuring the different app files in respective directories and noting the multiple pages in the `vue.config.js` file. In that file, you set the index file and specifiy its directory (this is effectively the home page) and then you name any pages with their associated dirrectories. Naming conventions for all these directories came up as something to determine what they should be. It is unclear whether they all need to be the same or if they can be different. I took the approach of just making them all the same. 

Despite the hiccups, the current configuration supports two pages and hopefully more.



### Path Issues

An issue arose which downed the live version of the website seemingly because of the development repository. For some reason, the development repository was hosting the development version of the site on GitHub pages and the live version website was pulling information from that directory. The development site was unable to be taken offline because GitHub was unable to delete the branch that was being hosted. Additionally, the public path of the development version being the GitHub host name followed by `/website/` was or was not that of the live version so was not or was conflicting with development version. Removing the public path resulted in blank website.


GitHub will always publish a site with a `gh-pages` branch as well as a `pages` branch apparently (I tried changing the branch name to pages in the deploy script so that we might avoid this issue but it did not work). See the [documentation](https://docs.github.com/en/pages) for more information. So, the main live version is at the domain `ci2131a.github.io`. I accuired a different domain so that has been changed to charlesingulli.com. Since github hosts any branch named pages, the development repository is hosted as a subpage in the sub directory /website/ (taking the name of the development repository).


This article helped in setting environments for the development and production versions of the site https://stackoverflow.com/questions/65149203/why-my-vue-app-doesnt-appear-in-the-deploy-version. Since the development version of the site is housed in another repository that production path ends up being `/website` while being developed and pushed to GitHub while it is just `/` the current directory when it is copied over to the live version.



### Video Files

On the limoncello page, I placed a video file within the recipe to round out the page. Getting the video file to appear and render correctly was a little challenging. In addition to the issues of copying the video from DVD to digital (which I will touch on later), there was the issue of actually getting the video file to play with sound. For a time, I was using the `<video>` tag to source an `mp4` file and display it on the page. However, one of the files played without sound and another was too big to be pushed to GitHub. Git had this [large file storage extension](https://git-lfs.github.com/) which I looked at and installed but did not use. 


Josh suggested just embedding a YouTube file onto the page as an easier solution. On my own, I came across this "[Vue YouTube Embed](https://www.npmjs.com/package/vue-youtube-embed)" component which I also installed but did not use. Ultimately, Josh just had me use an `iframe` to display the YouTube video. It works thus far and seems like the most reasonable method. The video sits on YouTube too so it can just be shared that way.

### npm setup (from npm Docs)
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


# Revision History

| Date          | Version       | Description  |
| ------------- |:-------------:| -------------|
| 01/10/2021    | 1.0.0         | Initial version |
| 07/21/2021    | 1.0.1         | Fix render issue |
| 09/14/2021	| 1.0.1			| Update README |
| 12/26/2021	| 1.1.0			| Add new page |
| 1/18/2024		| 2.0.0			| Structure overhaul |

* The version number needs to be changed in the `package.json` and `package-lock.json` files. This is where you can set the name shown in the tab of a web browser for the website.
