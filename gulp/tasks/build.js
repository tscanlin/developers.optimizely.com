var gulp = require('gulp');

gulp.task('build', [
  'markdown2',
  // 'concat',
  'html-templates',
  'copy-files',
  'sass',
  'browserify',
  'images',
]);
