var gulp = require('gulp');
var extend = require('xtend');
var browserSync = require('browser-sync');
var nunjucks = require('nunjucks');
var nunjucksMarkdown = require('nunjucks-markdown');
var marked = require('marked');
var rename = require('gulp-rename');
var tap = require('gulp-tap');
var util = require('gulp-util');
var path = require('path');
var fs = require('fs');
var yaml = require('js-yaml');
var handleErrors = require('../util/handleErrors');
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

try {
  var dimensions = yaml.safeLoad(fs.readFileSync('./src/data/conditions/dimensions.yaml', 'utf8'));
  var dimensions_meta = yaml.safeLoad(fs.readFileSync('./src/data/conditions/dimensions-meta.yaml', 'utf8'));
} catch (e) {
  console.log(e);
}

var json = {
  dimensions: dimensions,
  dimensions_meta: dimensions_meta,
};


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
gulp.task('html', ['data'], function() {
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
      pathArrayCopy.pop(); // Should always be index so thisKey is not needed.
      var siblingData = getKeyPath(pathArrayCopy, siteJson);
      // Add fileName prop with helper function.
      addFileNameToObjectsWithTitle(siblingData);
      dataObj = extend(dataObj, {
        siblingData: siblingData,
      });
      delete dataObj.siblingData['index'];
    }

    // Add global variables, paths and json objects.
    dataObj.paths = paths;
    dataObj.json = json;

    if (dataObj.template
      && dataObj.template !== 'inline'
      && dataObj.template !== 'multi-example'
      && dataObj.template !== 'sidebyside') {
      var filePath = path.resolve(paths.src + paths.templates + dataObj.template + '.html');
      // console.log(filePath, dataObj, env.render(filePath, dataObj));
      file.contents = new Buffer(env.render(filePath, dataObj), 'utf8'); //eslint-disable-line
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
