var gulp = require('gulp');
var path = require('path');
var handleErrors = require('../util/handleErrors');
var paths = require('../../config').paths;
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('browserify', function() {
  return browserify(path.join(paths.src, paths.js, 'index.js'))
    .bundle()
    .pipe(source('bundle.js'))
    .on('error', handleErrors)
    .pipe(gulp.dest(path.join(paths.build, paths.js)));
});
