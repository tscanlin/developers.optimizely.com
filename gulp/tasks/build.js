var gulp = require('gulp');

gulp.task('build', [
  'copy-files',
  'sass',
  'browserify',
  'images',
  'browser-sync-reload', // does 'markdown' and 'html-templates' too.
]);
