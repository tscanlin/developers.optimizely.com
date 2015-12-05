var gulp = require('gulp');
var browserSync = require('browser-sync');
var swig = require('swig');
var markedSwig = require('swig-marked');
var markdown = require('gulp-markdown-to-json');
var rename = require('gulp-rename');
var util = require('gulp-util');
var path = require('path');
var handleErrors = require('../util/handleErrors');
var paths = require('../../config').paths;

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


// Gulp task
gulp.task('data', function() {
  return gulp.src([
    path.join(paths.src + paths.content, '**/*.md'),
  ])
  .pipe(util.buffer())
  .pipe(markdown())
  .pipe(rename({
    extname: '.json',
  }))
  .pipe(gulp.dest(paths.build))
  .on('error', handleErrors);
});
