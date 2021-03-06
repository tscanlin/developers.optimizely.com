var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var handleErrors = require('../util/handleErrors');
var paths = require('../../config').paths;

gulp.task('browser-sync', function() {
  browserSync.init({
    // reloadDelay: 200,
    // reloadDebounce: 3500,
    notify: {
      styles: ['position:fixed;top:5px;right:5px;width:10px;height:10px;background:#c82144;border-radius:50%;overflow:hidden;color:#c82144;z-index:99999'],
    },
    port: 4000,
    server: {
      baseDir: paths.build,
    },
  });
});

gulp.task('browser-sync-reload', ['html'], function() {
  return browserSync.reload();
});
