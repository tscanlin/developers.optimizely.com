var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var path         = require('path');
var handleErrors = require('../util/handleErrors');
var paths        = require('../config').paths;
var browserify   = require('browserify');
var source       = require('vinyl-source-stream');

gulp.task('browserify', function() {
  return browserify(paths.src + paths.js + 'index.js')
    .bundle()
    .pipe(source('bundle.js'))
    .on('error', handleErrors)
    .pipe(gulp.dest(paths.build + paths.js));
});
