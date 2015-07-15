# developers.optimizely.com
New developer documentation website. [http://developers.optimizely.com/](http://developers.optimizely.com/)

### Prerequisites
- have node.js installed
- have github access
- have git ssh keys setup properly, if you don't follow directions [here](https://help.github.com/articles/generating-ssh-keys/)

### To install
```
npm update
npm install
```

### To run
```
npm run gulp
```

### To deploy
**IMPORTANT:** Make sure you have pulled the latest changes from the master branch
*AND* its a good idea to restart `npm run gulp` before a deploy
*AND* have verified the changes on the site running locally, then run:
```
npm run deploy
```
After deploying verify your changes on the live site:
[http://developers.optimizely.com/](http://developers.optimizely.com/)

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
