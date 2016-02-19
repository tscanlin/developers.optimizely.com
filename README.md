# Optimizely's Developers Site
You can find the new developer documentation website here: [http://developers.optimizely.com](http://developers.optimizely.com)

### Prerequisites
- Have [node.js](https://nodejs.org/) installed. (You will need at minimum version 0.12.x)
- Have [git ssh keys](https://help.github.com/articles/generating-ssh-keys/) setup.

### To install

Clone the repository

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

### Contributing

Contributions are welcome! Please open pull requests against master.

Also, please tag @tscanlin in general PRs for this repository and I can ensure the proper content owners are also tagged. Thanks!
