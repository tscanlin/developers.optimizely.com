var gulp         = require('gulp');
var swig         = require('gulp-swig');
var browserSync  = require('browser-sync');
var path         = require('path');
var handleErrors = require('../util/handleErrors');
var paths        = require('../../config').paths;

var opts = {
  setup: function(swig) {
    swig.setDefaults({
      cache: false,
      loader: swig.loaders.fs(paths.src),
      locals: {
        paths: paths
      }
    });
  }
};

gulp.task('html-templates', function () {
  return gulp.src([
      path.join(paths.src + paths.pages, '**/*.html')
    ])
    .pipe(swig(opts))
    .on('error', handleErrors)
    .pipe(gulp.dest(paths.build))
    .pipe(browserSync.reload({stream:true}));
});
