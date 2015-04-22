var gulp         = require('gulp');
var path         = require('path');
var handleErrors = require('../util/handleErrors');
var paths        = require('../config').paths;

gulp.task('watch', ['browser-sync'], function() {
  // Watch task for images
  gulp.watch(path.join(paths.src + paths.img, '**/*'), ['images'])
    .on('error', handleErrors);

  // Watch task for sass
  gulp.watch(path.join(paths.src + paths.scss, '**/*.scss'), ['sass'])
    .on('error', handleErrors);

  // Watch task for js
  gulp.watch(path.join(paths.src + paths.js, '**/*.js'), ['browserify'])
    .on('error', handleErrors);

  // Watch tasks for html
  gulp.watch(path.join(paths.src + paths.layouts, '**/*.html'), ['html-templates'])
    .on('error', handleErrors);
  // gulp.watch(path.join(paths.src + paths.pages, '**/*.html'), ['html-templates'])
  //   .on('error', handleErrors);
  gulp.watch(path.join(paths.src + paths.content, '**/*.md'), ['markdown'])
    .on('error', handleErrors);
  gulp.watch(path.join(paths.src + paths.partials, '**/*.html'), ['html-templates', 'markdown'])
    .on('error', handleErrors);
});
