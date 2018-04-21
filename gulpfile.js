var gulp   = require('gulp');
var rename = require("gulp-rename");
var less   = require('gulp-less');
var path   = require('path');
var clean  = require('gulp-clean-css');

gulp.task('default',
  [
    'less',
    'minify'
  ], function() {}
);

gulp.task('less', function (cb) {
  var compile_less = function()
  {
    gulp
      .src('./less/000_compile/_master_compile.less')
      .pipe(less({
        paths: [ path.join(__dirname, 'less', 'includes') ]
      }))
      .pipe(rename('style.css'))
      .pipe(gulp.dest('./css/'));

    gulp
      .src('./less/000_compile/_anim_compile.less')
      .pipe(less({
        paths: [ path.join(__dirname, 'less', 'includes') ]
      }))
      .pipe(rename('anim.css'))
      .pipe(gulp.dest('./css/'));
    gulp
      .src('./less/000_compile/_utility_compile.less')
      .pipe(less({
        paths: [ path.join(__dirname, 'less', 'includes') ]
      }))
      .pipe(rename('util.css'))
      .pipe(gulp.dest('./css/'));
  };
  return compile_less();
});

gulp.task('minify', () => {
  return gulp.src('./css/*.css')
    .pipe(clean({compatibility: 'ie8'}))
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest('./css/'));
});