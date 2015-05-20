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

If you get an error during `npm install` or `npm run gulp` mentioning `lego`, then run:
```
cd node_modules && git clone git@github.com:optimizely/lego.git
```

If npm install throws an error mentioning browserify then run:
```
npm install --save-dev browserify
```
