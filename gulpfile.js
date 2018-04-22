var gulp   = require('gulp');
var rename = require("gulp-rename");
var less   = require('gulp-less');
var path   = require('path');
var clean  = require('gulp-clean-css');

var DEST   = './css/'

gulp.task('default',
  [
    'build_css'
  ], function() {}
);

var compile_files = {
  './less/000_compile/_master_compile.less'  : 'style.css',
  './less/000_compile/_anim_compile.less'    : 'anim.css',
  './less/000_compile/_utility_compile.less' : 'util.css'
};

gulp.task('build_css', function () {
  var compile_less = function()
  {

    for ( var file in compile_files ) {

      gulp
        .src(file)
        .pipe(less(
          {
            paths: [ path.join(__dirname, 'less', 'includes') ]
          })
        )
        .pipe(rename(compile_files[file]))
        .pipe(gulp.dest(DEST))
        .pipe(clean({compatibility: 'ie8'}))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(DEST))

    };
  };
  return compile_less();
});