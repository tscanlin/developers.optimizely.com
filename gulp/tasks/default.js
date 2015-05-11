var gulp = require('gulp');

gulp.task('default', [
  // 'markdown',
  'concat',
  'html-templates',
  'copy-files',
  'sass',
  'browserify',
  'images',
  'browser-sync',
  'watch'
]);
