var gulp = require('gulp');

gulp.task('build', [
  'copy-files',
  'sass',
  'browserify',
  'images',
  'markdown',
]);
