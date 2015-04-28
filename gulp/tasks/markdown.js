var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var swig         = require('swig');
var markedSwig   = require('swig-marked');
var markdown     = require('gulp-markdown-to-json');
var rename       = require('gulp-rename');
var tap          = require('gulp-tap');
var util         = require('gulp-util');
var path         = require('path');
var handleErrors = require('../util/handleErrors');
var paths        = require('../../config').paths;

swig.setDefaults({
  cache: false,
  loader: swig.loaders.fs(paths.src)
});

// Use markdown with swig.
markedSwig.useFilter(swig);
markedSwig.useTag(swig);

gulp.task('markdown', function () {
  return gulp.src([
      path.join(paths.src + paths.content, '**/*.md')
    ])
    .pipe(markdown())
    // This produces a JSON object with the front-matter and the HTML for the
    // markdown in a property called 'body'.
    .pipe(tap(function(file, t) {
      var json = JSON.parse(file.contents.toString());
      json.fileName = path.basename(file.path);
      var template = json.template || 'default';
      var tpl = swig.compileFile(paths.templates + template + '.html');
      file.contents = new Buffer(tpl(json), 'utf8');
    }))
    .pipe(rename({
      extname: '.html'
    }))
    .pipe(gulp.dest(paths.build))
    .on('error', handleErrors)
    .pipe(browserSync.reload({stream:true}));
});
