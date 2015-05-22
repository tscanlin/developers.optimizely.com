var gulp         = require('gulp');
var changed      = require('gulp-changed');
// var imagemin   = require('gulp-imagemin');
var browserSync  = require('browser-sync');
var path         = require('path');
var handleErrors = require('../util/handleErrors');
var paths        = require('../../config').paths;

gulp.task('images', function() {
  return gulp.src([
      path.join(paths.src + paths.img, '**/*.gif'),
      path.join(paths.src + paths.img, '**/*.svg'),
      path.join(paths.src + paths.img, '**/*.png')
    ])
    .pipe(changed(paths.build + paths.img)) // Ignore unchanged files
    // .pipe(imagemin()) // Optimize
    .on('error', handleErrors)
    .pipe(gulp.dest(paths.build + paths.img))
    .pipe(browserSync.reload({stream:true}));
});
