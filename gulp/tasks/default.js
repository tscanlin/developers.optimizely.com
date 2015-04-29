var gulp = require('gulp');

gulp.task('default', [
  // 'markdown',
  'concat',
  'html-templates',
  'sass',
  'browserify',
  'images',
  'browser-sync',
  'watch'
]);
