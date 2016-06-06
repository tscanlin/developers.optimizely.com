var gulp = require('gulp');
var extend = require('xtend');
var nunjucks = require('nunjucks');
var nunjucksMarkdown = require('nunjucks-markdown');
var marked = require('marked');
var path = require('path');
var fs = require('fs');
var handleErrors = require('../util/handleErrors');
var redirects = require('../../config').redirects;
var paths = require('../../config').paths;
var siteJson; // Cache reference to site JSON.

// Configure nunjucks.
// nunjucks.configure({ autoescape: true });
var env = new nunjucks.Environment(new nunjucks.FileSystemLoader('./src/', {
  noCache: true,
}), {
  throwOnUndefined: false,
  noCache: true,
});
nunjucksMarkdown.register(env, marked);

// Functions from:
// http://stackoverflow.com/questions/13542667/create-directory-when-writing-to-file-in-node-js
function ensureDirectoryExistence(filePath) {
  var dirname = path.dirname(filePath);
  if (directoryExists(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}

function directoryExists(path) {
  try {
    return fs.statSync(path).isDirectory();
  }
  catch (err) {
    return false;
  }
}

// Gulp task
gulp.task('redirects', function() {
  for (var file in redirects) {
    var obj = redirects[file];
    if (!obj.disabled) {
      var templatePath = path.resolve(paths.src + paths.templates + 'redirect.html');
      var dest = path.resolve(paths.build + file);
      var content = new Buffer(env.render(templatePath, obj), 'utf8');
      ensureDirectoryExistence(dest);
      fs.writeFileSync(dest, content);
    }
  }
});
