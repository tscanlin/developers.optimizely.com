var gulp = require('gulp');
var markdown = require('gulp-markdown-to-json');
var rename = require('gulp-rename');
var util = require('gulp-util');
var path = require('path');
var handleErrors = require('../util/handleErrors');
var paths = require('../../config').paths;

// Gulp task
gulp.task('data', function() {
  return gulp.src([
    path.join(paths.src, paths.content, '**/*.md'),
  ])
  .pipe(util.buffer())
  .pipe(markdown())
  .pipe(rename({
    extname: '.json',
  }))
  .pipe(gulp.dest(paths.build))
  .on('error', handleErrors);
});
