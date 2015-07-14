# developers.optimizely.com
New developer documentation website (in progress) it will become - http://developers.optimizely.com/

### Prerequisites
- have node.js installed
- have github access and git setup properly

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
```
# IMPORTANT: Make sure you have pulled the latest changes from the master branch
# AND have the site running locally, then run:
npm run deploy
```

### Troubleshooting

Most errors / compilation weirdness can be solved with:
```
npm run clean
```

If npm install throws an error mentioning browserify then run:
```
npm install --save-dev browserify
```

If you are getting weird node dependency errors that don't make sense then run this to start fresh:
```
rm -rf node_modules/
npm install
```
