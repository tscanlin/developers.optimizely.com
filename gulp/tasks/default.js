var gulp = require('gulp');

gulp.task('default', [
  'build',
  'browser-sync',
  'watch',
  'browser-sync-reload', // does 'html' and 'html-templates' too.
]);
