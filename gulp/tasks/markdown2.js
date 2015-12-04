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

  // Here keyPathArray has length of 0.
  // If there are no more paths in keyPathArray then it is the filename.
  subObject.fileName = currentPath;

  console.log(currentPath, subObject.fileName);
  if (!subObject) {
    console.log(keyPathArray, currentPath, object);
  }

  // Return a de-referenced copy.
  return subObject;
}


// Gulp task
gulp.task('markdown2', ['html-templates'], function() {
  return gulp.src([
    path.join(paths.src + paths.content, '**/*.md'),
  ])
  // .pipe(markdown())
  // This produces a JSON object with the front-matter and the HTML for the
  // markdown in a property called 'body'.
  .pipe(tap(function(file, t) {
    if (!siteJson) {
      siteJson = JSON.parse(fs.readFileSync(path.join(paths.build, 'content.json')));
    }
    var relativePath = file.path
      .split(file.base)
      .join('')
      .split('.md')
      .join('');
    var pathArray = relativePath.split('/');
    var pathArrayCopy = [].concat(pathArray);
    // console.log(file, relativePath, pathArray);
    var dataObj = getKeyPath(pathArrayCopy, extend({}, siteJson));

    if (!dataObj) {
      // console.log(pathArray, dataObj)
    }

    dataObj = extend(dataObj, {
      relativePath: relativePath,
      pathArray: pathArray,
    });
    // console.log(dataObj.fileName);


    if (dataObj.includeSiblingData) {
      pathArrayCopy = [].concat(pathArray);
      var thisKey = pathArrayCopy.pop();
      var siblingData = getKeyPath(pathArrayCopy, extend({}, siteJson));
      dataObj = extend(dataObj, {
        siblingData: siblingData,
      });
      // delete dataObj.siblingData[thisKey];
    }

    var tpl = swig.compileFile(paths.templates + dataObj.template + '.html');
    // var a = extend(dataObj);
    // delete a.body;
    // console.log(a);
    // if (relativePath === 'rest/reference/index') {
    //   console.log(dataObj);
    // }
    file.contents = new Buffer(tpl(dataObj), 'utf8'); //eslint-disable-line
    return file;

    // var baseDir = file.base;
    // var json = JSON.parse(file.contents.toString());
    //
    // function iterateGroup(directory, group, flatObject) {
    //   for (var key in group) { //eslint-disable-line
    //     var object = group[key];
    //     if (object.template) {
    //       var newProps = {
    //         filePath: directory + '/' + key
    //       };
    //       console.log(newProps, flatObject);
    //       object = extend(object, newProps)
    //       flatObject[newProps.filePath] = object;
    //     } else {
    //       iterateGroup(directory + '/' + key, object, flatObject);
    //     }
    //   }
    //   return flatObject;
    // }
    //
    //
    // for (var topDir in json) { //eslint-disable-line
    //   var group = json[topDir];
    //   var flatGroup = iterateGroup(topDir, group, {});
    //
    //   for (var file in flatGroup) { //eslint-disable-line
    //     var obj = flatGroup[file];
    //     var tpl = swig.compileFile(paths.templates + obj.template + '.html');
    //     fs.writeFileSync(baseDir + file + '.html', tpl(obj));
    //   }
    //   console.log('G', topDir, flatGroup);
    //
    //   // console.log(topDir);
    //   // for (var dirLvl2 in group) {
    //   //   var group2 = group[dirLvl2];
    //   //   console.log(dirLvl2);
    //   //   if (group2.template) {
    //   //     console.log(group2.template);
    //   //     var tpl = swig.compileFile(paths.templates + template + '.html');
    //   //     file.contents = new Buffer(tpl(json), 'utf8'); //eslint-disable-line
    //   //   }
    //   // }
    // }


    // var template = json.template || 'default';
    //
    // var fileName = path.basename(file.path);
    // json.fileName = fileName.replace(/\.[^/.]+$/, ''); // Get the file name without the extension.
    //
    // // Split on the content path since that is the root.
    // var relativePath = file.path.split(paths.content)[1];
    // // Remove the filename from it.
    // relativePath = relativePath.split(fileName).join('');
    // json.relativePath = relativePath;
    //
    // // topPath for expanding sections.
    // var topPath = '/' + relativePath.split('/')[0] + '/';
    // json.topPath = topPath;
    //
    // // Ex: 'reference'
    // json.subPath = relativePath.split('/')[1] || '';
    //
    // var tpl = swig.compileFile(paths.templates + template + '.html');
    // file.contents = new Buffer(tpl(json), 'utf8'); //eslint-disable-line
  }))
  .pipe(rename({
    extname: '.html',
  }))
  .pipe(gulp.dest(paths.build))
  .on('error', handleErrors)
  .pipe(browserSync.reload({stream: true}));
});
