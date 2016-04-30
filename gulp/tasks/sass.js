var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var sourcemaps = require('gulp-sourcemaps');
var path = require('path');
var handleErrors = require('../util/handleErrors');
var paths = require('../../config').paths;
// var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
  return gulp.src(path.join(paths.src + paths.scss, '*.scss'))
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true,
      includePaths: [
        require('optimizely-oui').includePath,
        'node_modules',
      ],
    }))
    .on('error', handleErrors)
    .pipe(sourcemaps.write())
    // .pipe(autoprefixer({ browsers: ['last 2 version'] }))
    .pipe(gulp.dest(paths.build + paths.css))
    .pipe(browserSync.reload({stream: true}));
});
