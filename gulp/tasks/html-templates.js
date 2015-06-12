var gulp = require('gulp');
var swig = require('gulp-swig');
var markedSwig = require('swig-marked');
var browserSync = require('browser-sync');
var yaml = require('js-yaml');
var fs = require('fs');
var path = require('path');
var handleErrors = require('../util/handleErrors');
var paths = require('../../config').paths;

try {
  var dimensions = yaml.safeLoad(fs.readFileSync('./src/pages/rest/conditions/dimensions.yaml', 'utf8'));
  var dimensions_meta = yaml.safeLoad(fs.readFileSync('./src/pages/rest/conditions/dimensions-meta.yaml', 'utf8'));
  console.log(dimensions);
} catch (e) {
  console.log(e);
}

var json = {
  dimensions: dimensions,
  dimensions_meta: dimensions_meta,
};

var opts = {
  setup: function(swig) {
    swig.setDefaults({
      cache: false,
      loader: swig.loaders.fs(paths.src),
      locals: {
        paths: paths,
        json: json,
      },
    });

    // Use markdown with swig (as a filter and a tag).
    markedSwig.useFilter(swig);
    markedSwig.useTag(swig);

    // Add stringify filter to swig.
    // From: https://github.com/paularmstrong/swig/issues/582
    function filter_stringify(input) {
      return JSON.stringify(input);
    }
    filter_stringify.safe = true;
    swig.setFilter('stringify', filter_stringify);

    // Add swig-highlight for code highlighting.
    require('swig-highlight').apply(swig);
  },
};

gulp.task('html-templates', function() {
  return gulp.src([
      path.join(paths.src + paths.pages, '**/*.html'),
    ])
    .pipe(swig(opts))
    .on('error', handleErrors)
    .pipe(gulp.dest(paths.build))
    .pipe(browserSync.reload({stream: true}));
});
