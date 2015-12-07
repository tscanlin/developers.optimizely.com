var gulp = require('gulp');

gulp.task('build', [
  'copy-files',
  'sass',
  'browserify',
  'images',
  'browser-sync-reload',
  // 'markdown2',
  // 'html-templates',
]);
