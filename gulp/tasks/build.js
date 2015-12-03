var gulp = require('gulp');

gulp.task('build', [
  'data',
  'concat',
  'html-templates',
  'copy-files',
  'sass',
  'browserify',
  'images',
]);
