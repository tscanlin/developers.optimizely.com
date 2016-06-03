# Optimizely's Developers Site
You can find the new developer documentation website here: [http://developers.optimizely.com](http://developers.optimizely.com)

### Prerequisites
- Have [node.js](https://nodejs.org/) installed. (You will need at minimum version 0.12.x)
- Have [git ssh keys](https://help.github.com/articles/generating-ssh-keys/) setup.

### To install

Clone the repository (with ssh)

```sh
git clone git@github.com:optimizely/developers.optimizely.com.git
```

Change to the repository directory and install dependencies

```sh
cd developers.optimizely.com
npm install
```

### To run locally

```sh
npm run start
```

### To deploy

**Deploys now happen automatically** (using travis) on any commits into the master branch (PR or direct) as long as it still builds successfully. Deploys through travis usually take 2-5 mins to complete. However, the below steps will still work if you need to force a deploy from your local branch.

**IMPORTANT:** Make sure you have pulled the latest changes from the master branch (by running `git pull`) *AND* also make sure that you have verified the changes on the site running locally, then run:

```sh
npm run deploy
```

After deploying verify your changes on the live site: [http://developers.optimizely.com](http://developers.optimizely.com)

### Troubleshooting

Most errors / compilation weirdness can be solved with:

```sh
npm run clean
```

If you are getting weird node dependency errors that don't make sense then run this to start fresh:

```sh
rm -rf node_modules/
npm install
```

If you get a node error mentioning "EMFILE" then try running:

```sh
ulimit -n 2560
```

and then restart `npm run start`.

If you get a message asking for a username / password then you probably cloned the repo with https instead of ssh. You will need to switch origin to use ssh. Also make sure you have your ssh key in github.

```sh
git remote rm origin
git remote add origin git@github.com:optimizely/developers.optimizely.com.git
```

If you get an error saying `Template render error: dictsort filter: val must be an object` it usually means that the markdown files for more complex templates like `page-sidebar--full.html` are missing or not named properly.

To help debug template rendering issues, it's very helpful to try and locate the file where the error is coming from. One way this can be done is by changing the markdown extension to something other than `.md`, that way you can get the site to compile and narrow down which file is causing issues.

### Contributing

Contributions are welcome! If you could read our [Contributor License Agreement](https://github.com/optimizely/developers.optimizely.com/blob/master/src/files/docs/OptimizelyCLA.pdf), fill out [this form](https://docs.google.com/forms/d/1jbwkDOTLOrG1461OkwC65KK8JdOcKOX7UILrsQmbgbg/viewform), and open your pull request against the master branch that would be great.

Also, please tag @tscanlin in general PRs for this repository and I can ensure the proper content owners are also tagged. Thanks!
