var gulp = require('gulp');

gulp.task('default', [
  'markdown',
  'html-templates',
  'sass',
  'browserify',
  'images',
  'browser-sync',
  'watch'
]);
