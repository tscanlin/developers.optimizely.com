var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var swig         = require('swig');
var markedSwig   = require('swig-marked');
var markdown     = require('gulp-markdown-to-json');
var fs           = require('fs');
var glob         = require('glob');
var rename       = require('gulp-rename');
var tap          = require('gulp-tap');
var util         = require('gulp-util');
var path         = require('path');
var handleErrors = require('../util/handleErrors');
var paths        = require('../../config').paths;

swig.setDefaults({
  cache: false,
  loader: swig.loaders.fs(paths.src),
  locals: {
    paths: paths
  }
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
swig.setFilter('stringify', filter_stringify );

// Add swig-highlight for code highlighting
require('swig-highlight').apply(swig);


// Gulp task
gulp.task('concat', ['markdown'], function (cb) {
  return gulp.src([
      path.join(paths.src + paths.content, '**/index.concat')
    ])
    .pipe(markdown())
    // This produces a JSON object with the front-matter and the HTML for the
    // markdown in a property called 'body'.
    .pipe(tap(function(file, t) {
      var json = JSON.parse(file.contents.toString());
      var template = json.template || 'default';

      var fileName = path.basename(file.path);
      json.fileName = fileName.replace(/\.[^/.]+$/, ""); // Get the file name without the extension.

      // Split on the content path since that is the root.
      var relativePath = file.path.split(paths.content)[1];
      // Remove the filename from it.
      relativePath = relativePath.split(fileName).join('');

      // Get the html from the build directory for the different sections. These
      // sections are specified in the front-matter of the index.concat files.
      var concatHtml = '';
      var sections = json.sections;
      sections.forEach(function(section) {
        var filesArray = glob.sync(paths.build + relativePath + section + '/*.html');
        filesArray.forEach(function(file) {
          concatHtml += fs.readFileSync(file).toString();
        });
      });

      json.body = concatHtml;
      var tpl = swig.compileFile(paths.templates + template + '.html');
      file.contents = new Buffer(tpl(json), 'utf8');
    }))
    .pipe(rename({
      extname: '.html'
    }))
    .pipe(gulp.dest(paths.build))
    .on('error', handleErrors)
    .pipe(browserSync.reload({stream:true}));
});
