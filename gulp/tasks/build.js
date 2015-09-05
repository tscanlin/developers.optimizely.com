var gulp = require('gulp');

gulp.task('build', [
  'concat',
  'html-templates',
  'copy-files',
  'sass',
  'browserify',
  'images',
]);
