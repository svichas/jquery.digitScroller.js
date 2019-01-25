/**
* Project: https://github.com/svichas/jquery.digitScroller.js
* Author: Stefanos Vichas
* License: MIT
*/

const gulp = require('gulp');
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

gulp.task('js-concat', () => {

  gulp.src(jsfiles)
  .pipe(rename('jquery.digitScroller.js'))
  .pipe(gulp.dest('dist/'));

});

gulp.task('scss-compile', () => {

  gulp.src(scssfiles)
  .pipe(sass({outputStyle: "expanted"}).on("error", sass.logError))
  .pipe(autoprefixer({
    browsers: ['last 4 versions'],
    cascade: false
  }))
  .pipe(rename('jquery.digitScroller.css'))
  .pipe(gulp.dest('dist/'));

});

gulp.task('compile', () => {

  gulp.watch(jsfiles, ['js-concat']);
  gulp.watch(scssfiles, ['scss-compile']);

});
