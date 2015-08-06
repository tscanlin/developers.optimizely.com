# Optimizely's Developers Site
You can find the new developer documentation website here: [http://developers.optimizely.com](http://developers.optimizely.com)

### Prerequisites
- Have [node.js](https://nodejs.org/) installed.
- Have [git ssh keys](https://help.github.com/articles/generating-ssh-keys/) setup.

### To install

Run this in the repository directory:
```
npm update
npm install
```

### To run

Run this in the repository directory:
```
npm run gulp
```

### To deploy

**IMPORTANT:** Make sure you have pulled the latest changes from the master branch
*AND* kill `npm run gulp` (Ctrl + C), run `npm run clean` and restart `npm run gulp` before a deploy
*AND* have verified the changes on the site running locally, then run:
```
npm run deploy
```

After deploying verify your changes on the live site: [http://developers.optimizely.com](http://developers.optimizely.com)

### Troubleshooting

Most errors / compilation weirdness can be solved with:
```
npm run clean
```

If you are getting weird node dependency errors that don't make sense then run this to start fresh:
```
rm -rf node_modules/
npm install
```

If you get a node error mentioning "EMFILE" then try running:
```
ulimit -n 2560
```
and restart `npm run gulp`

### Contributing

Contributions are welcome! Please open pull requests against master.

Also, please tag @tscanlin in general PRs for this repository and I can ensure the proper content owners are also tagged.

Thanks!
