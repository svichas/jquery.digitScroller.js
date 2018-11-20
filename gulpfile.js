
const gulp = require('gulp');
// const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const sass = require("gulp-sass");
const autoprefixer = require('gulp-autoprefixer');

const jsfiles = [
  'src/*.js',
  'src/**/*.js',
  'src/**/**/*.js',
  'src/**/**/**/*.js'
];

const scssfiles = [
  'src/*.scss',
  'src/**/*.scss',
  'src/**/**/*.scss',
  'src/**/**/**/*.scss'
];

gulp.task('js-concat', function() {

  gulp.src(jsfiles)
  .pipe(rename('jquery.digitScroller.js'))
  .pipe(gulp.dest('dist/'));

  // gulp.src(jsfiles)
  // .pipe(uglify())
  // .pipe(rename('jquery.digitScroller.min.js'))
  // .pipe(gulp.dest('dist/'));

});

gulp.task('scss-compile', function() {

  gulp.src(scssfiles)
  .pipe(sass({outputStyle: "expanted"}).on("error", sass.logError))
  .pipe(autoprefixer({
    browsers: ['last 4 versions'],
    cascade: false
  }))
  .pipe(rename('jquery.digitScroller.css'))
  .pipe(gulp.dest('dist/'));
  //
  // gulp.src(scssfiles)
  // .pipe(sass({outputStyle: "compressed"}).on("error", sass.logError))
  // .pipe(rename('jquery.digitScroller.min.css'))
  // .pipe(gulp.dest('dist/'));

});

gulp.task('compile', function() {

  gulp.watch(jsfiles, ['js-concat']);
  gulp.watch(scssfiles, ['scss-compile']);

});
