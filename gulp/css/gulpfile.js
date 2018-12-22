const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglifycss')
const sass = require('gulp-sass')

gulp.task('default', ['copiarHTML'], () => {
  return gulp.src('./src/sass/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('estilo.min.css'))
    .pipe(uglify({ 'uglifyComments': true }))
    .pipe(gulp.dest('./src/build/css'))
} )

gulp.task('copiarHTML', () => {
  return gulp.src('./src/index.html')
    .pipe(gulp.dest('./src/build'))
})