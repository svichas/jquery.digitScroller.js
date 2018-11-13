
const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const sass = require("gulp-sass");

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
  .pipe(concat('main.js'))
  .pipe(rename('jquery.digitScroller.js'))
  .pipe(gulp.dest('dist/'));

  gulp.src(jsfiles)
  .pipe(concat('main.js'))
  .pipe(uglify())
  .pipe(rename('jquery.digitScroller.min.js'))
  .pipe(gulp.dest('dist/'));

});

gulp.task('scss-compile', function() {

  gulp.src(files)
  .pipe(sass({outputStyle: "compressed"}).on("error", sass.logError))
  .pipe(rename('jquery.digitScroller.min.css'))
  .pipe(gulp.dest('dist/'));

  gulp.src(files)
  .pipe(sass({outputStyle: "expanted"}).on("error", sass.logError))
  .pipe(rename('jquery.digitScroller.css'))
  .pipe(gulp.dest('dist/'));

});

gulp.task('compile', function() {

  gulp.watch(jsfiles, ['js-concat']);
  gulp.watch(scssfiles, ['scss-compile']);

});
