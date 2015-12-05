var gulp = require('gulp');
var extend = require('xtend');
var browserSync = require('browser-sync');
var swig = require('swig');
var markedSwig = require('swig-marked');
var markdown = require('gulp-markdown-to-json');
var rename = require('gulp-rename');
var tap = require('gulp-tap');
var util = require('gulp-util');
var path = require('path');
var fs = require('fs');
var handleErrors = require('../util/handleErrors');
var paths = require('../../config').paths;
var siteJson; // Cache reference to site JSON.

// SWIG
// Swig config.
swig.setDefaults({
  cache: false,
  loader: swig.loaders.fs(paths.src),
  locals: {
    paths: paths,
  },
});

// Use markdown with swig (as a filter and a tag).
markedSwig.useFilter(swig);
markedSwig.useTag(swig);

// Add stringify filter to swig.
// From: https://github.com/paularmstrong/swig/issues/582
function filter_stringify(input) {
  return JSON.stringify(input);
}
filter_stringify.safe = true;
swig.setFilter('stringify', filter_stringify);

// Add swig-highlight for code highlighting.
require('swig-highlight').apply(swig);


// HELPERS
function getKeyPath(keyPathArray, object) {
  var currentPath = keyPathArray.shift();
  var subObject;

  if (object[currentPath]) {
    subObject = object[currentPath];
  }

  if (keyPathArray.length) {
    return getKeyPath(keyPathArray, subObject);
  }

  // Return a de-referenced copy.
  return extend({}, subObject);
}

function addFileNameToObjectsWithTitle(object) {
  for (var section in object) { //eslint-disable-line
    var item = object[section];
    if (item.title) {
      item.fileName = section;
    } else {
      addFileNameToObjectsWithTitle(item);
    }
  }
  return object;
}


// Gulp task
gulp.task('markdown2', ['html-templates'], function() {
  return gulp.src([
    path.join(paths.src + paths.content, '**/*.md'),
  ])
  .pipe(tap(function(file, t) {
    siteJson = JSON.parse(fs.readFileSync(path.join(paths.build, 'content.json')));

    var relativePath = file.path
      .split(file.base)
      .join('')
      .split('.md')
      .join('');
    var pathArray = relativePath.split('/');
    var pathArrayCopy = [].concat(pathArray);
    var dataObj = getKeyPath(pathArrayCopy, siteJson);

    dataObj = extend(dataObj, {
      relativePath: relativePath,
      pathArray: pathArray,
    });

    if (dataObj.includeSiblingData) {
      pathArrayCopy = [].concat(pathArray);
      var thisKey = pathArrayCopy.pop();
      var siblingData = getKeyPath(pathArrayCopy, siteJson);
      // Add fileName prop with helper function.
      addFileNameToObjectsWithTitle(siblingData);
      dataObj = extend(dataObj, {
        siblingData: siblingData,
      });
      delete dataObj.siblingData[thisKey];
    }

    if (dataObj.template
      && dataObj.template !== 'inline'
      && dataObj.template !== 'sidebyside') {
      var tpl = swig.compileFile(paths.templates + dataObj.template + '.html');
      file.contents = new Buffer(tpl(dataObj), 'utf8'); //eslint-disable-line
      return file;
    }
  }))
  .pipe(rename({
    extname: '.html',
  }))
  .pipe(gulp.dest(paths.build))
  .on('error', handleErrors);
  // .pipe(browserSync.reload({stream: true}));
});
