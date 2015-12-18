var gulp = require('gulp');

gulp.task('default', [
  'build',
  'browser-sync',
  'watch',
  'browser-sync-reload', // does 'markdown' and 'html-templates' too.
]);
