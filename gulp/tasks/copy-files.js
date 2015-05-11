var gulp         = require('gulp');
var path         = require('path');
var handleErrors = require('../util/handleErrors');
var paths        = require('../../config').paths;

gulp.task('copy-files', function () {
  return gulp.src([
      path.join(paths.src + paths.files, '**/*')
    ])
    .on('error', handleErrors)
    .pipe(gulp.dest(paths.build));
});
