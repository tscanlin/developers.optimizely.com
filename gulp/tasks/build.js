var gulp = require('gulp');

gulp.task('build', [
  // 'markdown',
  'concat',
  'html-templates',
  'copy-files',
  'sass',
  'browserify',
  'images',
]);
