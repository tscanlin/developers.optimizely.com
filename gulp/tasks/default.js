var gulp = require('gulp');

gulp.task('default', [
  'html-templates',
  'sass',
  'browserify',
  'images',
  'browser-sync',
  'watch'
]);
